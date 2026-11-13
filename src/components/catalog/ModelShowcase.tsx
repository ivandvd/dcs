"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ModelViewer } from "@/components/catalog/ModelViewer";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { getCatalogCopy, getShowcaseModels } from "@/lib/content/catalog";

export type { ShowcaseModel } from "@/lib/content/catalog";

/** English models, kept for callers without a locale; the section itself uses `getShowcaseModels(locale)`. */
export const showcaseModels = getShowcaseModels("en");

export function ModelShowcase() {
  const locale = useLocale();
  const t = useT().catalog.showcase;
  const copy = getCatalogCopy(locale).showcase;
  const models = getShowcaseModels(locale);
  const [active, setActive] = useState(0);
  const m = models[active];

  return (
    <section id="3d" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Model switcher (min-w-0: the sideways-scrolling tab list must not widen the column on mobile) */}
          <div className="min-w-0 lg:col-span-4">
            <div role="tablist" aria-label={t.tabs} className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 [scrollbar-width:none]">
              {models.map((item, i) => {
                const on = i === active;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(i)}
                    className={`relative shrink-0 rounded-2xl border px-5 py-4 text-left transition-colors duration-300 lg:w-full ${
                      on ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink hover:border-ink/25"
                    }`}
                  >
                    <span className={`block font-mono text-[11px] uppercase tracking-[0.14em] ${on ? "text-lime" : "text-ink-3"}`}>
                      {String(i + 1).padStart(2, "0")} · {item.kicker}
                    </span>
                    <span className="mt-1.5 block max-w-[260px] text-[15px] leading-[1.35]">{item.title}</span>
                  </button>
                );
              })}
            </div>

            <Reveal className="mt-6 hidden lg:block" delay={0.1}>
              <p className="text-[15px] leading-[1.6] text-ink-3">{m.body}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{t.tip}</p>
            </Reveal>
          </div>

          {/* Viewer */}
          <div className="min-w-0 lg:col-span-8">
            <motion.div
              key={m.id}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ModelViewer src={m.src} poster={m.poster} alt={m.title} size={m.size} className="aspect-[4/3] w-full sm:aspect-[16/11]" />
            </motion.div>
            <p className="mt-4 text-[15px] leading-[1.6] text-ink-3 lg:hidden">{m.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
