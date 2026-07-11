import { NewsletterForm } from "@/components/analytics/newsletter-form";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
export function Newsletter() { return <Section id="newsletter" className="py-12 sm:py-16"><Container><div className="rounded-3xl bg-gradient-to-br from-primary via-secondary to-slate-950 px-6 py-10 text-white sm:px-10 sm:py-14"><div className="max-w-2xl"><p className="text-sm font-semibold text-cyan-200">THE LUMORA BRIEF</p><Heading className="mt-3 text-white">One useful growth idea, every other Friday.</Heading><p className="mt-4 text-slate-200">Practical lessons from the work—no recycled advice, no noisy inbox.</p><NewsletterForm /></div></div></Container></Section>; }
