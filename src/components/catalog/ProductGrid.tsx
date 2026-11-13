"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { getCategories, getProducts, type CategoryId, type Product } from "@/lib/content/catalog";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { EASE } from "@/components/motion/Reveal";
import { ProductCard } from "@/components/catalog/ProductCard";

/** Stable filter keys; the labels come from the current locale. */
type Filter = "all" | CategoryId;

type Props = { items?: Product[] };

/** Category filter (sliding active pill) + animated grid of product cards. */
export function ProductGrid({ items }: Props) {
  const locale = useLocale();
  const t = useT().catalog.grid;
  const [active, setActive] = useState<Filter>("all");
  const reduce = useReducedMotion();
  const list = items ?? getProducts(locale);
  const filters: { id: Filter; label: string }[] = [{ id: "all", label: t.all }, ...getCategories(locale)];
  const visible = active === "all" ? list : list.filter((p) => p.category === active);
  const plural = new Intl.PluralRules(locale).select(visible.length);
  const noun = t.noun[plural as keyof typeof t.noun] ?? t.noun.other;

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none]">
          <div
            role="group"
            aria-label={t.filterLabel}
            className="inline-flex gap-1 rounded-full border border-ink/8 bg-white p-1"
          >
            {filters.map((f) => {
              const on = f.id === active;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-[14px] font-medium whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue ${
                    on ? "text-white" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="catalog-filter-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 40 }}
                    />
                  )}
                  <span className="relative">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3" aria-live="polite">
          {t.showing.replace("{count}", String(visible.length)).replace("{noun}", noun)}
        </p>
      </div>

      <motion.ul layout className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <ProductCard product={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
