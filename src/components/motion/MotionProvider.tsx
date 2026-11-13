"use client";

import { createContext, useContext, useEffect, useRef, type RefObject } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
ScrollTrigger.config({ ignoreMobileResize: true });

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** The page-enter view transition runs ~780ms; heavy work is kept out of that window. */
const TRANSITION_MS = 900;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const navigatedAt = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Content that changes height after load (accordions, late images) moves every trigger below it:
  // re-measure once the height has settled, but never in the middle of a page transition.
  useEffect(() => {
    let last = document.documentElement.scrollHeight;
    let timer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const h = document.documentElement.scrollHeight;
        if (Math.abs(h - last) < 2 || performance.now() - navigatedAt.current < TRANSITION_MS) return;
        ScrollTrigger.refresh();
        last = document.documentElement.scrollHeight;
      }, 300);
    });
    ro.observe(document.body);
    return () => {
      ro.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  // New route: start at the top, then re-measure scroll-driven animations after the
  // enter transition has finished (a refresh mid-transition can drop frames).
  useEffect(() => {
    navigatedAt.current = performance.now();
    // Links with a hash (e.g. /catalog#konfigurator) scroll to their target instead.
    if (!window.location.hash) lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    const t1 = window.setTimeout(() => ScrollTrigger.refresh(), TRANSITION_MS);
    const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 2200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
