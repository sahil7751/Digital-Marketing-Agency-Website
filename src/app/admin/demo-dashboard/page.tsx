import type { Metadata } from "next";
import { DemoDashboard } from "@/components/commerce/demo-dashboard";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
export const metadata: Metadata = { title: "Demo Analytics Dashboard", robots: { index: false, follow: false } };
export default function DemoDashboardPage() { return <Section><Container><div className="mb-10"><p className="text-sm font-semibold text-primary">LOCAL DEMO DATA</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">Conversion dashboard</h1><p className="mt-4 text-muted-foreground">Browser-local mock purchase data for testing the Lumora payment funnel.</p></div><DemoDashboard /></Container></Section>; }
