"use client";

import { createContext, useContext } from "react";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { dictionaries, type Dictionary } from "@/lib/i18n";

const LocaleContext = createContext<Locale>(defaultLocale);

export function I18nProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useT(): Dictionary {
  return dictionaries[useContext(LocaleContext)];
}
