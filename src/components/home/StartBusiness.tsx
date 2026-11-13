import Image from "next/image";
import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { getDictionary, type Locale } from "@/lib/i18n";
import { getHomeContent } from "@/lib/content/home";

export function StartBusiness({ locale }: { locale: Locale }) {
  const copy = getHomeContent(locale).startBusiness;
  const t = getDictionary(locale).home.startBusiness;
  return (
    <section className="px-3">
      <Reveal amount={0.2}>
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[32px] border border-ink/8 bg-white lg:grid-cols-12">
          <Parallax className="aspect-[4/3] lg:col-span-6 lg:aspect-auto lg:min-h-[620px]" speed={0.12}>
            <Image
              src="/images/home/start-business.jpg"
              alt={t.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-6 lg:p-14">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {copy.eyebrow}
            </span>
            <TextReveal
              as="h2"
              className="mt-5 max-w-[520px] text-[clamp(30px,3.8vw,52px)] font-light leading-[1.04] tracking-[-0.03em]"
            >
              {copy.title}
            </TextReveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[520px] text-[17px] leading-[1.55] text-ink-3">{copy.body}</p>
            </Reveal>
            <Stagger as="ul" className="mt-8 space-y-3" stagger={0.1}>
              {copy.points.map((p) => (
                <Item as="li" key={p} className="flex items-start gap-3 text-[15.5px] leading-[1.5]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </Item>
              ))}
            </Stagger>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Button href="/services/franchise" variant="lime" icon="arrow-circle">
                {t.becomePartner}
              </Button>
              <Button href="/catalog" variant="white" className="border border-ink/10" icon="arrow">
                {t.viewSystems}
              </Button>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
