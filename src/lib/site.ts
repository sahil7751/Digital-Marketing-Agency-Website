import type { Metadata } from "next";

export const siteConfig = {
  name: "Lumora",
  description: "Lumora is a digital marketing agency helping ambitious brands grow with strategy, creative, and performance marketing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumora.example",
  locale: "en_US",
  email: "hello@lumora.example",
};

export function absoluteUrl(path = "/") { return new URL(path, siteConfig.url).toString(); }

export function createMetadata({ title, description, path = "/" }: { title: string; description: string; path?: string }): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: siteConfig.locale, url, siteName: siteConfig.name, title: `${title} | ${siteConfig.name}`, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${title} | ${siteConfig.name}` }] },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description, images: ["/opengraph-image"] },
  };
}
