"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { useT } from "@/components/i18n/I18nProvider";

type Props = { images: string[]; alt: string; name: string };

/** Main product photo (crossfades on change) with a thumbnail row (scrolls sideways inside its column). */
export function ProductGallery({ images, alt, name }: Props) {
  const t = useT().catalog.gallery;
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const src = images[index] ?? images[0];
  const many = images.length > 1;

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[28px] border border-ink/8 bg-white sm:aspect-[5/4] lg:aspect-square">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={src}
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-8 sm:inset-12"
          >
            <Image
              src={src}
              alt={alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
        {many && (
          <span className="absolute left-5 top-5 rounded-full border border-ink/8 bg-paper px-3 py-1.5 font-mono text-[11px] tracking-wider text-ink-3">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      {many && (
        <div
          role="group"
          aria-label={t.label.replace("{name}", name)}
          className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none]"
        >
          {images.map((img, i) => {
            const on = i === index;
            return (
              <button
                key={img}
                type="button"
                aria-pressed={on}
                aria-label={t.thumb.replace("{n}", String(i + 1)).replace("{total}", String(images.length))}
                onClick={() => setIndex(i)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
                  on ? "border-ink" : "border-ink/8 hover:border-ink/25"
                }`}
              >
                <span className="absolute inset-2.5 block">
                  <Image src={img} alt="" fill sizes="80px" className="object-contain" />
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
