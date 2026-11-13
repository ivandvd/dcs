import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";

type Entry = { title: string; body: string };
type Props = { eyebrow: string; title: string; lede: string; items: Entry[] };

export function Requirements({ eyebrow, title, lede, items }: Props) {
  return (
    <section className="relative z-10 -mt-8 rounded-[40px] bg-ink px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow={eyebrow} title={title} lede={lede} tone="dark" size="sm" />
          </div>
        </div>
        <Stagger as="dl" className="border-t border-white/10 lg:col-span-7" stagger={0.08}>
          {items.map((it, i) => (
            <Item
              key={it.title}
              className="grid gap-2 border-b border-white/10 py-7 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
            >
              <dt className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">
                <span className="text-lime">{String(i + 1).padStart(2, "0")}</span>
                {it.title}
              </dt>
              <dd className="text-[22px] font-light tracking-[-0.02em] text-white sm:text-[26px]">{it.body}</dd>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
