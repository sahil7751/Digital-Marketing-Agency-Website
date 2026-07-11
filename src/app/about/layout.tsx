import { createMetadata } from "@/lib/site";
export const metadata = createMetadata({ title: "About", description: "Meet Lumora, the digital growth agency for ambitious brands.", path: "/about" });
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
