"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { Check } from "@/components/ui/Icons";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { site } from "@/lib/site";

/**
 * Values submitted to /api/contact – stable English names, independent of the UI language.
 * The visible option labels come from `t.company.contactForm.services` under the same keys.
 */
export const SERVICES = {
  facadeCleaning: "Facade Cleaning",
  windowCleaning: "Window Cleaning",
  disinfection: "Disinfection",
  inspection: "Building Inspection",
  equipment: "Equipment Purchase",
  training: "Training & Certification",
  franchise: "Franchise Inquiry",
  other: "Other",
} as const;

type ServiceKey = keyof typeof SERVICES;
const SERVICE_KEYS = Object.keys(SERVICES) as ServiceKey[];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-3/70 outline-none transition-[border-color,box-shadow] duration-300 focus:border-blue focus:shadow-[0_0_0_4px_rgba(81,112,255,0.12)]";
const label = "mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3";

export function ContactForm() {
  const locale = useLocale();
  const t = useT().company.contactForm;
  const params = useSearchParams();
  const product = params.get("product");
  const topic = params.get("topic");
  const initialService = product || topic === "system" ? SERVICES.equipment : "";
  const initialMessage = product
    ? `${t.prefill.replace("{product}", product.replace(/-/g, " ").toUpperCase())}\n\n`
    : "";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError(null);
    // The API answers in English; the visitor sees a message in the page language instead.
    let message = t.errorGeneric;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as {
        ok: boolean;
        error?: string;
        missing?: string[];
      };
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      // 422 is the API's validation failure: either listed missing fields or an invalid e-mail address.
      if (json.missing?.length) message = t.errorRequired;
      else if (res.status === 422) message = t.errorEmail;
    } catch {
      // network failure: keep the generic message
    }
    setStatus("error");
    setError(message);
  }

  return (
    <div className="relative rounded-[28px] border border-ink/8 bg-white p-6 sm:p-8 lg:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex min-h-[420px] flex-col items-start justify-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
              <Check className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-[28px] font-light tracking-[-0.02em]">{t.sentTitle}</h3>
            <p className="mt-3 max-w-[460px] text-[16px] leading-[1.6] text-ink-3">
              {t.sentBody.replace("{phone}", site.phone)}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-[14px] font-medium underline underline-offset-4"
            >
              {t.sendAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={false}
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2"
            noValidate
          >
            <div>
              <label htmlFor="firstName" className={label}>
                {t.firstName} *
              </label>
              <input id="firstName" name="firstName" required autoComplete="given-name" className={field} />
            </div>
            <div>
              <label htmlFor="lastName" className={label}>
                {t.lastName} *
              </label>
              <input id="lastName" name="lastName" required autoComplete="family-name" className={field} />
            </div>
            <div>
              <label htmlFor="email" className={label}>
                {t.email} *
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="phone" className={label}>
                {t.phone} *
              </label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
            </div>
            <div>
              <label htmlFor="company" className={label}>
                {t.company}
              </label>
              <input id="company" name="company" autoComplete="organization" className={field} />
            </div>
            <div>
              <label htmlFor="service" className={label}>
                {t.service} *
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue={initialService}
                  className={`${field} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    {t.selectService}
                  </option>
                  {SERVICE_KEYS.map((key) => (
                    <option key={key} value={SERVICES[key]}>
                      {t.services[key]}
                    </option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 text-ink-3"
                >
                  <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={label}>
                {t.message} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                defaultValue={initialMessage}
                placeholder={t.messagePlaceholder}
                className={`${field} resize-y`}
              />
            </div>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] leading-[1.5] text-ink-3">{t.consent}</p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-lime px-6 pr-1.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-lime-2 disabled:opacity-60"
              >
                {status === "sending" ? t.sending : t.submit}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
                    <path
                      d="M4 12 12 4M5.5 4H12v6.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
            {status === "error" && error && (
              <p role="alert" className="text-[14px] text-red-600 sm:col-span-2">
                {error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
