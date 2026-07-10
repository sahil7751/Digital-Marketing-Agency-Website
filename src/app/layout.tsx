import type { Metadata, Viewport } from "next";
updatedupdatedimport { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: { default: "Lumora | Digital Growth Agency", template: "%s | Lumora" },
  description: "Lumora is a digital marketing agency helping ambitious brands grow with strategy, creative, and performance marketing.",
  metadataBase: new URL("https://lumora.example"),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#0f1220" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={geist.className}><ThemeProvider><Header /><main>{children}</main><Footer /></ThemeProvider></body></html>;
}
