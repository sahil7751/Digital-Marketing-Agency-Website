import dynamic from "next/dynamic";
import { createMetadata } from "@/lib/site";
import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";

const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us").then((module) => module.WhyChooseUs));
const Statistics = dynamic(() => import("@/components/home/statistics").then((module) => module.Statistics));
const PortfolioPreview = dynamic(() => import("@/components/home/portfolio-preview").then((module) => module.PortfolioPreview));
const Process = dynamic(() => import("@/components/home/process").then((module) => module.Process));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then((module) => module.Testimonials));
const PricingPreview = dynamic(() => import("@/components/home/pricing-preview").then((module) => module.PricingPreview));
const BlogPreview = dynamic(() => import("@/components/home/blog-preview").then((module) => module.BlogPreview));
const Faq = dynamic(() => import("@/components/home/faq").then((module) => module.Faq));
const Newsletter = dynamic(() => import("@/components/home/newsletter").then((module) => module.Newsletter));
const Cta = dynamic(() => import("@/components/home/cta").then((module) => module.Cta));

export const metadata = createMetadata({ title: "Digital Growth Agency", description: "Lumora combines strategy, creative, and performance marketing to turn attention into lasting growth.", path: "/" });

export default function HomePage() { return <><Hero /><ServicesPreview /><WhyChooseUs /><Statistics /><PortfolioPreview /><Process /><Testimonials /><PricingPreview /><BlogPreview /><Faq /><Newsletter /><Cta /></>; }
