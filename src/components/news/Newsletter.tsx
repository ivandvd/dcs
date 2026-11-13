import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { NewsletterForm } from "@/components/news/NewsletterForm";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Newsletter card: heading on the left, e-mail form on the right. */
export function Newsletter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).news.newsletter;

  return (
    <section className="px-5 pt-24 sm:px-8 lg:px-12 lg:pt-36">
      <div className="mx-auto grid max-w-[1320px] gap-10 rounded-[32px] border border-ink/8 bg-white px-7 py-10 sm:px-10 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-14 lg:py-16">
        <div className="lg:col-span-6">
          <SectionHeader size="sm" eyebrow={t.eyebrow} title={t.title} lede={t.lede} />
        </div>
        <Reveal delay={0.2} className="lg:col-span-5 lg:col-start-8">
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  );
}
