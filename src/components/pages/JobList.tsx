"use client";

import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { useT } from "@/components/i18n/I18nProvider";

export type Job = { department: string; title: string; body: string; location: string; type: string };

type Props = { id?: string; eyebrow: string; title: string; lede?: string; jobs: Job[]; applyEmail: string };

export function JobList({ id, eyebrow, title, lede, jobs, applyEmail }: Props) {
  const t = useT().company.jobList;
  return (
    <section id={id} className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <Stagger as="ul" className="mt-14 border-t border-ink/10" stagger={0.07} amount={0.1}>
          {jobs.map((j) => (
            <Item as="li" key={j.title}>
              <a
                href={`mailto:${applyEmail}?subject=${encodeURIComponent(`${t.applySubject}: ${j.title}`)}`}
                className="group grid gap-4 border-b border-ink/10 py-7 transition-colors duration-300 hover:bg-white/60 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-4 sm:-mx-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 sm:col-span-2">
                  {j.department}
                </span>
                <span className="sm:col-span-6">
                  <span className="block text-[22px] tracking-[-0.015em] sm:text-[24px]">{j.title}</span>
                  <span className="mt-1.5 block max-w-[520px] text-[15px] leading-[1.55] text-ink-3">{j.body}</span>
                </span>
                <span className="flex flex-wrap gap-2 sm:col-span-3">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[12.5px] ring-1 ring-ink/10">{j.location}</span>
                  <span className="rounded-full bg-white px-3 py-1.5 text-[12.5px] ring-1 ring-ink/10">{j.type}</span>
                </span>
                <span className="flex items-center gap-2 text-[14px] font-medium sm:col-span-1 sm:justify-end">
                  <span className="sm:sr-only">{t.applyNow}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-lime group-hover:bg-lime">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
