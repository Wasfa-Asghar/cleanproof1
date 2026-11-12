const PRODUCTION_SITE_URL = "https://thehouseofveynor.uk";
const LOCAL_DEV_SITE_URL = "http://127.0.0.1:3000";

/**
 * Absolute origin for public marketing URLs (sitemap, robots, canonical, Open Graph, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://thehouseofveynor.uk).
 */
export function getPublicSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const appUrl = process.env.APP_URL?.trim();
  if (appUrl && !isLoopbackOrigin(appUrl)) return appUrl.replace(/\/$/, "");

  if (process.env.NODE_ENV === "production") return PRODUCTION_SITE_URL;

  return LOCAL_DEV_SITE_URL;
}

function isLoopbackOrigin(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return host === "localhost" || host === "127.0.0.1" || host === "[::1]";
  } catch {
    return false;
  }
}
