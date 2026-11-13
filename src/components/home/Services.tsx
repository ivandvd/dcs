"use client";

import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { useRef, ViewTransition } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getServices } from "@/lib/content/services";
import { getHomeContent } from "@/lib/content/home";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const locale = useLocale();
  const t = useT();
  const services = getServices(locale);
  const copy = getHomeContent(locale).services;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const section = ref.current;
        const track = trackRef.current;
        if (!section || !track) return;
        const distance = () => Math.max(0, track.scrollWidth - section.clientWidth + 48);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper pt-24 lg:flex lg:h-screen lg:items-center lg:pt-0">
      <div
        ref={trackRef}
        className="flex flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-12 will-change-transform"
      >
        <div className="lg:w-[440px] lg:shrink-0 lg:pr-10">
          <SectionHeader size="sm" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
          <div className="mt-10 hidden items-center gap-4 lg:flex">
            <span className="relative h-px w-40 overflow-hidden bg-ink/10">
              <span ref={barRef} className="absolute inset-0 origin-left scale-x-0 bg-blue" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">{t.home.services.scroll}</span>
          </div>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:m-0 lg:gap-6 lg:overflow-visible lg:p-0 [scrollbar-width:none]">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative block h-[520px] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[28px] bg-ink text-white sm:w-[400px] lg:h-[580px] lg:w-[440px]"
            >
              <ViewTransition name={`service-${s.slug}`} share="morph" default="none">
                <div className="absolute inset-0">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 440px, 82vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </div>
              </ViewTransition>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/10" />
              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/15 px-3 py-1.5 font-mono text-[11px] tracking-wider backdrop-blur">
                0{i + 1}
              </span>
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/15 backdrop-blur transition-all duration-500 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                <h3 className="text-[28px] tracking-[-0.02em] lg:text-[30px]">{s.title}</h3>
                <p className="mt-2 max-w-[320px] text-[15px] leading-[1.5] text-white/75">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium">
                  {t.common.readMore}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
          <div aria-hidden className="hidden w-[6vw] shrink-0 lg:block" />
        </div>
      </div>
    </section>
  );
}
