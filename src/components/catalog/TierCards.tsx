import Image from "next/image";
import { getTiers } from "@/lib/content/catalog";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Stagger, Item } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";

type Props = {
  locale: Locale;
  tone?: "light" | "dark";
  /** slug of the product page the cards are shown on – its card says "Viewing" instead of linking to itself */
  currentSlug?: string;
  className?: string;
};

/** The three X1 system tiers; the "Most popular" (PRO) card is inverted. */
export function TierCards({ locale, tone = "light", currentSlug, className = "" }: Props) {
  const dark = tone === "dark";
  const labels = getDictionary(locale).catalog;
  return (
    <Stagger className={`grid gap-4 lg:grid-cols-3 ${className}`} stagger={0.1} amount={0.15}>
      {getTiers(locale).map((t, i) => {
        const featured = !!t.badge;
        const current = t.productSlug === currentSlug;
        // inverted card = featured on light, or a plain card on dark
        const inverted = dark ? !featured : featured;

        const card = inverted
          ? dark
            ? "border border-white/10 bg-white/[0.04] text-white"
            : "bg-ink text-white"
          : dark
            ? "bg-white text-ink"
            : "border border-ink/8 bg-white text-ink";
        const muted = inverted ? "text-white/55" : "text-ink-3";
        const divide = inverted ? "divide-white/10" : "divide-ink/10";
        const frame = inverted ? "bg-white" : "bg-paper";

        return (
          <Item
            key={t.id}
            className={`relative flex flex-col rounded-[28px] p-7 lg:p-8 ${card} ${featured ? "lg:-my-3" : ""}`}
          >
            {t.badge && (
              <span className="absolute left-7 top-0 -translate-y-1/2 rounded-full bg-lime px-3.5 py-1.5 text-[12.5px] font-medium text-ink lg:left-8">
                {t.badge}
              </span>
            )}
            <div className="flex items-center justify-between">
              <span className={`font-mono text-[12px] uppercase tracking-[0.14em] ${muted}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {current && (
                <span
                  className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] ${
                    inverted ? "bg-white/10 text-white/80" : "bg-paper text-ink-3"
                  }`}
                >
                  {labels.tiers.viewing}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-[clamp(26px,2.6vw,34px)] font-light leading-[1.05] tracking-[-0.03em]">{t.name}</h3>

            <div className={`relative mt-6 aspect-[4/3] overflow-hidden rounded-[20px] ${frame}`}>
              <div className="absolute inset-7">
                <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-contain" />
              </div>
            </div>

            <dl className={`mt-6 divide-y ${divide}`}>
              {t.rows.map((r) => (
                <div key={r.label} className="flex items-start justify-between gap-6 py-3">
                  <dt className={`text-[14px] leading-[1.45] ${muted}`}>{r.label}</dt>
                  <dd className="max-w-[58%] text-right text-[14.5px] leading-[1.45] font-medium">
                    {r.value === true ? (
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime text-ink">
                        <Check className="h-3.5 w-3.5" />
                        <span className="sr-only">{labels.tiers.included}</span>
                      </span>
                    ) : r.value === false ? (
                      <span className={muted}>
                        <span aria-hidden>—</span>
                        <span className="sr-only">{labels.tiers.notIncluded}</span>
                      </span>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {!current && (
                <Button href={`/catalog/${t.productSlug}`} variant={inverted ? "lime" : "ink"} size="sm" icon="arrow">
                  {labels.tiers.details}
                </Button>
              )}
              <Button
                href={`/contact?product=${t.productSlug}`}
                variant={current ? (inverted ? "lime" : "ink") : inverted ? "ghost" : "white"}
                size="sm"
                icon={current ? "arrow" : undefined}
                className={!inverted && !current ? "border border-ink/10" : ""}
              >
                {labels.requestQuote}
              </Button>
            </div>
          </Item>
        );
      })}
    </Stagger>
  );
}
