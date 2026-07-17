import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PaymentSuccess } from "@/components/commerce/payment-success";
export const metadata: Metadata = { title: "Payment Successful", robots: { index: false, follow: false } };
export default function PaymentSuccessPage() { return <Section><Container><PaymentSuccess /></Container></Section>; }
