import type { Metadata } from "next";
import { Link } from "@/components/ui/Link";
import { notFound, permanentRedirect } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";
import { Gallery } from "@/components/news/Gallery";
import { articles, formatDate, formatPhotoCount, getArticle } from "@/lib/content/news";
import { getDictionary, langAlternates, localeFrom } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };

/** Article slugs of the previous site (EN /en/news/trade-fair, PL /aktualnosci/targi) → current slug. */
const LEGACY_SLUGS: Record<string, string> = {
  "trade-fair": "trade-fair-2026-warsaw",
  targi: "trade-fair-2026-warsaw",
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFrom(params);
  const article = getArticle(slug, locale);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, alternates: langAlternates(`/news/${slug}`, locale) };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const locale = await localeFrom(params);
  const t = getDictionary(locale).news;
  const article = getArticle(slug, locale);
  if (!article) {
    if (LEGACY_SLUGS[slug]) permanentRedirect(`/${locale}/news/${LEGACY_SLUGS[slug]}`);
    notFound();
  }

  const date = formatDate(article.date, locale);
  const photos = formatPhotoCount(article.photoCount, locale);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={`${article.category} · ${date}`}
          title={article.title}
          lede={article.excerpt}
          image={article.cover}
          alt={article.coverAlt}
          active="/news"
          actions={
            <Button href="/news" variant="white" icon="arrow">
              {t.article.backToNews}
            </Button>
          }
        />

        {/* Intro */}
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4" as="div">
              <dl className="grid grid-cols-2 gap-6 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <dt>{t.article.category}</dt>
                  <dd className="mt-1.5 text-ink">{article.category}</dd>
                </div>
                <div>
                  <dt>{t.article.published}</dt>
                  <dd className="mt-1.5 text-ink">
                    <time dateTime={article.date}>{date}</time>
                  </dd>
                </div>
                <div>
                  <dt>{t.article.gallery}</dt>
                  <dd className="mt-1.5 text-ink">{photos}</dd>
                </div>
              </dl>
            </Reveal>
            <div className="space-y-6 lg:col-span-8">
              {article.intro.map((paragraph, i) => (
                <Reveal key={i} as="p" delay={0.1} className="max-w-[720px] text-[clamp(20px,2.2vw,28px)] font-light leading-[1.4] tracking-[-0.015em] text-ink">
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <Reveal className="mb-8 flex items-center justify-between gap-4 border-t border-ink/10 pt-8">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {t.article.gallery}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">{photos}</span>
            </Reveal>
            <Gallery images={article.gallery} />
          </div>
        </section>

        {/* Back link */}
        <section className="px-5 pt-16 sm:px-8 lg:px-12 lg:pt-20">
          <div className="mx-auto max-w-[1320px] border-t border-ink/10 pt-8">
            <Link href="/news" className="group inline-flex items-center gap-3 text-[15px] font-medium text-ink">
              <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              {t.article.backToNews}
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
