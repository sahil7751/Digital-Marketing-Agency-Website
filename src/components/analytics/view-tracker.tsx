"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics/events";

export function ViewTracker({ event, children }: { event: string; children: React.ReactNode }) { const ref = useRef<HTMLDivElement>(null); useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { trackEvent(event); observer.disconnect(); } }, { threshold: 0.35 }); observer.observe(node); return () => observer.disconnect(); }, [event]); return <div ref={ref}>{children}</div>; }
