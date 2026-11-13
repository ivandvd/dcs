"use client";

import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { useT } from "@/components/i18n/I18nProvider";
import type { Product } from "@/lib/content/catalog";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

type Props = { product: Product; priority?: boolean };

/** White catalog card: cut-out photo on white, category chip, name, short text, "View details". */
export function ProductCard({ product, priority = false }: Props) {
  const t = useT().catalog;
  return (
    <Link
      href={`/catalog/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-ink/8 bg-white transition-[border-color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-ink/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <div className="relative aspect-[4/3] p-9 sm:p-10">
        <div className="relative h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-contain transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-ink/8 bg-paper px-3 py-1 text-[12px] font-medium text-ink-2">
          {product.categoryLabel}
        </span>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ink/8 bg-white text-ink transition-all duration-500 group-hover:border-lime group-hover:bg-lime">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col border-t border-ink/8 p-6 lg:p-7">
        {product.sku && (
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">SKU {product.sku}</span>
        )}
        <h3 className="mt-2 text-[21px] leading-[1.15] tracking-[-0.015em]">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-[1.55] text-ink-3">{product.short}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium text-ink">
          {t.card.details}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
