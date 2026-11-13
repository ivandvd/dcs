"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/site/MobileMenu";
import { LocaleSwitch } from "@/components/i18n/LocaleSwitch";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { localizeHref } from "@/lib/i18n/config";
import { EASE } from "@/components/motion/Reveal";

/**
 * Compact pill navigation that slides in once the hero is scrolled past and
 * the user scrolls back up. Hidden again on scroll down.
 */
export function FloatingNav() {
  const t = useT();
  const locale = useLocale();
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const past = y > window.innerHeight * 0.75;
        if (!past) setVisible(false);
        else if (y < last - 3) setVisible(true);
        else if (y > last + 3) setVisible(false);
        last = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className={`fixed inset-x-0 top-3 z-40 flex justify-center px-3 ${visible ? "" : "pointer-events-none"}`}
        aria-hidden={!visible}
      >
        <div className="flex items-center gap-1 rounded-full border border-black/5 bg-white/90 p-1.5 pl-4 shadow-[0_16px_48px_-16px_rgba(15,18,24,0.3)] backdrop-blur-md">
          <Link href="/" aria-label={t.nav.home} className="mr-2 flex h-8 items-center">
            <Image src="/brand/dcs-wordmark.png" alt="DCS" width={753} height={196} className="h-6 w-auto" />
          </Link>
          <ul className="hidden items-center lg:flex">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-full px-3.5 py-2 text-[13.5px] leading-none transition-colors duration-300 ${
                    pathname === localizeHref(item.href, locale) ? "bg-paper text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleSwitch tone="light" className="ml-2 hidden md:inline-flex" />
          <Button href="/contact" size="sm" variant="lime" className="ml-1 hidden sm:inline-flex">
            {t.nav.getQuote}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label={t.nav.openMenu}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-paper lg:hidden"
          >
            <span className="relative block h-[10px] w-[16px]">
              <span className="absolute left-0 top-0 h-[1.5px] w-full rounded bg-ink" />
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full rounded bg-ink" />
            </span>
          </button>
        </div>
      </motion.div>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
