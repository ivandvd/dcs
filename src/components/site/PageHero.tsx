"use client";

import Image from "next/image";
import { useRef, ViewTransition, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { TextReveal } from "@/components/motion/TextReveal";
import { EASE } from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
  /** nav item to highlight, e.g. "/solutions" */
  active?: string;
  actions?: ReactNode;
  /** bottom-right slot (stat chips, contact card) */
  aside?: ReactNode;
  /** view-transition name shared with a card on the previous page */
  morphName?: string;
  size?: "md" | "lg";
};

export function PageHero({ eyebrow, title, lede, image, alt, active, actions, aside, morphName, size = "md" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const rise = (delay: number, distance = 18) => ({
    initial: reduce ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  const frame =
    size === "lg"
      ? "min-h-[calc(100svh-16px)] sm:min-h-[calc(100svh-24px)]"
      : "min-h-[clamp(560px,78svh,860px)]";

  const media = (
    <div className="absolute inset-0">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </div>
  );

  return (
    <section ref={ref} className="relative p-2 sm:p-3">
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className={`relative isolate overflow-hidden rounded-[22px] bg-ink text-white sm:rounded-[32px] ${frame}`}
      >
        <motion.div
          style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          {morphName ? (
            <ViewTransition name={morphName} share="morph" default="none">
              {media}
            </ViewTransition>
          ) : (
            media
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-ink/30" />
        </motion.div>

        <Navbar active={active} />

        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
          className={`relative z-10 flex flex-col justify-end px-5 pb-8 pt-32 sm:px-8 sm:pb-10 lg:px-12 lg:pb-14 ${frame}`}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.div
                {...rise(0.35)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[13px] text-white/90 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {eyebrow}
              </motion.div>
              <TextReveal
                as="h1"
                immediate
                delay={0.45}
                className="mt-6 max-w-[15ch] text-[clamp(40px,6vw,84px)] font-light leading-[0.98] tracking-[-0.03em]"
              >
                {title}
              </TextReveal>
              {lede && (
                <motion.p {...rise(0.85)} className="mt-6 max-w-[600px] text-[17px] leading-[1.5] text-white/78 sm:text-[19px]">
                  {lede}
                </motion.p>
              )}
              {actions && (
                <motion.div {...rise(0.95)} className="mt-8 flex flex-wrap items-center gap-3">
                  {actions}
                </motion.div>
              )}
            </div>
            {aside && (
              <motion.div {...rise(1.05, 24)} className="lg:col-span-4 lg:justify-self-end">
                {aside}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
