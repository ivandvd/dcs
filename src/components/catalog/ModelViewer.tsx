"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/components/i18n/I18nProvider";

type Props = {
  src: string;
  alt: string;
  poster?: string;
  /** e.g. "10 MB" – shown on the load button so people on mobile data can decide */
  size?: string;
  className?: string;
  /** load immediately instead of waiting for a click */
  eager?: boolean;
};

/**
 * Interactive glTF viewer built on <model-viewer>. The model is only
 * downloaded after the visitor asks for it (the files are 0.5–12 MB).
 */
export function ModelViewer({ src, alt, poster, size, className = "", eager = false }: Props) {
  const t = useT().common;
  const [defined, setDefined] = useState(false);
  const [wanted, setWanted] = useState(eager);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let alive = true;
    import("@google/model-viewer").then(() => alive && setDefined(true)).catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !wanted) return;
    const onProgress = (e: Event) => {
      const d = (e as CustomEvent<{ totalProgress: number }>).detail;
      if (d) setProgress(Math.round(d.totalProgress * 100));
    };
    const onLoad = () => setLoaded(true);
    el.addEventListener("progress", onProgress);
    el.addEventListener("load", onLoad);
    return () => {
      el.removeEventListener("progress", onProgress);
      el.removeEventListener("load", onLoad);
    };
  }, [wanted, defined]);

  // Reset when the model changes
  useEffect(() => {
    setLoaded(false);
    setProgress(0);
    if (!eager) setWanted(false);
  }, [src, eager]);

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-[radial-gradient(120%_90%_at_50%_0%,#2b313c_0%,#171b22_60%,#0f1218_100%)] ${className}`}
    >
      {poster && !loaded && (
        <Image src={poster} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      )}

      {defined && wanted && (
        <model-viewer
          ref={(node: HTMLElement | null) => {
            ref.current = node;
          }}
          src={src}
          alt={alt}
          camera-controls
          auto-rotate
          auto-rotate-delay="1500"
          rotation-per-second="18deg"
          shadow-intensity="0.6"
          shadow-softness="0.9"
          exposure="1"
          environment-image="neutral"
          camera-orbit="-25deg 72deg 88%"
          min-camera-orbit="auto auto 45%"
          interaction-prompt="none"
          touch-action="pan-y"
          style={{ width: "100%", height: "100%", backgroundColor: "transparent", display: "block" }}
        />
      )}

      {!loaded && (
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-4 sm:p-5">
          {!wanted ? (
            <button
              type="button"
              onClick={() => setWanted(true)}
              className="pointer-events-auto group inline-flex h-12 items-center gap-3 rounded-full bg-lime pl-5 pr-1.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-lime-2"
            >
              {t.loadModel}
              {size ? <span className="text-ink/55"> · {size}</span> : null}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                  <path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ) : (
            <div className="pointer-events-auto flex w-full items-center gap-3 rounded-full bg-ink/85 px-4 py-2.5 text-[13px] text-white backdrop-blur">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{t.loading}</span>
              <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15">
                <span className="absolute inset-y-0 left-0 rounded-full bg-lime transition-[width] duration-300" style={{ width: `${progress}%` }} />
              </span>
              <span className="font-mono text-[11px] text-white/70">{progress}%</span>
            </div>
          )}
        </div>
      )}

      {loaded && (
        <span
          data-viewer-hint
          className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/80 backdrop-blur sm:bottom-5 sm:left-5"
        >
          {t.dragHint}
        </span>
      )}
    </div>
  );
}
