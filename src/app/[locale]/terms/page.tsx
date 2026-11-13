import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { getLegal } from "@/lib/content/legal";
import { langAlternates, localeFrom } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const doc = getLegal("terms", locale);
  return { title: doc.metaTitle, description: doc.metaDescription, alternates: langAlternates("/terms", locale) };
}

export default async function TermsPage({ params }: Props) {
  const locale = await localeFrom(params);
  return <LegalLayout doc={getLegal("terms", locale)} locale={locale} />;
}
