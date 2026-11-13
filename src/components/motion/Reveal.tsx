"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  dl: motion.dl,
  p: motion.p,
  span: motion.span,
} as const;

type Tag = keyof typeof tags;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: Tag;
};

/** Fades + rises into place the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.85,
  amount = 0.15,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = tags[as];
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
  delay?: number;
  as?: Tag;
};

/** Parent for `Item`s: children rise one after another. */
export function Stagger({ children, className, amount = 0.12, stagger = 0.08, delay = 0, as = "div" }: StaggerProps) {
  const reduce = useReducedMotion();
  const Comp = tags[as];
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  return (
    <Comp
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
      className={className}
    >
      {children}
    </Comp>
  );
}

type ItemProps = { children: ReactNode; className?: string; y?: number; as?: Tag };

export function Item({ children, className, y = 24, as = "div" }: ItemProps) {
  const Comp = tags[as];
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <Comp variants={item} className={className}>
      {children}
    </Comp>
  );
}
