"use client";

import { useEffect, useRef, useState } from "react";
import { getHomeContent } from "@/lib/content/home";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { VideoCard, BUNNY } from "@/components/pages/VideoCard";
import { Check } from "@/components/ui/Icons";

function Cross(p: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={p.className}>
      <path d="m4 4 8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WhyDrone() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const locale = useLocale();
  const t = useT().home.whyDrone;
  const copy = getHomeContent(locale).whyDrone;
  const { comparison, benefits } = copy;

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-benefit]");
    if (!items || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.benefit));
        });
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative z-10 -mt-8 rounded-[40px] bg-ink px-5 pb-28 pt-24 text-white sm:px-8 lg:px-12 lg:pb-40 lg:pt-36">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Sticky card: clip + side-by-side comparison */}
        <div className="lg:col-span-6">
          <Reveal className="lg:sticky lg:top-20" amount={0.2}>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 lg:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="eyebrow text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {t.sideBySide}
                </span>
                <span className="rounded-full bg-lime px-3 py-1 text-[12px] font-medium text-ink">DCS AeroCleaning</span>
              </div>

              {/* Clip, kept small so the source resolution holds up */}
              <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white/[0.04] p-2 sm:flex-row sm:items-center sm:pr-5">
                <VideoCard
                  embed={BUNNY.dronesAtWork}
                  poster="/images/why-poster.jpg"
                  title={t.clipTitle}
                  aspect="classic"
                  className="w-full shrink-0 rounded-xl sm:w-[168px]"
                />
                <div className="min-w-0 px-2 pb-2 sm:px-0 sm:pb-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{t.inTheField}</p>
                  <p className="mt-1.5 text-[14px] leading-[1.5] text-white/80">{copy.clip}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-lime px-2.5 py-1 text-[11.5px] font-medium text-ink">{t.ecoSolution}</span>
                    <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/80">
                      {t.lessWater}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_1fr] gap-x-4 border-b border-white/10 pb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45 sm:grid-cols-[140px_1fr_1fr]">
                <span className="hidden sm:block" />
                <span>{t.traditional}</span>
                <span className="text-lime">DCS</span>
              </div>

              <Stagger as="dl" stagger={0.06} amount={0.1}>
                {comparison.map((row) => (
                  <Item
                    as="div"
                    key={row.label}
                    className="grid grid-cols-[1fr_1fr] gap-x-4 gap-y-1.5 border-b border-white/10 py-3.5 sm:grid-cols-[140px_1fr_1fr]"
                  >
                    <dt className="col-span-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-white/45 sm:col-span-1 sm:pt-1">
                      {row.label}
                    </dt>
                    <dd className="flex items-start gap-2 text-[13.5px] leading-[1.4] text-white/55 sm:text-[14px]">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-white/15">
                        <Cross className="h-2.5 w-2.5" />
                      </span>
                      {row.traditional}
                    </dd>
                    <dd className="flex items-start gap-2 text-[13.5px] leading-[1.4] text-white sm:text-[14px]">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {row.dcs}
                    </dd>
                  </Item>
                ))}
              </Stagger>

              <p className="mt-4 text-[12px] leading-[1.5] text-white/40">{copy.footnote}</p>
            </div>
          </Reveal>
        </div>

        {/* Benefits list */}
        <div className="lg:col-span-6 lg:pl-4">
          <SectionHeader tone="dark" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
          <ol ref={listRef} className="mt-14 border-t border-white/10">
            {benefits.map((b, i) => {
              const on = active === i;
              return (
                <li
                  key={b.title}
                  data-benefit={i}
                  className={`grid grid-cols-[44px_1fr] gap-4 border-b border-white/10 py-7 transition-opacity duration-500 sm:grid-cols-[56px_1fr] ${
                    on ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <span className={`pt-1.5 font-mono text-[12px] ${on ? "text-lime" : "text-white/60"}`}>0{i + 1}</span>
                  <div>
                    <h3 className="text-[22px] tracking-[-0.02em] sm:text-[26px]">{b.title}</h3>
                    <p className="mt-2 max-w-[520px] text-[15.5px] leading-[1.55] text-white/70">{b.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
