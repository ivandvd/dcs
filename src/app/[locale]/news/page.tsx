import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedArticle } from "@/components/news/FeaturedArticle";
import { ArticleList } from "@/components/news/ArticleList";
import { Newsletter } from "@/components/news/Newsletter";
import { getArticles, getNewsPageCopy } from "@/lib/content/news";
import { langAlternates, localeFrom } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const copy = getNewsPageCopy(locale);
  return { title: copy.metaTitle, description: copy.metaDescription, alternates: langAlternates("/news", locale) };
}

export default async function NewsPage({ params }: Props) {
  const locale = await localeFrom(params);
  const copy = getNewsPageCopy(locale);
  const [featured, ...rest] = getArticles(locale);

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={copy.eyebrow}
          title={copy.title}
          lede={copy.lede}
          image="/images/heroes/news.jpg"
          alt={copy.heroAlt}
          active="/news"
        />

        {featured && <FeaturedArticle article={featured} locale={locale} />}

        <ArticleList articles={rest} locale={locale} />

        <Newsletter locale={locale} />
      </main>
    </PageShell>
  );
}
