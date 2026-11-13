"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  /** 0.1 = subtle, 0.3 = pronounced */
  speed?: number;
  scale?: number;
};

/** Wrap a `fill` image: it drifts vertically as the block passes through the viewport. */
export function Parallax({ children, className = "", speed = 0.16, scale = 1.14 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={reduce ? undefined : { y, scale }} className="absolute inset-0 will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
