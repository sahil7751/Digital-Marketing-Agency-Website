"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackEvent, trackPageView } from "@/lib/analytics/events";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => { trackPageView(`${pathname}${searchParams.size ? `?${searchParams}` : ""}`); }, [pathname, searchParams]);
  useEffect(() => {
    if (pathname === "/pricing") { trackEvent("pricing_view", { location: pathname }); return; }
    const pricing = document.querySelector("#pricing");
    if (!pricing) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { trackEvent("pricing_view", { location: pathname }); observer.disconnect(); } }, { threshold: 0.35 });
    observer.observe(pricing); return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    const trackedDepths = new Set<number>();
    const onScroll = () => { const max = document.documentElement.scrollHeight - window.innerHeight; if (max <= 0) return; const progress = (window.scrollY / max) * 100; [25, 50, 75, 100].forEach((depth) => { if (progress >= depth && !trackedDepths.has(depth)) { trackedDepths.add(depth); trackEvent("scroll_depth", { percent_scrolled: depth }); } }); };
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("a, button, article, [data-track-event]");
      if (!target) return;
      const eventName = target.dataset.trackEvent;
      const label = target.dataset.trackLabel || target.textContent?.trim().replace(/\s+/g, " ").slice(0, 100);
      if (eventName) trackEvent(eventName, { label, location: pathname });
      if (target.tagName === "BUTTON" && !eventName) trackEvent("button_click", { label, location: pathname });
      const card = target.closest("article");
      if (!eventName && card?.closest("#services")) trackEvent("service_card_click", { label: card.textContent?.trim().slice(0, 100), location: pathname });
      else if (!eventName && card?.closest("#work")) trackEvent("portfolio_click", { label: card.textContent?.trim().slice(0, 100), location: pathname });
      else if (!eventName && /MIN READ/.test(card?.textContent || "")) trackEvent("blog_read", { label: card.textContent?.trim().slice(0, 100), location: pathname });
      if (target instanceof HTMLAnchorElement) {
        const href = target.href;
        if (target.protocol === "mailto:") trackEvent("email_click", { email: target.getAttribute("href") || "", location: pathname });
        else if (target.protocol === "tel:") trackEvent("phone_click", { phone: target.getAttribute("href") || "", location: pathname });
        else if (target.hasAttribute("download") || /\.(pdf|docx?|xlsx?)($|\?)/i.test(href)) trackEvent("download_brochure", { file_url: href, location: pathname });
        else if (href && new URL(href).origin !== window.location.origin) trackEvent("outbound_link_click", { link_url: href, location: pathname });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true }); document.addEventListener("click", onClick);
    return () => { window.removeEventListener("scroll", onScroll); document.removeEventListener("click", onClick); };
  }, [pathname]);
  return <>{GTM_ID && <><Script id="gtm-loader" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script></>}{GA_ID && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" /><Script id="ga4-config" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}</Script></>}</>;
}
