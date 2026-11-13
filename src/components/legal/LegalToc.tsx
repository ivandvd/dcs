"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useLenis } from "@/components/motion/MotionProvider";
import { useT } from "@/components/i18n/I18nProvider";

export type TocItem = { id: string; label: string };

type Props = { items: TocItem[] };

/**
 * Table of contents for the legal pages: highlights the section currently in
 * the reading band (IntersectionObserver) and scrolls smoothly on click.
 * Collapsible on small screens, sticky on large ones.
 */
export function LegalToc({ items }: Props) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  const lenis = useLenis();
  const t = useT().news.legal;

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const inBand = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inBand.add(e.target.id);
          else inBand.delete(e.target.id);
        }
        // the last section (in document order) touching the band is the one being read
        let found: string | null = null;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (inBand.has(sections[i].id)) {
            found = sections[i].id;
            break;
          }
        }
        if (found) setActive(found);
        else if (sections[0].getBoundingClientRect().top > 0) setActive(sections[0].id);
      },
      // a band between 18% and 38% of the viewport height
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  function onClick(e: MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const instance = lenis?.current;
    if (instance) instance.scrollTo(el, { offset: -112, duration: 1.2 });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  }

  const list = (
    <ol className="lg:border-l lg:border-ink/10">
      {items.map((it, i) => {
        const on = it.id === active;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={(e) => onClick(e, it.id)}
              aria-current={on ? "location" : undefined}
              className={`flex items-baseline gap-3 py-2 text-[13.5px] leading-[1.4] transition-colors duration-300 lg:-ml-px lg:border-l lg:py-1.5 lg:pl-4 ${
                on ? "text-ink lg:border-ink" : "text-ink-3 hover:text-ink lg:border-transparent"
              }`}
            >
              <span
                className={`shrink-0 font-mono text-[11px] tabular-nums transition-colors duration-300 ${
                  on ? "text-blue" : "text-ink-3/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{it.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <details className="rounded-[20px] border border-ink/8 bg-white px-5 py-4 lg:hidden">
        <summary className="eyebrow cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {t.contents}
        </summary>
        <div className="mt-3 border-t border-ink/8 pt-2">{list}</div>
      </details>

      <nav aria-label={t.contents} className="hidden lg:sticky lg:top-28 lg:block">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {t.contents}
        </span>
        <div className="mt-5">{list}</div>
      </nav>
    </>
  );
}
