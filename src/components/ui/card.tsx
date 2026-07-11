"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"article">;

export function Card({
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <motion.article
      {...props}
      className={`glass rounded-2xl p-6 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}

