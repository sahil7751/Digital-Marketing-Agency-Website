"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trackEvent } from "@/lib/analytics/events";
import { submitContactRequest } from "@/lib/contact";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({ name: z.string().trim().min(2, "Please enter your name."), email: z.string().trim().email("Enter a valid work email."), company: z.string().trim().optional(), budget: z.string().min(1, "Please select a budget range."), message: z.string().trim().min(20, "Please share a little more detail (at least 20 characters).") });
type ContactValues = z.infer<typeof contactSchema>;
const fieldClass = "w-full rounded-xl border bg-transparent px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", company: "", budget: "", message: "" } });
  async function onSubmit(values: ContactValues) { setStatus("idle"); setErrorMessage(""); try { await submitContactRequest(values); trackEvent("contact_form_submission", { form_name: "contact", budget: values.budget }); setStatus("success"); reset(); } catch (error) { setStatus("error"); setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again."); } }
  if (status === "success") return <div className="rounded-3xl border border-emerald-500/25 bg-emerald-500/5 p-8 text-center" role="status" aria-live="polite"><CheckCircle2 className="mx-auto text-emerald-600" size={36} /><h2 className="mt-4 text-2xl font-semibold">Message received.</h2><p className="mx-auto mt-3 max-w-md text-muted-foreground">Thanks for reaching out. A member of our team will get back to you within two working days.</p><button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-primary hover:underline">Send another message</button></div>;
  return <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-3xl border bg-surface p-6 shadow-glass sm:grid-cols-2 sm:p-8" aria-describedby={status === "error" ? "form-error" : undefined}><Field label="Name" error={errors.name?.message}><input {...register("name")} autoComplete="name" className={fieldClass} placeholder="Your name" aria-invalid={!!errors.name} /></Field><Field label="Work email" error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" className={fieldClass} placeholder="you@company.com" aria-invalid={!!errors.email} /></Field><Field label="Company" error={errors.company?.message}><input {...register("company")} autoComplete="organization" className={fieldClass} placeholder="Company name" aria-invalid={!!errors.company} /></Field><Field label="Budget range" error={errors.budget?.message}><select {...register("budget")} className={fieldClass} aria-invalid={!!errors.budget}><option value="">Choose a range</option><option value="5k-15k">$5k–$15k</option><option value="15k-50k">$15k–$50k</option><option value="50k-plus">$50k+</option></select></Field><div className="sm:col-span-2"><Field label="What are you trying to achieve?" error={errors.message?.message}><textarea {...register("message")} rows={5} className={fieldClass} placeholder="A little context helps us prepare for the conversation." aria-invalid={!!errors.message} /></Field></div>{status === "error" && <p id="form-error" role="alert" className="sm:col-span-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">{errorMessage}</p>}<div className="sm:col-span-2"><Button type="submit" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="mr-2 animate-spin" size={17} />Sending…</> : <>Send enquiry <Send className="ml-2" size={17} /></>}</Button></div></form>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) { return <label className="grid gap-2 text-sm font-medium"><span>{label}</span>{children}{error && <span role="alert" className="text-sm font-normal text-red-600 dark:text-red-400">{error}</span>}</label>; }
