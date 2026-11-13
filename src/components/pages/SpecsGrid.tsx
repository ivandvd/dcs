import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export type Spec = { value: number; decimals?: number; unit: string; label: string };

type Props = { eyebrow: string; title: string; lede?: string; specs: Spec[] };

/** Dark sheet with large counting numbers. */
export function SpecsGrid({ eyebrow, title, lede, specs }: Props) {
  return (
    <section className="relative z-10 -mt-8 rounded-[40px] bg-ink px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} tone="dark" />
        <Stagger
          as="dl"
          className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {specs.map((s) => (
            <Item key={s.label} className="flex min-h-[220px] flex-col justify-between bg-ink p-7 lg:p-8">
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{s.label}</dt>
              <dd className="mt-10 text-[clamp(44px,5vw,72px)] font-light leading-none tracking-[-0.04em]">
                <CountUp to={s.value} decimals={s.decimals ?? 0} duration={1.6} />
                <span className="ml-2 text-[0.4em] text-lime">{s.unit}</span>
              </dd>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
