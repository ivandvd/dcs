"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  /** ScrollTrigger start; ignored when `immediate` is set. */
  start?: string;
  /** Play on mount instead of on scroll (above-the-fold headings). */
  immediate?: boolean;
};

/**
 * Splits a heading into lines and slides each line up out of a mask the
 * first time it scrolls into view. Re-splits on resize.
 */
export function TextReveal({
  as = "h2",
  children,
  className = "",
  delay = 0,
  stagger = 0.09,
  start = "top 85%",
  immediate = false,
}: Props) {
  const Comp = as;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      let split: SplitText | null = null;
      let cancelled = false;
      gsap.set(el, { autoAlpha: 0 });

      document.fonts.ready.then(() => {
        if (cancelled) return;
        split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "tr-line",
          autoSplit: true,
          onSplit: (self) => {
            gsap.set(el, { autoAlpha: 1 });
            return gsap.from(self.lines, {
              yPercent: 115,
              duration: 1.25,
              ease: "expo.out",
              stagger,
              delay,
              scrollTrigger: immediate ? undefined : { trigger: el, start, once: true },
            });
          },
        });
      });

      return () => {
        cancelled = true;
        split?.revert();
      };
    },
    { scope: ref },
  );

  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
