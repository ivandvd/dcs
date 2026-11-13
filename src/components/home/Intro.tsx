import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { ScrubWords } from "@/components/motion/ScrubWords";
import type { Locale } from "@/lib/i18n";
import { getHomeContent } from "@/lib/content/home";

export function Intro({ locale }: { locale: Locale }) {
  const { statement, body, points } = getHomeContent(locale).intro;
  return (
    <section className="px-5 pb-24 pt-24 sm:px-8 lg:px-12 lg:pb-36 lg:pt-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            AeroCleaning
          </span>
        </Reveal>
        <ScrubWords
          as="h2"
          className="mt-6 max-w-[1120px] text-[clamp(30px,4.6vw,66px)] font-light leading-[1.05] tracking-[-0.03em]"
          text={statement}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6 lg:col-start-1">
            <p className="max-w-[600px] text-[17px] leading-[1.6] text-ink-3 sm:text-[18px]">{body}</p>
          </Reveal>
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-3 lg:col-span-6" stagger={0.1}>
            {points.map((p) => (
              <Item as="li" key={p.n} className="rounded-2xl border border-ink/8 bg-white p-5">
                <span className="font-mono text-[11px] text-ink-3">{p.n}</span>
                <span className="mt-6 block text-[20px] tracking-[-0.01em]">{p.label}</span>
                <span className="mt-1.5 block text-[14px] leading-[1.5] text-ink-3">{p.text}</span>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
