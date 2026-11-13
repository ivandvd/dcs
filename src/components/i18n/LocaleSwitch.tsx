"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { locales, localeNames, switchLocalePath } from "@/lib/i18n/config";

type Props = { tone?: "dark" | "light"; className?: string };

/** EN | PL toggle that keeps the current page. */
export function LocaleSwitch({ tone = "dark", className = "" }: Props) {
  const current = useLocale();
  const t = useT().locale;
  const pathname = usePathname() || "/";
  const dark = tone === "dark";
  return (
    <nav
      aria-label={t.label}
      className={`inline-flex items-center rounded-full border p-0.5 font-mono text-[11.5px] tracking-[0.1em] ${
        dark ? "border-white/15 bg-white/10 backdrop-blur-lg" : "border-ink/10 bg-white/75"
      } ${className}`}
    >
      {locales.map((l) => {
        const on = l === current;
        return (
          <NextLink
            key={l}
            href={switchLocalePath(pathname, l)}
            hrefLang={l}
            aria-current={on ? "true" : undefined}
            aria-label={localeNames[l].long}
            className={`rounded-full px-2.5 py-1.5 transition-colors duration-300 ${
              on
                ? dark
                  ? "bg-white text-ink"
                  : "bg-ink text-white"
                : dark
                  ? "text-white/70 hover:text-white"
                  : "text-ink-3 hover:text-ink"
            }`}
          >
            {localeNames[l].short}
          </NextLink>
        );
      })}
    </nav>
  );
}
