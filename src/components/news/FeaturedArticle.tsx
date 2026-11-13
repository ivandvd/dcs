import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/Button";
import { formatDate, formatPhotoCount, type Article } from "@/lib/content/news";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Large editorial card for the newest article. */
export function FeaturedArticle({ article, locale }: { article: Article; locale: Locale }) {
  const t = getDictionary(locale);
  const href = `/news/${article.slug}`;

  return (
    <section className="px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {t.news.featured}
          </span>
        </Reveal>

        <article className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal className="lg:col-span-7" amount={0.2}>
            <Link href={href} aria-label={article.title} className="group block">
              <Parallax className="aspect-[4/3] rounded-[28px] bg-ink-2 lg:aspect-[16/11]" speed={0.12}>
                <Image
                  src={article.cover}
                  alt={article.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              </Parallax>
            </Link>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
                <span className="rounded-full bg-lime px-3.5 py-1.5 font-sans text-[12.5px] font-medium normal-case tracking-normal text-ink">
                  {article.category}
                </span>
                <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
                <span aria-hidden>·</span>
                <span>{formatPhotoCount(article.photoCount, locale)}</span>
              </div>
            </Reveal>
            <TextReveal
              as="h2"
              className="mt-6 max-w-[560px] text-[clamp(30px,3.6vw,48px)] font-light leading-[1.04] tracking-[-0.03em]"
            >
              {article.title}
            </TextReveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-ink-3">{article.excerpt}</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Button href={href} variant="lime" icon="arrow-circle">
                {t.common.readMore}
              </Button>
            </Reveal>
          </div>
        </article>
      </div>
    </section>
  );
}
