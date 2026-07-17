import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/pages/breadcrumb";
import { CheckoutClient } from "@/components/commerce/checkout-client";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
export const metadata: Metadata = { title: "Checkout", description: "Complete your Lumora marketing plan purchase." };
export default function CheckoutPage() { return <><Breadcrumb current="Checkout" /><Section><Container><div className="mb-10 max-w-2xl"><p className="text-sm font-semibold text-primary">SECURE DEMO CHECKOUT</p><h1 className="mt-3 text-4xl font-semibold tracking-tight">Complete your plan.</h1><p className="mt-4 text-muted-foreground">This is a simulated payment experience. No real transaction will be made.</p></div><Suspense fallback={<div className="min-h-96" aria-busy="true" />}><CheckoutClient /></Suspense></Container></Section></>; }
