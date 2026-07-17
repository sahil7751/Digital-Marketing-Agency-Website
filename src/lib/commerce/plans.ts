export type PlanId = "foundation" | "acceleration" | "partnership";
export type Plan = { id: PlanId; name: string; price: number | null; priceLabel: string; popular?: boolean; features: string[] };

export const plans: Plan[] = [
  { id: "foundation", name: "Foundation", price: 4999, priceLabel: "₹4,999/month", features: ["SEO Audit", "5 Keywords", "Monthly Report"] },
  { id: "acceleration", name: "Acceleration", price: 9999, priceLabel: "₹9,999/month", popular: true, features: ["SEO", "Google Ads", "Social Media", "Weekly Reports"] },
  { id: "partnership", name: "Partnership", price: null, priceLabel: "Custom Pricing", features: ["Complete Digital Marketing", "Dedicated Manager", "Unlimited Support"] },
];

export function findPlan(planId: string | null | undefined) { return plans.find((plan) => plan.id === planId); }
export function getPlan(planId: string | null | undefined) { return findPlan(planId) ?? plans[1]; }
