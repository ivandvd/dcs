"use client";

import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";
import { Checklist } from "@/components/pages/Checklist";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/i18n/I18nProvider";

type Program = { code: string; name: string; subtitle: string; body: string; program: string[] };

type Props = { eyebrow: string; title: string; lede: string; items: Program[] };

export function Programs({ eyebrow, title, lede, items }: Props) {
  const t = useT().pages.programs;
  return (
    <section id="programs" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} align="center" />
        <Stagger className="mt-16 grid gap-4 lg:grid-cols-2" stagger={0.12} amount={0.15}>
          {items.map((p, i) => {
            const dark = i === 0;
            return (
              <Item
                key={p.code}
                className={`relative overflow-hidden rounded-[32px] p-8 sm:p-10 lg:p-12 ${
                  dark ? "bg-ink text-white" : "bg-blue text-white"
                }`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl ${
                    dark ? "bg-blue/40" : "bg-lime/40"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-lime px-3.5 py-1.5 font-mono text-[12px] font-medium tracking-wider text-ink">
                      {p.code}
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">{p.subtitle}</span>
                  </div>
                  <h3 className="mt-8 text-[clamp(28px,3vw,40px)] font-light leading-[1.05] tracking-[-0.03em]">{p.name}</h3>
                  <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-white/75">{p.body}</p>
                  <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">{t.program}</p>
                  <Checklist items={p.program} tone="dark" className="mt-4" columns={2} />
                  <div className="mt-10">
                    <Button href="/contact" variant={dark ? "lime" : "white"} icon="arrow">
                      {t.inquire.replace("{code}", p.code)}
                    </Button>
                  </div>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
