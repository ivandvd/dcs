"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = { children: ReactNode; className?: string; strength?: number };

/** Nudges its child toward the pointer (fine pointers only). Measures once per hover, not on every move. */
export function Magnetic({ children, className = "", strength = 0.28 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const box = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  const onEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    box.current = ref.current.getBoundingClientRect();
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = box.current;
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    box.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
