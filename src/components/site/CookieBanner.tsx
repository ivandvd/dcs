"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/components/ui/Link";
import { useT } from "@/components/i18n/I18nProvider";
import { EASE } from "@/components/motion/Reveal";

const KEY = "dcs-cookie-consent";

export function CookieBanner() {
  const t = useT().cookie;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) {
        const timer = window.setTimeout(() => setOpen(true), 1800);
        return () => window.clearTimeout(timer);
      }
    } catch {
      /* storage unavailable: stay closed */
    }
  }, []);

  const decide = (value: "all" | "necessary") => {
    try {
      window.localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="dialog"
          aria-label={t.title}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-[420px] rounded-3xl border border-black/5 bg-white p-5 text-ink shadow-[0_30px_80px_-30px_rgba(15,18,24,0.45)] sm:bottom-6 sm:left-6 sm:right-auto"
        >
          <p className="text-[15px] font-medium">{t.title}</p>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-ink-3">
            {t.body}{" "}
            <Link href="/privacy" className="underline underline-offset-2 transition-colors duration-300 hover:text-ink">
              {t.privacy}
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => decide("all")}
              className="h-10 rounded-full bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-ink-2"
            >
              {t.acceptAll}
            </button>
            <button
              type="button"
              onClick={() => decide("necessary")}
              className="h-10 rounded-full border border-ink/10 px-5 text-[14px] font-medium transition-colors hover:bg-paper"
            >
              {t.necessary}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
