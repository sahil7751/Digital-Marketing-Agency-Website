import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
  async headers() {
    return [
      { source: "/opengraph-image", headers: [{ key: "Cache-Control", value: "public, max-age=0, s-maxage=31536000, immutable" }] },
      { source: "/sitemap.xml", headers: [{ key: "Cache-Control", value: "public, max-age=0, s-maxage=86400" }] },
      { source: "/robots.txt", headers: [{ key: "Cache-Control", value: "public, max-age=0, s-maxage=86400" }] },
    ];
  },
};

export default nextConfig;
