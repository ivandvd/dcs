"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { LocaleSwitch } from "@/components/i18n/LocaleSwitch";
import { useT } from "@/components/i18n/I18nProvider";
import { EASE } from "@/components/motion/Reveal";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-3 top-3 max-h-[calc(100svh-24px)] overflow-y-auto rounded-3xl bg-white p-5 text-ink shadow-2xl"
            data-lenis-prevent
          >
            <div className="flex items-center justify-between">
              <Image src="/brand/dcs-wordmark.png" alt="DCS" width={753} height={196} className="h-8 w-auto" />
              <div className="flex items-center gap-2">
                <LocaleSwitch tone="light" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t.nav.closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-paper"
                >
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-4 w-4">
                    <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="mt-6 divide-y divide-ink/8">
              {t.nav.items.map((item) => (
                <li key={item.href} className="py-3">
                  <Link href={item.href} onClick={onClose} className="block text-[22px] tracking-[-0.01em]">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 grid gap-1 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} onClick={onClose} className="block py-1 text-[15px] text-ink-3">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Button href="/contact" variant="lime" className="mt-6 w-full" icon="arrow">
              {t.nav.getQuote}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
