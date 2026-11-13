import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { Faq } from "@/components/pages/Faq";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Mail, Phone, Pin } from "@/components/ui/Icons";
import { LineIcon } from "@/components/ui/LineIcons";
import { site } from "@/lib/site";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { getContactCopy } from "@/lib/content/pages/contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { meta } = getContactCopy(locale);
  return { title: meta.title, description: meta.description, alternates: langAlternates("/contact", locale) };
}

export default async function ContactPage({ params }: Props) {
  const copy = getContactCopy(await localeFrom(params));
  const { hero, info, form, faq, closing } = copy;
  const tel = site.phone.replace(/\s+/g, "");

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lede={hero.lede}
          image="/images/heroes/contact.jpg"
          alt={hero.alt}
          active="/contact"
        />

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {info.eyebrow}
                  </span>
                </Reveal>
                <TextReveal as="h2" className="mt-5 max-w-[460px] text-[clamp(30px,3.8vw,50px)] font-light leading-[1.04] tracking-[-0.03em]">
                  {info.title}
                </TextReveal>
                <Stagger as="ul" className="mt-10 divide-y divide-ink/10 border-y border-ink/10" stagger={0.07}>
                  <Item as="li" className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-blue">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{info.email}</span>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-1 block text-[18px] transition-colors duration-300 hover:text-blue"
                      >
                        {site.email}
                      </a>
                    </span>
                  </Item>
                  <Item as="li" className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-blue">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{info.office}</span>
                      <a href={`tel:${tel}`} className="mt-1 block text-[18px] transition-colors duration-300 hover:text-blue">
                        {site.phone}
                      </a>
                    </span>
                  </Item>
                  <Item as="li" className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{info.sales}</span>
                      <a href="tel:+48668373821" className="mt-1 block text-[18px] transition-colors duration-300 hover:text-blue">
                        Mateusz · +48 668 373 821
                      </a>
                      <a href="tel:+48664250323" className="mt-1 block text-[18px] transition-colors duration-300 hover:text-blue">
                        Mariusz · +48 664 250 323
                      </a>
                    </span>
                  </Item>
                  <Item as="li" className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-blue">
                      <Pin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{info.address}</span>
                      <span className="mt-1 block text-[16px] leading-[1.5]">{info.addressLine}</span>
                      <span className="mt-1 block text-[14px] text-ink-3">{info.mailing}</span>
                    </span>
                  </Item>
                  <Item as="li" className="flex items-start gap-4 py-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-blue">
                      <LineIcon name="clock" className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{info.hours}</span>
                      <span className="mt-1 block text-[16px]">{info.hoursLine}</span>
                    </span>
                  </Item>
                </Stagger>
                <Reveal delay={0.2}>
                  <div className="mt-8 rounded-[22px] bg-lime/40 p-5">
                    <p className="text-[15px] font-medium">{info.fastTitle}</p>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-ink/75">{info.fastBody}</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal amount={0.1}>
                <div className="mb-6">
                  <h2 className="text-[26px] font-light tracking-[-0.02em] sm:text-[30px]">{form.title}</h2>
                  <p className="mt-2 text-[15.5px] text-ink-3">{form.lede}</p>
                </div>
                <Suspense fallback={<div className="min-h-[560px] rounded-[28px] border border-ink/8 bg-white" />}>
                  <ContactForm />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
          <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow={faq.eyebrow} title={faq.title} lede={faq.lede} size="sm" />
            </div>
            <Reveal className="lg:col-span-7" amount={0.15}>
              <Faq items={faq.items} />
            </Reveal>
          </div>
        </section>

        <ContactStrip
          eyebrow={closing.eyebrow}
          title={closing.title}
          lede={closing.lede}
          cta={{ label: `${closing.ctaPrefix} ${site.email}`, href: `mailto:${site.email}` }}
        />
      </main>
    </PageShell>
  );
}
