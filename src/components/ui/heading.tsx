import type { HTMLAttributes, ReactNode } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & { children: ReactNode; as?: "h1" | "h2" | "h3"; size?: "display" | "section" | "card" };
const sizes = { display: "text-4xl leading-[1.08] sm:text-5xl lg:text-7xl", section: "text-3xl leading-tight sm:text-4xl lg:text-5xl", card: "text-xl leading-snug sm:text-2xl" };

export function Heading({ as: Tag = "h2", size = "section", className = "", children, ...props }: HeadingProps) {
  return <Tag className={`font-semibold tracking-[-0.04em] text-foreground ${sizes[size]} ${className}`} {...props}>{children}</Tag>;
}
