import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { Analytics } from "@/components/analytics/analytics";
import { absoluteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lumora | Digital Growth Agency",
    template: "%s | Lumora",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Lumora | Digital Growth Agency",
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lumora digital growth agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumora | Digital Growth Agency",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0f1220",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.svg"),
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: [],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <JsonLd data={organization} />

        <ThemeProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>

          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-50 rounded-xl bg-primary px-4 py-2 font-semibold text-white focus:not-sr-only"
          >
            Skip to content
          </a>

          <Header />

          <main id="main-content">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

