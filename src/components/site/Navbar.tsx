"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/site/MobileMenu";
import { LocaleSwitch } from "@/components/i18n/LocaleSwitch";
import { useT } from "@/components/i18n/I18nProvider";
import { EASE } from "@/components/motion/Reveal";

type Props = {
  /** nav item href to highlight */
  active?: string;
  /** "dark" = white text over a media hero (default); "light" = ink text on a light page */
  tone?: "dark" | "light";
};

export function Navbar({ active = "/", tone = "dark" }: Props) {
  const t = useT();
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = hovered ?? active;
  const dark = tone === "dark";

  const pillShell = dark
    ? "border-white/15 bg-white/10"
    : "border-ink/8 bg-white/75 shadow-[0_10px_30px_-18px_rgba(15,18,24,0.35)]";
  const linkIdle = dark ? "text-white/85 hover:text-white" : "text-ink-2 hover:text-ink";
  const linkCurrent = dark ? "text-ink" : "text-white";
  const slider = dark ? "bg-white" : "bg-ink";
  const glass = dark ? "border-white/15 bg-white/10" : "border-ink/8 bg-white/75";
  const bar = dark ? "bg-white" : "bg-ink";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
      >
        <Link href="/" aria-label={t.nav.home} className="relative block h-8 sm:h-9">
          <Image
            src="/brand/dcs-wordmark.png"
            alt="DCS"
            width={753}
            height={196}
            priority
            className={`h-full w-auto ${dark ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav
          aria-label={t.nav.main}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul
            onMouseLeave={() => {
              setHovered(null);
              setOpen(null);
            }}
            className={`flex items-center gap-0.5 rounded-full border p-1.5 backdrop-blur-lg ${pillShell}`}
          >
            {t.nav.items.map((item) => {
              const isCurrent = current === item.href;
              const isOpen = open === item.href && !!item.children;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(item.href);
                    setOpen(item.children ? item.href : null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active === item.href ? "page" : undefined}
                    className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] leading-none transition-colors duration-300 ${
                      isCurrent ? linkCurrent : linkIdle
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden
                        className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M2.5 4.5 6 8l3.5-3.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                  {isCurrent && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.8 }}
                      className={`absolute inset-0 rounded-full ${slider}`}
                    />
                  )}
                  <AnimatePresence>
                    {isOpen && item.children && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: EASE }}
                        className="absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3"
                      >
                        <div className="w-[300px] rounded-2xl border border-black/5 bg-white p-2 text-ink shadow-[0_24px_60px_-20px_rgba(15,18,24,0.35)]">
                          {item.children.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className="block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-paper"
                            >
                              <span className="block text-[14px] font-medium">{c.label}</span>
                              {c.blurb && (
                                <span className="mt-0.5 block text-[12.5px] text-ink-3">{c.blurb}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitch tone={tone} className="hidden md:inline-flex" />
          <Button href="/contact" variant="lime" size="sm" className="hidden sm:inline-flex">
            {t.nav.getQuote}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={t.nav.openMenu}
            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-lg lg:hidden ${glass}`}
          >
            <span className="relative block h-[10px] w-[18px]">
              <span className={`absolute left-0 top-0 h-[1.5px] w-full rounded ${bar}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-full rounded ${bar}`} />
            </span>
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
