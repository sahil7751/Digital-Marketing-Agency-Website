import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
export type ContentItem = { title: string; text: string; label?: string };
export function ContentGrid({ eyebrow, title, items }: { eyebrow?: string; title: string; items: ContentItem[] }) { return <Section><Container><div className="max-w-2xl">{eyebrow && <p className="text-sm font-semibold text-primary">{eyebrow}</p>}<Heading className="mt-3">{title}</Heading></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(item => <Card key={item.title} className="h-full"><p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.label}</p><Heading as="h3" size="card" className="mt-4">{item.title}</Heading><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></Card>)}</div></Container></Section>; }
