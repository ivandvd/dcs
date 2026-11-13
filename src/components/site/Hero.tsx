"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";
import { usePauseOffscreen } from "@/components/pages/VideoCard";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { getHomeContent } from "@/lib/content/home";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Current hero clip on dcs-drone.com (Bunny Stream). Used until the client
// supplies the source MP4 for self-hosting.
const BUNNY_EMBED =
  "https://player.mediadelivery.net/embed/636599/9d638b1b-0f4f-42f4-88f3-64caadb0cb8e?autoplay=true&loop=true&muted=true&preload=true&responsive=true";

export function Hero({ videoSrc }: { videoSrc: string | null }) {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLIFrameElement>(null);
  usePauseOffscreen(video, BUNNY_EMBED);
  const reduce = useReducedMotion();
  const locale = useLocale();
  const t = useT().home.hero;
  const { lines, lede } = getHomeContent(locale).hero;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const rise = (delay: number, distance = 18) => ({
    initial: reduce ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  const frame = "min-h-[calc(100svh-16px)] sm:min-h-[calc(100svh-24px)]";
  // Near-opaque white instead of a backdrop blur: blurring a playing video costs a full repaint every frame.
  const card = "rounded-[18px] bg-white/95 text-ink shadow-[0_24px_60px_-34px_rgba(15,18,24,0.7)]";
  const statLabel = "font-mono text-[10.5px] uppercase leading-[1.45] tracking-[0.14em] text-ink-3";
  const statValue = "text-[32px] leading-none tracking-[-0.035em] sm:text-[38px]";
  const statUnit = "ml-1 text-[16px] tracking-[-0.01em] text-ink-3 sm:text-[18px]";

  return (
    <section ref={ref} className="relative p-2 sm:p-3">
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className={`relative isolate overflow-hidden rounded-[22px] bg-ink text-white sm:rounded-[32px] ${frame}`}
      >
        {/* Media */}
        <motion.div
          style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          <Image src="/images/hero-poster.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          {videoSrc ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={videoSrc}
              poster="/images/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <iframe
              ref={video}
              src={BUNNY_EMBED}
              title={t.videoTitle}
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex={-1}
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-video min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/25" />
        </motion.div>

        <Navbar active="/" />

        {/* Content */}
        <motion.div
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
          className={`relative z-10 grid grid-cols-12 gap-x-6 gap-y-10 px-5 pb-5 pt-28 sm:px-8 sm:pb-8 sm:pt-32 lg:grid-rows-[1fr_auto] lg:px-12 lg:pt-[clamp(120px,17vh,176px)] ${frame}`}
        >
          {/* Copy */}
          <div className="col-span-12 lg:col-span-8 lg:row-start-1">
            <motion.div
              {...rise(0.4)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[13px] text-white/90 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Global AeroCleaning Solutions
            </motion.div>

            <h1 className="max-w-[12ch] text-[clamp(44px,6.6vw,92px)] font-light leading-[0.98] tracking-[-0.03em]">
              {lines.map((line, i) => (
                <span key={line} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "112%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.15, delay: 0.5 + i * 0.09, ease: EASE }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              {...rise(0.85)}
              className="mt-6 max-w-[540px] text-[17px] leading-[1.5] text-white/78 sm:text-[19px]"
            >
              {lede}
            </motion.p>

            <motion.div {...rise(0.95)} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.22}>
                <Button href="/contact" variant="lime" icon="arrow-circle">
                  {t.consultation}
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <Button href="/solutions" variant="white" icon="arrow">
                  {t.explore}
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Stat cards: one grid, one type scale – labels top-left, values bottom-left, same insets everywhere */}
          <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:justify-self-end">
            <div className="grid w-full max-w-[440px] grid-cols-2 gap-2 lg:w-[440px]">
              <motion.div {...rise(1.0, 24)} className={`col-span-2 flex items-stretch gap-4 p-2 ${card}`}>
                <div className="relative h-[100px] w-[124px] shrink-0 overflow-hidden rounded-[12px] sm:h-[112px] sm:w-[152px]">
                  <Image
                    src="/images/hero-card.jpg"
                    alt={t.cardAlt}
                    fill
                    sizes="152px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between py-2 pr-2 sm:py-2.5 sm:pr-3">
                  <p className={statLabel}>
                    {t.heightLabel[0]} {t.heightLabel[1]}
                  </p>
                  <p className={statValue}>
                    <CountUp to={120} delay={1.15} />
                    <span className={statUnit}>m</span>
                  </p>
                </div>
              </motion.div>

              <motion.div {...rise(1.1, 24)} className={`flex min-h-[120px] flex-col justify-between p-4 sm:min-h-[128px] sm:p-[18px] ${card}`}>
                <p className={statLabel}>
                  {t.glassLabel[0]} {t.glassLabel[1]}
                </p>
                <p className={statValue}>
                  <CountUp to={3500} delay={1.25} />
                  <span className={statUnit}>m²</span>
                </p>
              </motion.div>

              <motion.div {...rise(1.2, 24)} className={`flex min-h-[120px] flex-col justify-between p-4 sm:min-h-[128px] sm:p-[18px] ${card}`}>
                <p className={statLabel}>
                  {t.durationLabel[0]} {t.durationLabel[1]}
                </p>
                <p className={statValue}>
                  1–3<span className={statUnit}>{t.days}</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Trust line */}
          <motion.div
            {...rise(1.2, 12)}
            className="col-span-12 flex items-center gap-4 self-end lg:col-span-8 lg:row-start-2"
          >
            <div className="flex -space-x-2.5">
              {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map((src) => (
                <span key={src} className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-ink/80">
                  <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                </span>
              ))}
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink ring-2 ring-ink/80">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                  <path
                    d="M4 12 12 4M5.5 4H12v6.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <p className="text-[13px] leading-[1.35] text-white/80">
              {t.trust[0]}
              <br />
              {t.trust[1]}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
