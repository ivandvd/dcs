"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getHomeContent } from "@/lib/content/home";
import { useLocale } from "@/components/i18n/I18nProvider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Check } from "@/components/ui/Icons";

gsap.registerPlugin(ScrollTrigger);

export function Pillars() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const locale = useLocale();
  const copy = getHomeContent(locale).pillars;
  const pillars = copy.items;

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 60%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.5,
            ease: "none",
            transformOrigin: "center top",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top+=140",
              scrub: true,
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="px-3 pb-28 lg:pb-44">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-2 sm:px-5 lg:grid-cols-12 lg:gap-8 lg:px-9">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
            <ol className="mt-10 hidden gap-2 lg:flex">
              {pillars.map((p, i) => (
                <li
                  key={p.num}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    active === i ? "w-10 bg-blue" : "w-4 bg-ink/15"
                  }`}
                  aria-label={p.title}
                />
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-8">
          {pillars.map((p, i) => (
            <article
              key={p.num}
              data-card
              style={{ top: `${104 + i * 18}px` }}
              className="rounded-[28px] border border-ink/8 bg-white p-3 shadow-[0_30px_80px_-40px_rgba(15,18,24,0.25)] lg:sticky"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] md:aspect-auto md:min-h-[460px]">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[11px] tracking-wider text-ink backdrop-blur">
                    {p.num}
                  </span>
                </div>
                <div className="flex flex-col p-4 pt-2 md:p-6 lg:p-8">
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                    {p.kicker}
                  </span>
                  <h3 className="mt-5 text-[34px] font-light leading-none tracking-[-0.03em] lg:text-[44px]">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-[420px] text-[16px] leading-[1.6] text-ink-3">{p.body}</p>
                  <ul className="mt-8 flex flex-wrap gap-2 md:mt-auto md:pt-8">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 rounded-full bg-paper px-3.5 py-2 text-[13.5px]"
                      >
                        <Check className="h-3.5 w-3.5 text-blue" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
