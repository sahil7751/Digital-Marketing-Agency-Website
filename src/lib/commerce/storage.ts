import type { Plan, PlanId } from "./plans";

export type Customer = { name: string; company: string; email: string; phone: string; website: string; category: string };
export type Purchase = { id: string; invoiceNumber: string; planId: PlanId; planName: string; amount: number; customer: Customer; createdAt: string };
export type CommerceMetrics = { visitors: number; conversions: number; revenue: number; purchases: Purchase[]; abandonedCheckouts: number };
const PURCHASES_KEY = "lumora:purchases"; const PENDING_KEY = "lumora:pending-checkout"; const VISITORS_KEY = "lumora:demo-visitors"; const ABANDONED_KEY = "lumora:abandoned-checkouts";
const canUseStorage = () => typeof window !== "undefined";
const read = <T,>(key: string, fallback: T): T => { if (!canUseStorage()) return fallback; try { const value = window.localStorage.getItem(key); return value ? JSON.parse(value) as T : fallback; } catch { return fallback; } };
const write = (key: string, value: unknown) => { if (canUseStorage()) window.localStorage.setItem(key, JSON.stringify(value)); };
export function selectPlan(plan: Plan) { write(PENDING_KEY, { planId: plan.id, selectedAt: new Date().toISOString(), completed: false }); }
export function getPendingPlanId() { return read<{ planId?: PlanId } | null>(PENDING_KEY, null)?.planId; }
export function markCheckoutStarted(planId: PlanId) { const current = read<{ planId?: PlanId; startedAt?: string; completed?: boolean } | null>(PENDING_KEY, null); if (current?.startedAt && !current.completed) write(ABANDONED_KEY, read<number>(ABANDONED_KEY, 0) + 1); write(PENDING_KEY, { ...current, planId, startedAt: new Date().toISOString(), completed: false }); }
export function completePurchase(plan: Plan, customer: Customer) { const purchases = read<Purchase[]>(PURCHASES_KEY, []); const purchase: Purchase = { id: `ord_${crypto.randomUUID().slice(0, 8).toUpperCase()}`, invoiceNumber: `INV-${Date.now().toString().slice(-8)}`, planId: plan.id, planName: plan.name, amount: plan.price ?? 0, customer, createdAt: new Date().toISOString() }; write(PURCHASES_KEY, [purchase, ...purchases]); write(PENDING_KEY, { planId: plan.id, completed: true }); return purchase; }
export function getLatestPurchase() { return read<Purchase[]>(PURCHASES_KEY, [])[0] ?? null; }
export function getCommerceMetrics(): CommerceMetrics { const purchases = read<Purchase[]>(PURCHASES_KEY, []); const visitors = read<number>(VISITORS_KEY, 1248); const pending = read<{ startedAt?: string; completed?: boolean } | null>(PENDING_KEY, null); return { visitors, conversions: purchases.length, revenue: purchases.reduce((total, purchase) => total + purchase.amount, 0), purchases, abandonedCheckouts: read<number>(ABANDONED_KEY, 0) + (pending?.startedAt && !pending.completed ? 1 : 0) }; }
export function recordDemoVisit() { const visitors = read<number>(VISITORS_KEY, 1248); write(VISITORS_KEY, visitors + 1); }
