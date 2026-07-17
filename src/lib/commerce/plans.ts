export type PlanId = "starter" | "growth" | "enterprise";
export type Plan = { id: PlanId; name: string; price: number | null; priceLabel: string; popular?: boolean; features: string[] };

export const plans: Plan[] = [
  { id: "starter", name: "Starter", price: 4999, priceLabel: "₹4,999/month", features: ["SEO Audit", "5 Keywords", "Monthly Report"] },
  { id: "growth", name: "Growth", price: 9999, priceLabel: "₹9,999/month", popular: true, features: ["SEO", "Google Ads", "Social Media", "Weekly Reports"] },
  { id: "enterprise", name: "Enterprise", price: null, priceLabel: "Custom Pricing", features: ["Complete Digital Marketing", "Dedicated Manager", "Unlimited Support"] },
];

export function getPlan(planId: string | null | undefined) { return plans.find((plan) => plan.id === planId) ?? plans[1]; }
