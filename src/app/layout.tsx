import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: { default: "Lumora | Digital Growth Agency", template: "%s | Lumora" },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: siteConfig.locale, url: "/", siteName: siteConfig.name, title: "Lumora | Digital Growth Agency", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: "Lumora | Digital Growth Agency", description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#0f1220" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: absoluteUrl("/"), logo: absoluteUrl("/icon.png"), email: siteConfig.email, description: siteConfig.description, sameAs: [] };
  return <html lang="en" suppressHydrationWarning><body className={geist.className}><JsonLd data={organization} /><ThemeProvider><Header /><main>{children}</main><Footer /></ThemeProvider></body></html>;
}
