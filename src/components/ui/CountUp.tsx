"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useLocale } from "@/components/i18n/I18nProvider";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
};

/** "3 500" / "1.5" in English, "3 500" / "1,5" in Polish; groups are joined with a no-break space so numbers never wrap. */
function format(n: number, decimals: number, locale: Locale) {
  const fixed = n.toFixed(decimals);
  const [int, frac] = fixed.split(".");
  const grouped = Number(int).toLocaleString("en-US").split(",").join(" ");
  return frac ? `${grouped}${locale === "pl" ? "," : "."}${frac}` : grouped;
}

export function CountUp({ to, from = 0, duration = 1.8, delay = 0, decimals = 0 }: Props) {
  const locale = useLocale();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = format(to, decimals, locale);
      return;
    }
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v, decimals, locale);
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, from, duration, delay, decimals, locale]);

  return <span ref={ref}>{format(from, decimals, locale)}</span>;
}
