"use client";

import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getHomeContent } from "@/lib/content/home";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, EASE } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

/** Hover must rest this long on a panel before it opens, so sweeping the pointer across doesn't fire four animations. */
const HOVER_INTENT_MS = 140;

export function Facilities() {
  const [active, setActive] = useState(0);
  const timer = useRef<number | null>(null);
  const locale = useLocale();
  const t = useT();
  const copy = getHomeContent(locale).facilities;
  const facilities = copy.items;

  const cancel = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
  };
  const open = (i: number, delay = 0) => {
    cancel();
    if (delay === 0) setActive(i);
    else timer.current = window.setTimeout(() => setActive(i), delay);
  };
  useEffect(() => cancel, []);

  return (
    <section className="px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-40 lg:pt-44">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />
          <Reveal delay={0.2}>
            <Button href="/solutions" variant="ink" icon="arrow">
              {t.home.facilities.allSolutions}
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-14" amount={0.15}>
          <div className="flex flex-col gap-3 lg:h-[640px] lg:flex-row">
            {facilities.map((f, i) => {
              const on = active === i;
              return (
                <motion.article
                  key={f.title}
                  onMouseEnter={() => open(i, HOVER_INTENT_MS)}
                  onMouseLeave={cancel}
                  onFocus={() => open(i)}
                  onClick={() => open(i)}
                  tabIndex={0}
                  animate={{ flexGrow: on ? 3.2 : 1 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="relative min-h-[460px] flex-1 basis-0 cursor-pointer overflow-hidden rounded-[28px] bg-ink text-white outline-none [contain:layout_paint] focus-visible:ring-2 focus-visible:ring-blue sm:min-h-[400px] lg:min-h-0"
                >
                  {/* The photo keeps one fixed size (as wide as an open panel) and is only clipped by the panel,
                      so the flex animation never re-scales the image – the expensive part of this effect. */}
                  <div className="absolute inset-y-0 left-1/2 w-full -translate-x-1/2 lg:w-[min(700px,52vw)] lg:will-change-transform">
                    <Image
                      src={f.image}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 700px, 100vw"
                      className={`object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        on ? "scale-100" : "scale-110"
                      }`}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/5 transition-opacity duration-700 ${
                      on ? "opacity-100" : "opacity-80"
                    }`}
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/15 px-3 py-1.5 font-mono text-[11px] tracking-wider">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <span className="eyebrow text-white/60">{f.kicker}</span>
                    {/* Size change by transform (compositor) instead of animating font-size (layout + text re-raster). */}
                    <h3
                      className={`mt-3 origin-bottom-left text-[30px] font-light tracking-[-0.025em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:whitespace-nowrap lg:text-[38px] ${
                        on ? "" : "lg:scale-[0.684]"
                      }`}
                    >
                      {f.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.6, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 max-w-[460px] text-[15.5px] leading-[1.55] text-white/75">{f.body}</p>
                          <div className="mt-5 flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-lime px-3.5 py-1.5 text-[12.5px] font-medium text-ink">
                              {f.chip}
                            </span>
                            <Link
                              href="/solutions"
                              className="group/link inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-300 hover:text-lime"
                            >
                              {t.common.learnMore}
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
