export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }

export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  const cleanParams = Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
  window.dataLayer ??= [];
  window.dataLayer.push({ event, ...cleanParams });
  window.gtag?.("event", event, cleanParams);
}

export function trackPageView(url: string) { trackEvent("page_view", { page_path: url, page_location: window.location.href, page_title: document.title }); }
