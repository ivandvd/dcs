import { getCatalogCopy, relatedProducts, type Product } from "@/lib/content/catalog";
import { getDictionary, type Locale } from "@/lib/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/catalog/ProductCard";

type Props = { product: Product; locale: Locale };

/** Three related items (hand-picked, then same category, then the X1 systems). */
export function RelatedProducts({ product, locale }: Props) {
  const items = relatedProducts(product, locale);
  if (items.length === 0) return null;
  const copy = getCatalogCopy(locale).product.related;
  const t = getDictionary(locale).catalog;
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow={copy.eyebrow} title={copy.title} size="sm" />
          <Reveal delay={0.2}>
            <Button href="/catalog" variant="ink" icon="arrow">
              {t.backToCatalog}
            </Button>
          </Reveal>
        </div>
        <Stagger as="ul" className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08} amount={0.15}>
          {items.map((p) => (
            <Item as="li" key={p.slug}>
              <ProductCard product={p} />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
