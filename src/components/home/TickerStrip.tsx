import { Marquee } from "@/components/motion/Marquee";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getHomeContent } from "@/lib/content/home";

export function TickerStrip({ locale }: { locale: Locale }) {
  const items = getHomeContent(locale).ticker;
  const label = getDictionary(locale).home.ticker.label;
  return (
    <section aria-label={label} className="px-3 pt-4">
      <div className="border-y border-ink/10 py-4">
        <Marquee duration={48}>
          {items.map((t) => (
            <span
              key={t}
              className="flex items-center gap-8 pr-8 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-3"
            >
              <span>{t}</span>
              <span className="h-1 w-1 rounded-full bg-blue" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
