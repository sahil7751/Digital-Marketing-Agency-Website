import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navigation = [{ href: "/services", label: "Services" }, { href: "/portfolio", label: "Work" }, { href: "/about", label: "About" }];

export function Header() {
  return <header className="border-b border-slate-200/80 bg-canvas/90 backdrop-blur dark:border-slate-800/80"><Container className="flex h-16 items-center justify-between"><Link href="/" prefetch aria-label="Lumora home" className="font-bold tracking-tight">LUMORA<span className="text-primary">.</span></Link><nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium md:flex">{navigation.map((item) => <Link key={item.href} href={item.href} prefetch className="text-muted-foreground transition hover:text-foreground">{item.label}</Link>)}</nav><div className="flex items-center gap-2"><ThemeToggle /><Link href="/contact" prefetch className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">Let&apos;s talk</Link></div></Container></header>;
}
