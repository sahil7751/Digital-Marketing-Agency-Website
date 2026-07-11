"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; href?: string };
const variants = { primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90", secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-secondary/90", outline: "border bg-transparent hover:bg-muted", ghost: "bg-transparent hover:bg-muted" };

export function Button({ children, className = "", href, variant = "primary", ...props }: ButtonProps) {
  const styles = `inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={styles}><motion.span className="inline-flex items-center" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>{children}</motion.span></Link>;
  return <motion.button className={styles} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }} {...props}>{children}</motion.button>;
}
