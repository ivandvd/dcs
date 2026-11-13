"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((it, i) => {
        const on = open === i;
        return (
          <li key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(on ? null : i)}
              aria-expanded={on}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-[18px] tracking-[-0.01em] sm:text-[20px]">{it.q}</span>
              <span
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  on ? "border-ink bg-ink text-white" : "border-ink/15 text-ink"
                }`}
              >
                <span className="absolute h-[1.5px] w-3.5 rounded bg-current" />
                <span
                  className={`absolute h-3.5 w-[1.5px] rounded bg-current transition-transform duration-300 ${
                    on ? "rotate-90" : ""
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[640px] pb-7 text-[16px] leading-[1.65] text-ink-3">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
