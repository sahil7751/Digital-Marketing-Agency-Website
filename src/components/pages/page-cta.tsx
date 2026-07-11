import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
export function PageCta({ title = "Ready to make your next move?", text = "Bring us the challenge. We’ll bring clear thinking, exceptional craft, and a plan that moves the metric." }: { title?: string; text?: string }) { return <Section className="py-12 sm:py-16"><Container><div className="rounded-3xl bg-slate-950 px-6 py-12 text-center text-white sm:px-12"><Heading className="mx-auto max-w-2xl text-white">{title}</Heading><p className="mx-auto mt-4 max-w-xl text-slate-300">{text}</p><div className="mt-7"><Button href="/contact" variant="secondary">Let&apos;s talk <ArrowRight className="ml-2" size={17} /></Button></div></div></Container></Section>; }
