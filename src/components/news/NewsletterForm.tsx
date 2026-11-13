"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { useLocale, useT } from "@/components/i18n/I18nProvider";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-3/70 outline-none transition-[border-color,box-shadow] duration-300 focus:border-blue focus:shadow-[0_0_0_4px_rgba(81,112,255,0.12)]";

/** E-mail capture: posts JSON (e-mail + current locale) to /api/newsletter and shows the result inline. */
export function NewsletterForm() {
  const locale = useLocale();
  const t = useT().news.newsletter;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    const honeypot = (new FormData(e.currentTarget).get("website") as string) || "";
    if (!EMAIL.test(value)) {
      setStatus("error");
      setError(t.invalid);
      return;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: value, website: honeypot, locale }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean };
      if (!res.ok || !json.ok) throw new Error("newsletter request failed");
      setStatus("sent");
      setEmail("");
    } catch {
      // generic, localized message (the API's own error text is English only)
      setStatus("error");
      setError(t.error);
    }
  }

  return (
    <div className="relative" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-start gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
              <Check className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-[20px] font-light tracking-[-0.015em]">{t.thanks}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-2 text-[14px] font-medium underline underline-offset-4"
              >
                {t.another}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={false}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            noValidate
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  {t.emailLabel}
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder={t.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "error" ? true : undefined}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                  className={field}
                />
              </div>
              <Button
                type="submit"
                variant="lime"
                icon="arrow-circle"
                disabled={status === "sending"}
                className="shrink-0 disabled:opacity-60"
              >
                {status === "sending" ? t.sending : t.submit}
              </Button>
            </div>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            {status === "error" && error && (
              <p id="newsletter-error" role="alert" className="mt-3 text-[14px] text-red-600">
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
