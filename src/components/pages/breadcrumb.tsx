import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
export function Breadcrumb({ current }: { current: string }) { return <nav aria-label="Breadcrumb" className="border-b"><Container className="flex h-12 items-center gap-2 text-sm text-muted-foreground"><Link href="/" className="hover:text-foreground">Home</Link><ChevronRight size={15} /><span aria-current="page" className="font-medium text-foreground">{current}</span></Container></nav>; }
