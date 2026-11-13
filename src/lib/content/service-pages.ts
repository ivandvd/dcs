import type { Contact } from "@/lib/site";
import type { IconName } from "@/components/ui/LineIcons";
import { type Locale, type Localized, pick } from "@/lib/i18n";
import { servicePagesEn } from "./service-pages.en";
import { servicePagesPl } from "./service-pages.pl";

/**
 * Service pages (/services/[slug]). The copy lives in one file per language:
 * service-pages.en.ts (source of truth for structure, images, icons, hrefs) and service-pages.pl.ts (same structure).
 */

export type Feature = { icon: IconName; title: string; body: string; detail?: string };
export type Entry = { title: string; body: string };

export type ServicePage = {
  slug: "cleaning" | "disinfection" | "inspection" | "training" | "franchise";
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
  actions: { label: string; href: string; variant: "lime" | "white" }[];
  intro?: { eyebrow: string; title: string; body: string[]; checklist?: string[] };
  features: { eyebrow: string; title: string; lede?: string; items: Feature[] };
  list?: { eyebrow: string; title: string; lede?: string; items: Entry[] };
  process?: { eyebrow: string; title: string; lede?: string; steps: Entry[] };
  programs?: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { code: string; name: string; subtitle: string; body: string; program: string[] }[];
  };
  audience?: { eyebrow: string; title: string; body: string; items: string[]; quote: string };
  requirements?: { eyebrow: string; title: string; lede: string; items: Entry[] };
  closing?: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: { label: string; href: string };
    /** `contacts.*` from @/lib/site – the role label is translated by the dictionary (`t.contacts[role]`). */
    person?: Contact;
  };
};

const pages: Localized<ServicePage[]> = { en: servicePagesEn, pl: servicePagesPl };

export function getServicePages(locale: Locale): ServicePage[] {
  return pick(pages, locale);
}

export function getServicePage(slug: string, locale: Locale): ServicePage | undefined {
  return getServicePages(locale).find((s) => s.slug === slug);
}

/** English list – slugs are shared by both languages, so this is enough for the sitemap and static params. */
export const servicePages: ServicePage[] = servicePagesEn;
