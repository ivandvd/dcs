import type { Metadata } from "next";
import { Link } from "@/components/ui/Link";
import { notFound, permanentRedirect } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { LightHeader } from "@/components/site/LightHeader";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone } from "@/components/ui/Icons";
import { Checklist } from "@/components/pages/Checklist";
import { ProcessSteps } from "@/components/pages/ProcessSteps";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { ProductMedia } from "@/components/catalog/ProductMedia";
import { SpecGroups } from "@/components/catalog/SpecGroups";
import { TierCards } from "@/components/catalog/TierCards";
import { RelatedProducts } from "@/components/catalog/RelatedProducts";
import { getCatalogCopy, getProduct, legacySlugs, products } from "@/lib/content/catalog";
import { getDictionary, langAlternates, localeFrom } from "@/lib/i18n";
import { site } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { slug } = await params;
  const product = getProduct(slug, locale);
  if (!product) return {};
  return { title: product.name, description: product.short, alternates: langAlternates(`/catalog/${slug}`, locale) };
}

export default async function ProductPage({ params }: Props) {
  const locale = await localeFrom(params);
  const { slug } = await params;
  const product = getProduct(slug, locale);
  if (!product) {
    // old product URLs (dcs-drone.com/katalog/<client-slug>, sent here by the proxy)
    const target = legacySlugs[slug];
    if (target) permanentRedirect(`/${locale}/catalog/${target}`);
    notFound();
  }

  const t = getDictionary(locale).catalog;
  const copy = getCatalogCopy(locale).product;
  const critical = product.specGroups.find((g) => g.critical);
  const otherGroups = product.specGroups.filter((g) => g !== critical);
  const tel = `tel:${site.phone.replace(/\s+/g, "")}`;
  const quoteHref = `/contact?product=${product.slug}`;
  const configureHref = `/catalog?product=${product.slug}#konfigurator`;

  return (
    <PageShell>
      <main>
        <LightHeader
          active="/catalog"
          breadcrumb={
            <Link
              href="/catalog"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink-2 transition-colors duration-300 hover:text-ink"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              {t.backToCatalog}
            </Link>
          }
          eyebrow={product.sku ? `${product.categoryLabel} · SKU ${product.sku}` : product.categoryLabel}
          title={product.name}
          lede={product.short}
        >
          <Reveal delay={0.25} className="mt-8 flex flex-wrap items-center gap-5">
            <Button href={quoteHref} variant="lime" icon="arrow-circle">
              {t.requestQuote}
            </Button>
            <a href={tel} className="group inline-flex items-center gap-3 text-[15px] font-medium text-ink">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/8 bg-white text-ink transition-colors duration-300 group-hover:border-lime group-hover:bg-lime">
                <Phone className="h-4 w-4" />
              </span>
              {site.phone}
            </a>
          </Reveal>
        </LightHeader>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-10">
            {/* min-w-0: the sideways-scrolling thumbnail strip must not widen the column on mobile */}
            <div className="min-w-0 lg:col-span-6">
              <div className="lg:sticky lg:top-24">
                <ProductMedia images={product.images} alt={product.alt} name={product.name} model={product.model} />
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6 lg:pl-4">
              {product.highlights && product.highlights.length > 0 && (
                <Reveal>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {t.product.applications}
                  </span>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.highlights.map((h) => (
                      <li key={h} className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink">
                        {h}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {critical && (
                <SpecGroups groups={[critical]} size="lg" className={product.highlights?.length ? "mt-12" : ""} />
              )}

              {otherGroups.length > 0 && (
                <SpecGroups groups={otherGroups} className={critical || product.highlights?.length ? "mt-12" : ""} />
              )}

              {product.description.length > 0 && (
                <Reveal className={product.specGroups.length || product.highlights?.length ? "mt-12" : ""}>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {t.product.description}
                  </span>
                  <div className="mt-5 space-y-5">
                    {product.description.map((p) => (
                      <p key={p.slice(0, 40)} className="max-w-[600px] text-[16.5px] leading-[1.6] text-ink-2">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              )}

              {product.lists?.map((list) => (
                <Reveal key={list.title} className="mt-10">
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {list.title}
                  </span>
                  <Checklist items={list.items} className="mt-5" />
                </Reveal>
              ))}

              <Reveal className="mt-12">
                <div className="rounded-[24px] bg-ink p-7 text-white lg:p-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                    {t.product.onRequest}
                  </span>
                  <p className="mt-3 text-[24px] font-light leading-[1.1] tracking-[-0.02em]">{product.name}</p>
                  <p className="mt-3 max-w-[440px] text-[15px] leading-[1.55] text-white/65">{copy.configure}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href={configureHref} variant="lime" size="sm" icon="arrow">
                      {t.product.configureWith}
                    </Button>
                    <a
                      href={tel}
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 text-[14px] font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/20"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {t.product.call} {site.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {product.tier && (
          <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
            <div className="mx-auto max-w-[1320px]">
              <SectionHeader eyebrow={copy.compare.eyebrow} title={copy.compare.title} lede={copy.compare.lede} size="sm" />
              <TierCards locale={locale} currentSlug={product.slug} className="mt-14" />
            </div>
          </section>
        )}

        <ProcessSteps
          eyebrow={copy.deployment.eyebrow}
          title={copy.deployment.title}
          lede={copy.deployment.lede}
          steps={copy.deployment.steps}
          tone="dark"
        />

        <RelatedProducts product={product} locale={locale} />

        <ContactStrip
          eyebrow={copy.contact.eyebrow}
          title={copy.contact.title}
          lede={copy.contact.lede}
          cta={{ label: copy.contact.cta, href: configureHref }}
        />
      </main>
    </PageShell>
  );
}
