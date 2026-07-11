"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ComponentProps } from "react";

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return <MotionConfig reducedMotion="user"><NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>{children}</NextThemesProvider></MotionConfig>;
}
