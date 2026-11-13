import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { formatDate, formatPhotoCount, type Article } from "@/lib/content/news";
import { getDictionary, type Locale } from "@/lib/i18n";

type Props = { articles: Article[]; locale: Locale; eyebrow?: string; title?: string };

/** Grid of article cards; lays out cleanly for one card or many. */
export function ArticleList({ articles, locale, eyebrow, title }: Props) {
  if (!articles.length) return null;
  const t = getDictionary(locale);

  return (
    <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow ?? t.news.list.eyebrow} title={title ?? t.news.list.title} size="sm" />
        <Stagger as="ul" className="mt-14 grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {articles.map((a) => (
            <Item as="li" key={a.slug} className="group">
              <Link href={`/news/${a.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-ink-2">
                  <Image
                    src={a.cover}
                    alt={a.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                  <span>{a.category}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={a.date}>{formatDate(a.date, locale)}</time>
                  <span aria-hidden>·</span>
                  <span>{formatPhotoCount(a.photoCount, locale)}</span>
                </div>
                <h3 className="mt-3 text-[22px] leading-[1.2] tracking-[-0.015em] sm:text-[24px]">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-ink-3">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-ink">
                  {t.common.readMore}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
