import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { getLegal } from "@/lib/content/legal";
import { langAlternates, localeFrom } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const doc = getLegal("privacy", locale);
  return { title: doc.metaTitle, description: doc.metaDescription, alternates: langAlternates("/privacy", locale) };
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await localeFrom(params);
  return <LegalLayout doc={getLegal("privacy", locale)} locale={locale} />;
}
