import { Container } from "@/components/ui/container";

export function Footer() {
  return <footer className="border-t"><Container className="flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Lumora. All rights reserved.</p><a href="mailto:hello@lumora.example" className="hover:text-foreground">hello@lumora.example</a></Container></footer>;
}
