import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";

type Entry = { title: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  items: Entry[];
  className?: string;
};

/** Sticky header on the left, editorial numbered rows on the right. */
export function NumberedList({ eyebrow, title, lede, items, className = "" }: Props) {
  return (
    <section className={`px-5 py-24 sm:px-8 lg:px-12 lg:py-36 ${className}`}>
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow={eyebrow} title={title} lede={lede} size="sm" />
          </div>
        </div>
        <Stagger as="ol" className="border-t border-ink/10 lg:col-span-7" stagger={0.06} amount={0.1}>
          {items.map((it, i) => (
            <Item
              as="li"
              key={it.title}
              className="grid grid-cols-[56px_1fr] gap-4 border-b border-ink/10 py-6 sm:grid-cols-[72px_1fr] sm:py-7"
            >
              <span className="pt-1.5 font-mono text-[12px] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[21px] tracking-[-0.015em] sm:text-[24px]">{it.title}</h3>
                <p className="mt-1.5 max-w-[520px] text-[15.5px] leading-[1.55] text-ink-3">{it.body}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
