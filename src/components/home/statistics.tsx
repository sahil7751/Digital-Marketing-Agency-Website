"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const stats = [{ value: 180, suffix: "M+", label: "Revenue influenced", prefix: "$" }, { value: 4.8, suffix: "x", label: "Average blended ROAS" }, { value: 92, suffix: "%", label: "Client retention" }, { value: 14, suffix: "", label: "Industry awards" }];
function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) { const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true, amount: .7 }); const count = useMotionValue(0); const rounded = useTransform(count, latest => value % 1 ? latest.toFixed(1) : Math.round(latest).toLocaleString()); useEffect(() => { if (inView) { const controls = animate(count, value, { duration: 1.2, ease: "easeOut" }); return controls.stop; } }, [count, inView, value]); return <span ref={ref}>{prefix}<motion.span>{rounded}</motion.span>{suffix}</span>; }
export function Statistics() { return <Section className="bg-slate-950 py-14 text-white sm:py-16"><Container><div className="grid grid-cols-2 gap-8 lg:grid-cols-4">{stats.map(stat => <div key={stat.label}><p className="text-3xl font-semibold tracking-tight sm:text-4xl"><Counter {...stat} /></p><p className="mt-2 text-sm text-slate-400">{stat.label}</p></div>)}</div></Container></Section>; }
