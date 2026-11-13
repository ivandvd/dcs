/**
 * Legal documents (Privacy and Cookies Policy, Terms and Conditions) in both languages.
 * - legal.en.ts: the client's English copy (incoming/scrape/privacy.txt, terms.txt), kept verbatim.
 * - legal.pl.ts: the client's Polish originals (incoming/scrape/pl/privacy.txt, terms.txt), kept verbatim.
 * Both languages share the section ids, so anchors and the table of contents are identical.
 * The scrapes showed e-mail addresses as "[email protected]" (Cloudflare obfuscation);
 * every one of them decodes to biuro@dcs-drone.com.
 */
import { pick, type Locale, type Localized } from "@/lib/i18n/config";
import { privacyPolicy, termsAndConditions } from "./legal.en";
import { privacyPolicyPl, termsAndConditionsPl } from "./legal.pl";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "address"; lines: string[] }
  | { type: "table"; head?: string[]; rows: string[][] };

export type LegalSection = { id: string; heading: string; blocks: LegalBlock[] };

export type LegalSlug = "privacy" | "terms";

export type LegalDocument = {
  slug: LegalSlug;
  metaTitle: string;
  metaDescription: string;
  /** h1 */
  title: string;
  /** subtitle line under the title */
  lede: string;
  /** small meta line (administrator / owner) */
  meta: string;
  /** "last updated" – the client's site does not publish one */
  updated?: string;
  /** phrases to turn into internal links wherever they appear in the text */
  links?: Record<string, string>;
  sections: LegalSection[];
};

const documents: Localized<Record<LegalSlug, LegalDocument>> = {
  en: { privacy: privacyPolicy, terms: termsAndConditions },
  pl: { privacy: privacyPolicyPl, terms: termsAndConditionsPl },
};

/** The privacy policy or the terms in the given language. */
export function getLegal(slug: LegalSlug, locale: Locale): LegalDocument {
  return pick(documents, locale)[slug];
}

/** English documents (kept for compatibility). */
export { privacyPolicy, termsAndConditions };
export const legalDocuments = documents.en;
