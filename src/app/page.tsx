import { BlogPreview } from "@/components/home/blog-preview";
import { Cta } from "@/components/home/cta";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { PricingPreview } from "@/components/home/pricing-preview";
import { Process } from "@/components/home/process";
import { ServicesPreview } from "@/components/home/services-preview";
import { Statistics } from "@/components/home/statistics";
import { Testimonials } from "@/components/home/testimonials";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export default function HomePage() {
  return <><Hero /><ServicesPreview /><WhyChooseUs /><Statistics /><PortfolioPreview /><Process /><Testimonials /><PricingPreview /><BlogPreview /><Faq /><Newsletter /><Cta /></>;
}
