"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { trackEvent } from "@/lib/analytics/events";

export function NewsletterForm() { function onSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); trackEvent("newsletter_signup", { form_name: "newsletter" }); } return <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="min-h-12 flex-1 rounded-2xl border-0 px-5 text-foreground placeholder:text-slate-500" /><button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Subscribe <ArrowRight className="ml-2" size={17} /></button></form>; }
