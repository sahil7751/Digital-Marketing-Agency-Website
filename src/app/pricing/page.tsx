import type { Metadata } from "next";
import { PlanSelector } from "@/components/commerce/plan-selector";
import { Breadcrumb } from "@/components/pages/breadcrumb";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
export const metadata: Metadata = { title: "Pricing", description: "Choose a Lumora digital marketing plan designed for growth." };
export default function PricingPage() { return <><Breadcrumb current="Pricing" /><PageHero eyebrow="MARKETING PLANS" title="Choose a plan built for momentum." description="Start with the marketing support that fits today, then scale your engagement as your growth goals evolve." cta="Compare plans" ctaHref="#plans" /><Section id="plans"><Container><PlanSelector /></Container></Section><PageCta title="Need a tailored scope?" text="Our enterprise team will build a growth partnership around the outcome you are working towards." /></>; }
