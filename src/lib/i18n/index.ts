import { en, type Dictionary } from "./dictionaries/en";
import { pl } from "./dictionaries/pl";
import type { Locale } from "./config";

export const dictionaries: Record<Locale, Dictionary> = { en, pl };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
export * from "./config";
