"use client";

import { useMemo, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  start?: string;
  end?: string;
  from?: number;
};

/** Words brighten one by one as the block scrolls through the viewport. */
export function ScrubWords({ text, as = "p", className = "", start = "top 78%", end = "bottom 48%", from = 0.16 }: Props) {
  const Comp = as;
  const ref = useRef<HTMLElement>(null);
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const spans = el.querySelectorAll<HTMLElement>("[data-word]");
      gsap.fromTo(
        spans,
        { opacity: from },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start, end, scrub: 0.4 },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Comp ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span data-word className="inline-block">
            {w}
          </span>{" "}
        </span>
      ))}
    </Comp>
  );
}
