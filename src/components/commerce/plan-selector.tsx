"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics/events";
import { plans } from "@/lib/commerce/plans";
import { selectPlan } from "@/lib/commerce/storage";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

export function PlanSelector() {
  const router = useRouter();
  function choosePlan(planId: typeof plans[number]["id"]) { const plan = plans.find((item) => item.id === planId)!; selectPlan(plan); trackEvent("pricing_plan_selected", { plan_id: plan.id, plan_name: plan.name, value: plan.price ?? 0, currency: "INR" }); router.push(`/checkout?plan=${plan.id}`); }
  return <div className="grid gap-5 lg:grid-cols-3">{plans.map((plan, index) => <motion.article key={plan.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`relative rounded-3xl border p-7 ${plan.popular ? "border-secondary bg-slate-950 text-white shadow-xl" : "bg-surface"}`}>{plan.popular && <span className="absolute -top-3 left-7 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">MOST POPULAR</span>}<Heading as="h2" size="card" className={plan.popular ? "text-white" : ""}>{plan.name}</Heading><p className={`mt-5 text-3xl font-semibold ${plan.popular ? "text-white" : ""}`}>{plan.priceLabel}</p><p className={`mt-2 text-sm ${plan.popular ? "text-slate-300" : "text-muted-foreground"}`}>{plan.price ? "Billed monthly. Cancel anytime." : "A tailored scope for your growth goals."}</p><ul className="my-8 space-y-3 text-sm">{plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={18} className={plan.popular ? "text-cyan-300" : "text-primary"} />{feature}</li>)}</ul><Button type="button" onClick={() => choosePlan(plan.id)} variant={plan.popular ? "secondary" : "outline"} className="w-full">Choose Plan</Button></motion.article>)}</div>;
}
