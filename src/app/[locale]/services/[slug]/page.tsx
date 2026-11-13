import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { IntroBlock } from "@/components/pages/IntroBlock";
import { FeatureGrid } from "@/components/pages/FeatureGrid";
import { NumberedList } from "@/components/pages/NumberedList";
import { ProcessSteps } from "@/components/pages/ProcessSteps";
import { Programs } from "@/components/pages/Programs";
import { Audience } from "@/components/pages/Audience";
import { Requirements } from "@/components/pages/Requirements";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { servicePages, getServicePage } from "@/lib/content/service-pages";

type Params = { params: Promise<{ locale: string; slug: string }> };

/** Only the slug – the [locale] layout provides the locales. */
export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFrom(params);
  const page = getServicePage(slug, locale);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription, alternates: langAlternates(`/services/${slug}`, locale) };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const page = getServicePage(slug, await localeFrom(params));
  if (!page) notFound();

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          lede={page.lede}
          image={page.image}
          alt={page.alt}
          active="/solutions"
          morphName={`service-${page.slug}`}
          actions={page.actions.map((a, i) => (
            <Button key={a.href} href={a.href} variant={a.variant} icon={i === 0 ? "arrow-circle" : "arrow"}>
              {a.label}
            </Button>
          ))}
        />

        {page.intro && (
          <IntroBlock
            eyebrow={page.intro.eyebrow}
            title={page.intro.title}
            body={page.intro.body}
            checklist={page.intro.checklist}
          />
        )}

        <FeatureGrid
          eyebrow={page.features.eyebrow}
          title={page.features.title}
          lede={page.features.lede}
          items={page.features.items}
          className={page.intro ? "pt-0 lg:pt-0" : ""}
        />

        {page.programs && <Programs {...page.programs} />}

        {page.list && <NumberedList {...page.list} className="pt-0 lg:pt-0" />}

        {page.process && <ProcessSteps {...page.process} tone="dark" />}

        {page.audience && <Audience {...page.audience} />}

        {page.requirements && <Requirements {...page.requirements} />}

        {page.closing && (
          <ContactStrip
            eyebrow={page.closing.eyebrow}
            title={page.closing.title}
            lede={page.closing.lede}
            cta={page.closing.cta}
            person={page.closing.person}
          />
        )}
      </main>
    </PageShell>
  );
}
