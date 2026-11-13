"use client";

import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Checklist } from "@/components/pages/Checklist";
import { ArrowRight } from "@/components/ui/Icons";
import { useT } from "@/components/i18n/I18nProvider";

export type ShowcaseItem = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  linkLabel?: string;
  image: string;
  alt: string;
};

type Props = { eyebrow: string; title: string; lede?: string; items: ShowcaseItem[]; id?: string };

/**
 * Left: sticky image that crossfades to the active item. Right: scrolling blocks.
 * On small screens each block shows its own image.
 */
export function StickyShowcase({ eyebrow, title, lede, items, id }: Props) {
  const t = useT();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blocks = listRef.current?.querySelectorAll<HTMLElement>("[data-block]");
    if (!blocks || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.block));
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Sticky image stack (desktop) */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-24 aspect-[4/5] overflow-hidden rounded-[28px] bg-ink-2">
              {items.map((it, i) => (
                <div
                  key={it.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={active !== i}
                >
                  <Image
                    src={it.image}
                    alt={it.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active === i ? "scale-100" : "scale-105"
                    }`}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="rounded-full bg-white/15 px-3 py-1.5 font-mono text-[11px] tracking-wider text-white backdrop-blur">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <span className="text-[14px] text-white/90">{items[active]?.kicker}</span>
              </div>
            </div>
          </div>

          {/* Blocks */}
          <div ref={listRef} className="lg:col-span-6 lg:pl-4">
            {items.map((it, i) => (
              <article
                key={it.title}
                data-block={i}
                className="border-t border-ink/10 py-12 first:border-t-0 first:pt-0 lg:py-16 lg:first:pt-4"
              >
                <Reveal amount={0.2}>
                  <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[22px] lg:hidden">
                    <Image src={it.image} alt={it.alt} fill sizes="100vw" className="object-cover" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-blue">{String(i + 1).padStart(2, "0")}</span>
                    <span className="eyebrow">{it.kicker}</span>
                  </div>
                  <h3 className="mt-4 text-[clamp(26px,3vw,38px)] font-light leading-[1.06] tracking-[-0.025em]">
                    {it.title}
                  </h3>
                  <p className="mt-4 max-w-[520px] text-[16px] leading-[1.6] text-ink-3">{it.body}</p>
                  <Checklist items={it.points} className="mt-6" />
                  <Link
                    href={it.href}
                    className="group mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-ink"
                  >
                    {it.linkLabel ?? t.common.learnMore}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
