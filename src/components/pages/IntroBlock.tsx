import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Parallax } from "@/components/motion/Parallax";
import { Checklist } from "@/components/pages/Checklist";

type Props = {
  eyebrow: string;
  title: string;
  body: string[];
  checklist?: string[];
  image?: { src: string; alt: string };
  aside?: ReactNode;
  actions?: ReactNode;
  reverse?: boolean;
  className?: string;
};

/** Two-column statement: heading + paragraphs on one side, image or custom aside on the other. */
export function IntroBlock({
  eyebrow,
  title,
  body,
  checklist,
  image,
  aside,
  actions,
  reverse = false,
  className = "",
}: Props) {
  const hasSide = !!(image || aside);
  return (
    <section className={`px-5 py-24 sm:px-8 lg:px-12 lg:py-36 ${className}`}>
      <div className={`mx-auto grid max-w-[1320px] gap-12 ${hasSide ? "lg:grid-cols-12 lg:gap-10" : ""}`}>
        <div className={`${hasSide ? "lg:col-span-6" : "max-w-[900px]"} ${reverse ? "lg:order-2" : ""}`}>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {eyebrow}
            </span>
          </Reveal>
          <TextReveal
            as="h2"
            className="mt-5 max-w-[640px] text-[clamp(30px,4vw,54px)] font-light leading-[1.04] tracking-[-0.03em]"
          >
            {title}
          </TextReveal>
          <div className="mt-7 space-y-5">
            {body.map((p) => (
              <Reveal key={p.slice(0, 24)} delay={0.1}>
                <p className="max-w-[600px] text-[17px] leading-[1.6] text-ink-3 sm:text-[18px]">{p}</p>
              </Reveal>
            ))}
          </div>
          {checklist && <Checklist items={checklist} className="mt-8" />}
          {actions && (
            <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
              {actions}
            </Reveal>
          )}
        </div>
        {image && (
          <Reveal className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`} amount={0.2}>
            <Parallax className="aspect-[4/3] rounded-[28px] lg:aspect-[5/4]" speed={0.12}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Parallax>
          </Reveal>
        )}
        {aside && !image && <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>{aside}</div>}
      </div>
    </section>
  );
}
