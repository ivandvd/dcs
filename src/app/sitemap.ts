import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/content/service-pages";
import { products } from "@/lib/content/catalog";
import { articles } from "@/lib/content/news";
import { locales } from "@/lib/i18n/config";

const BASE = "https://dcs-drone.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/technology", priority: 0.8, changeFrequency: "monthly" },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/catalog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/news", priority: 0.6, changeFrequency: "weekly" },
    { path: "/career", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.2, changeFrequency: "monthly" },
    ...servicePages.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...products.map((p) => ({ path: `/catalog/${p.slug}`, priority: 0.6, changeFrequency: "weekly" as const })),
    ...articles.map((a) => ({ path: `/news/${a.slug}`, priority: 0.5, changeFrequency: "monthly" as const })),
  ];

  return paths.flatMap((p) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${BASE}/${l}${p.path}`])),
      },
    })),
  );
}
