import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IntroBlock } from "@/components/pages/IntroBlock";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { TierCards } from "@/components/catalog/TierCards";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { SystemCard } from "@/components/catalog/SystemCard";
import { ModelShowcase } from "@/components/catalog/ModelShowcase";
import { Configurator } from "@/components/catalog/Configurator";
import { getCatalogCopy } from "@/lib/content/catalog";
import { getDictionary, langAlternates, localeFrom } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const copy = getCatalogCopy(locale);
  return { title: copy.title, description: copy.hero.lede, alternates: langAlternates("/catalog", locale) };
}

export default async function CatalogPage({ params }: Props) {
  const locale = await localeFrom(params);
  const t = getDictionary(locale).catalog;
  const copy = getCatalogCopy(locale);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={copy.hero.eyebrow}
          title={copy.hero.title}
          lede={copy.hero.lede}
          image="/images/heroes/catalog.jpg"
          alt={copy.hero.alt}
          active="/catalog"
          actions={
            <>
              <Button href="#konfigurator" variant="lime" icon="arrow-circle">
                {t.configure}
              </Button>
              <Button href="#products" variant="white" icon="arrow">
                {t.browse}
              </Button>
            </>
          }
        />

        <IntroBlock
          eyebrow={copy.intro.eyebrow}
          title={copy.intro.title}
          body={copy.intro.body}
          checklist={copy.intro.checklist}
          aside={<SystemCard locale={locale} />}
        />

        <ModelShowcase />

        <section className="relative z-10 -mt-8 rounded-[40px] bg-ink px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader eyebrow={copy.tiers.eyebrow} title={copy.tiers.title} lede={copy.tiers.lede} tone="dark" />
            <TierCards locale={locale} tone="dark" className="mt-16" />
          </div>
        </section>

        <section id="products" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader eyebrow={copy.products.eyebrow} title={copy.products.title} lede={copy.products.lede} />
            <div className="mt-14">
              <ProductGrid />
            </div>
          </div>
        </section>

        <Configurator />

        <ContactStrip
          eyebrow={copy.contact.eyebrow}
          title={copy.contact.title}
          lede={copy.contact.lede}
          cta={{ label: copy.contact.cta, href: "/contact" }}
        />
      </main>
    </PageShell>
  );
}
