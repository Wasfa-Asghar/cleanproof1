import type { MetadataRoute } from "next";
import { getPublicSiteUrl } from "@/lib/site-url";

const BASE = getPublicSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/app/",
        "/field/",
        "/auth/",
        "/onboarding/",
        "/api/",
        "/dev/",
        "/r/",
        "/billing/",
      ],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
