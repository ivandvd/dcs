import { Reveal } from "@/components/motion/Reveal";
import { ScrubWords } from "@/components/motion/ScrubWords";
import type { Locale } from "@/lib/i18n";
import { getHomeContent } from "@/lib/content/home";

export function Statement({ locale }: { locale: Locale }) {
  const { eyebrow, text } = getHomeContent(locale).statement;
  return (
    <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1180px] text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {eyebrow}
          </span>
        </Reveal>
        <ScrubWords
          as="h2"
          className="mx-auto mt-8 max-w-[1100px] text-[clamp(30px,4.8vw,68px)] font-light leading-[1.05] tracking-[-0.03em]"
          text={text}
        />
      </div>
    </section>
  );
}
