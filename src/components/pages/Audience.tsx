"use client";

import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Checklist } from "@/components/pages/Checklist";
import { useT } from "@/components/i18n/I18nProvider";

type Props = { eyebrow: string; title: string; body: string; items: string[]; quote: string };

export function Audience({ eyebrow, title, body, items, quote }: Props) {
  const t = useT().pages.audience;
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {eyebrow}
            </span>
          </Reveal>
          <TextReveal as="h2" className="mt-5 max-w-[560px] text-[clamp(30px,4vw,54px)] font-light leading-[1.04] tracking-[-0.03em]">
            {title}
          </TextReveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.6] text-ink-3 sm:text-[18px]">{body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mt-10 max-w-[560px] border-l-2 border-lime pl-6 text-[20px] leading-[1.45] tracking-[-0.01em] text-ink sm:text-[22px]">
              {t.quoteOpen}
              {quote}
              {t.quoteClose}
            </blockquote>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-5 lg:col-start-8" amount={0.2}>
          <div className="rounded-[28px] border border-ink/8 bg-white p-7 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">{t.designedFor}</p>
            <Checklist items={items} className="mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
