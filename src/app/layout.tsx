import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Lumora | Digital Growth Agency", template: "%s | Lumora" },
  description: "Lumora is a digital marketing agency helping ambitious brands grow with strategy, creative, and performance marketing.",
  metadataBase: new URL("https://lumora.example"),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#0f1220" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><Header /><main>{children}</main><Footer /></ThemeProvider></body></html>;
}
