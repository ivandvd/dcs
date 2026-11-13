import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

type Props = {
  /** nav item href to highlight */
  active?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  /** e.g. a "Back to catalog" link, rendered above the eyebrow */
  breadcrumb?: ReactNode;
  /** anything below the lede (meta row, chips, actions) */
  children?: ReactNode;
  className?: string;
};

/**
 * Header for pages without a media hero (legal pages, product details):
 * light background, ink-coloured nav, big light title.
 */
export function LightHeader({ active, eyebrow, title, lede, breadcrumb, children, className = "" }: Props) {
  return (
    <header className={`relative px-5 pb-12 pt-32 sm:px-8 lg:px-12 lg:pb-16 lg:pt-44 ${className}`}>
      <Navbar active={active} tone="light" />
      <div className="mx-auto max-w-[1320px]">
        {breadcrumb && <Reveal className="mb-8">{breadcrumb}</Reveal>}
        {eyebrow && (
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <TextReveal
          as="h1"
          immediate
          delay={0.2}
          className="mt-5 max-w-[16ch] text-[clamp(36px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.03em]"
        >
          {title}
        </TextReveal>
        {lede && (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.55] text-ink-3 sm:text-[19px]">{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
