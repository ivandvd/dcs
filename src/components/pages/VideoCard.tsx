"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  /** Bunny Stream embed URL (or any autoplaying iframe) */
  embed: string;
  poster: string;
  title: string;
  aspect?: "video" | "portrait" | "square" | "classic";
  className?: string;
  children?: ReactNode;
};

const ratios = {
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  classic: "aspect-[4/3]",
};

/**
 * Pause/resume a Bunny Stream embed through the player.js postMessage protocol the player supports.
 * Players that do not understand the message simply ignore it.
 */
export function usePauseOffscreen(ref: React.RefObject<HTMLIFrameElement | null>, src: string) {
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    let origin = "*";
    try {
      origin = new URL(src).origin;
    } catch {
      /* relative src: keep "*" */
    }
    const send = (method: "play" | "pause") =>
      iframe.contentWindow?.postMessage(JSON.stringify({ context: "player.js", version: "0.0.11", method }), origin);
    const io = new IntersectionObserver(([entry]) => send(entry.isIntersecting ? "play" : "pause"), {
      rootMargin: "150px 0px",
    });
    io.observe(iframe);
    return () => io.disconnect();
  }, [ref, src]);
}

/** Rounded media card: poster image with a muted, looping embedded video on top (paused while off-screen). */
export function VideoCard({ embed, poster, title, aspect = "video", className = "", children }: Props) {
  const frame = useRef<HTMLIFrameElement>(null);
  usePauseOffscreen(frame, embed);

  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-ink-2 ${ratios[aspect]} ${className}`}>
      <Image src={poster} alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
      <iframe
        ref={frame}
        src={embed}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-video min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      {children}
    </div>
  );
}

export const BUNNY = {
  facadeCleaning:
    "https://player.mediadelivery.net/embed/636599/9d638b1b-0f4f-42f4-88f3-64caadb0cb8e?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
  dronesAtWork:
    "https://player.mediadelivery.net/embed/636599/e0f189dc-72bd-4132-b02d-83f95d280674?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
};
