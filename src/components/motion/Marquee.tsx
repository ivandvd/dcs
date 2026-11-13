"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** seconds per loop */
  duration?: number;
  reverse?: boolean;
};

/** Infinite horizontal ticker. Children are rendered twice for a seamless loop; the loop pauses while off-screen. */
export function Marquee({ children, className = "", duration = 40, reverse = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), { rootMargin: "100px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="animate-marquee flex shrink-0 items-center will-change-transform group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
            animationPlayState: running ? undefined : "paused",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
