export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  pl: { short: "PL", long: "Polski" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

const PREFIXED = /^\/(en|pl)(?=\/|$|[?#])/;

/** Internal hrefs get the locale prefix; external, mailto/tel, hash and already-prefixed hrefs are left alone. */
export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (PREFIXED.test(href)) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/** "/pl/about?x#y" -> { locale: "pl", path: "/about?x#y" } */
export function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const m = pathname.match(PREFIXED);
  if (!m) return { locale: null, path: pathname || "/" };
  const rest = pathname.slice(m[0].length);
  return { locale: m[1] as Locale, path: rest === "" ? "/" : rest };
}

/** Same page in another language. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const { path } = splitLocale(pathname);
  return localizeHref(path, to);
}

/** Content that exists in every language: `const copy: Localized<T> = { en: {...}, pl: {...} }`. */
export type Localized<T> = Record<Locale, T>;

export function pick<T>(copy: Localized<T>, locale: Locale): T {
  return copy[locale] ?? copy[defaultLocale];
}

/** Server pages: `const locale = await localeFrom(params);` (the layout already 404s unknown locales). */
export async function localeFrom(params: Promise<{ locale?: string }>): Promise<Locale> {
  const { locale } = await params;
  return isLocale(locale) ? locale : defaultLocale;
}

/** `alternates` for page metadata: canonical in the current locale plus hreflang links (metadataBase makes them absolute). */
export function langAlternates(path: string, locale: Locale) {
  const p = path === "/" ? "" : path;
  return {
    canonical: `/${locale}${p}`,
    languages: Object.fromEntries([...locales.map((l) => [l, `/${l}${p}`]), ["x-default", `/${defaultLocale}${p}`]]),
  };
}
