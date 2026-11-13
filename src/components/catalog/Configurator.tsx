"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getCatalogCopy, getProduct, getProducts, legacySlugs } from "@/lib/content/catalog";
import { useLocale, useT } from "@/components/i18n/I18nProvider";
import { SectionHeader } from "@/components/site/SectionHeader";
import { EASE } from "@/components/motion/Reveal";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { site } from "@/lib/site";

/** Object types in display order (labels: `t.catalog.configurator.objects`). */
const OBJECT_IDS = ["residential", "office", "industrial", "solar", "operator", "other"] as const;
type ObjectId = (typeof OBJECT_IDS)[number];

type ApplicationId = "facade" | "solar" | "disinfection" | "inspection" | "training";
type Application = { id: ApplicationId; match: string[] };

/** Main applications and the products they highlight (labels: `t.catalog.configurator.applications`). */
const APPLICATIONS: Application[] = [
  {
    id: "facade",
    match: ["dcs-x1-pro", "dcs-x1-maxi", "dcs-x1-mini", "dji-matrice-400", "dji-matrice-350-rtk", "hose-reel-120m", "nozzle-set", "tank-450l", "mostfoam-zero-one-killer-25l"],
  },
  {
    id: "solar",
    match: ["dcs-x1-pro", "dcs-x1-mini", "dji-matrice-350-rtk", "nozzle-set", "hose-reel-120m", "tank-450l"],
  },
  {
    id: "disinfection",
    match: ["dcs-x1-pro", "dcs-x1-mini", "tank-60l", "mostfoam-zero-one-killer-10l", "mostfoam-zero-one-killer-25l", "nozzle-set"],
  },
  {
    id: "inspection",
    match: ["dji-matrice-400", "dji-matrice-350-rtk", "battery-tb100-dji-matrice-400", "battery-tb65-dji-matrice-350-rtk"],
  },
  { id: "training", match: ["sts-01-training", "sts-02-training", "dji-matrice-350-rtk"] },
];

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-ink/10 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-3/60 outline-none transition-[border-color,box-shadow] duration-300 focus:border-blue focus:shadow-[0_0_0_4px_rgba(81,112,255,0.12)]";
const label = "mb-2 block text-[12px] font-medium uppercase tracking-[0.12em] text-ink-3";

export function Configurator() {
  const locale = useLocale();
  const t = useT();
  const c = t.catalog.configurator;
  const copy = getCatalogCopy(locale).configurator;
  const products = getProducts(locale);
  const [step, setStep] = useState(0);
  const [object, setObject] = useState<ObjectId | null>(null);
  const [applicationId, setApplicationId] = useState<ApplicationId | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Preselect from the URL (?product=slug; links from the old site use ?produkt= with its Polish slugs)
  // and scroll here when the hash asks for it.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("product") ?? params.get("produkt");
    const p = raw ? (legacySlugs[raw] ?? raw) : null;
    if (p && getProduct(p)) setSelected([p]);
    const wantsScroll = /#(konfigurator|configurator)$/.test(window.location.hash) || !!raw;
    if (wantsScroll) {
      const timer = window.setTimeout(() => {
        document.getElementById("konfigurator")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const application = APPLICATIONS.find((a) => a.id === applicationId) ?? null;
  const recommended = useMemo(() => new Set(application?.match ?? []), [application]);
  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => Number(recommended.has(b.slug)) - Number(recommended.has(a.slug))),
    [products, recommended],
  );

  const canNext = step === 0 ? !!object : step === 1 ? !!application : step === 2 ? selected.length > 0 : false;
  const toggle = (slug: string) =>
    setSelected((s) => (s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]));

  const summaryLines = [
    { k: c.summary.object, v: object ? c.objects[object] : "–" },
    { k: c.summary.application, v: application ? c.applications[application.id] : "–" },
    { k: c.summary.products, v: selected.map((s) => products.find((p) => p.slug === s)?.name ?? s).join(", ") || "–" },
  ];

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    setStatus("sending");
    setError(null);
    let failure: string | null = null;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source: "configurator",
          service: "System configuration",
          locale,
          fullName: data.fullName,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
          website: data.website,
          summary: summaryLines.map((l) => `${l.k}: ${l.v}`).join("\n"),
        }),
      });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean; missing?: string[] };
      // The API answers 422 with `missing` for empty required fields, and 422 without it for an invalid e-mail.
      if (!res.ok || !json.ok) {
        failure = res.status === 422 ? (json.missing?.length ? c.errors.required : c.errors.email) : c.errors.generic;
      }
    } catch {
      failure = c.errors.generic;
    }
    if (failure) {
      setStatus("error");
      setError(failure);
    } else {
      setStatus("sent");
    }
  }

  return (
    <section id="konfigurator" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <span id="configurator" aria-hidden className="sr-only" />
      <div className="mx-auto max-w-[1120px]">
        <SectionHeader align="center" eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede} />

        <div className="mt-14 overflow-hidden rounded-[32px] border border-ink/8 bg-white shadow-[0_40px_90px_-60px_rgba(15,18,24,0.35)]">
          {/* Stepper */}
          <ol className="flex items-center gap-2 border-b border-ink/8 px-5 py-5 sm:gap-3 sm:px-8">
            {c.steps.map((s, i) => {
              const done = i < step || status === "sent";
              const on = i === step;
              return (
                <li key={s} className="flex min-w-0 flex-1 items-center gap-3 last:flex-none">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[12px] transition-colors duration-300 ${
                      done ? "bg-lime text-ink" : on ? "bg-ink text-white" : "bg-paper text-ink-3"
                    }`}
                  >
                    {done ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </span>
                  <span className={`hidden truncate text-[13.5px] sm:block ${on ? "text-ink" : "text-ink-3"}`}>{s}</span>
                  {i < c.steps.length - 1 && (
                    <span className={`hidden h-px flex-1 sm:block ${done ? "bg-lime" : "bg-ink/10"}`} />
                  )}
                </li>
              );
            })}
          </ol>

          <div className="p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={status === "sent" ? "sent" : step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16, transition: { duration: 0.16 } }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                {status === "sent" ? (
                  <div className="flex min-h-[320px] flex-col items-start justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-[28px] font-light tracking-[-0.02em]">{c.sent.title}</h3>
                    <p className="mt-3 max-w-[520px] text-[16px] leading-[1.6] text-ink-3">
                      {c.sent.body.replace("{phone}", site.phone)}
                    </p>
                  </div>
                ) : step === 0 ? (
                  <Choice
                    title={c.object.title}
                    hint={c.object.hint}
                    options={OBJECT_IDS.map((id) => ({ id, label: c.objects[id] }))}
                    value={object}
                    onChange={setObject}
                  />
                ) : step === 1 ? (
                  <Choice
                    title={c.application.title}
                    hint={c.application.hint}
                    options={APPLICATIONS.map((a) => ({ id: a.id, label: c.applications[a.id] }))}
                    value={applicationId}
                    onChange={setApplicationId}
                  />
                ) : step === 2 ? (
                  <div>
                    <StepTitle
                      title={c.components.title}
                      hint={c.components.hint}
                      right={
                        <span className="font-mono text-[12px] text-ink-3">
                          {c.components.selected.replace("{count}", String(selected.length))}
                        </span>
                      }
                    />
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {sortedProducts.map((p) => {
                        const on = selected.includes(p.slug);
                        const rec = recommended.has(p.slug);
                        return (
                          <li key={p.slug}>
                            <button
                              type="button"
                              onClick={() => toggle(p.slug)}
                              aria-pressed={on}
                              className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition-colors duration-300 ${
                                on
                                  ? "border-ink bg-ink text-white"
                                  : rec
                                    ? "border-lime bg-lime/15 text-ink hover:border-ink/30"
                                    : "border-ink/10 bg-white text-ink hover:border-ink/30"
                              }`}
                            >
                              <span
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                  on ? "border-lime bg-lime text-ink" : "border-ink/20"
                                }`}
                              >
                                {on && <Check className="h-3 w-3" />}
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[14.5px] font-medium leading-snug">{p.name}</span>
                                <span className={`mt-1 block font-mono text-[10.5px] uppercase tracking-[0.12em] ${on ? "text-white/55" : "text-ink-3"}`}>
                                  {p.categoryLabel}
                                  {rec && !on ? ` · ${c.components.recommended}` : ""}
                                </span>
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="grid gap-10 lg:grid-cols-12">
                    <form id="configurator-form" onSubmit={submit} className="grid gap-5 lg:col-span-7" noValidate>
                      <StepTitle title={c.contact.title} hint={c.contact.hint} />
                      <div>
                        <label htmlFor="cfg-name" className={label}>
                          {c.fields.name}
                        </label>
                        <input id="cfg-name" name="fullName" required autoComplete="name" placeholder={c.placeholders.name} className={field} />
                      </div>
                      <div>
                        <label htmlFor="cfg-company" className={label}>
                          {c.fields.company}
                        </label>
                        <input id="cfg-company" name="company" autoComplete="organization" placeholder={c.placeholders.company} className={field} />
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="cfg-email" className={label}>
                            {c.fields.email}
                          </label>
                          <input id="cfg-email" name="email" type="email" required autoComplete="email" placeholder={c.placeholders.email} className={field} />
                        </div>
                        <div>
                          <label htmlFor="cfg-phone" className={label}>
                            {c.fields.phone}
                          </label>
                          <input id="cfg-phone" name="phone" type="tel" required autoComplete="tel" placeholder={c.placeholders.phone} className={field} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cfg-message" className={label}>
                          {c.fields.message}
                        </label>
                        <textarea
                          id="cfg-message"
                          name="message"
                          rows={4}
                          placeholder={c.placeholders.message}
                          className={`${field} resize-y`}
                        />
                      </div>
                      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                      {status === "error" && error && (
                        <p role="alert" className="text-[14px] text-red-600">
                          {error}
                        </p>
                      )}
                    </form>
                    <aside className="lg:col-span-5">
                      <div className="rounded-[24px] bg-paper p-6">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{c.summary.title}</p>
                        <dl className="mt-4 space-y-4">
                          {summaryLines.map((l) => (
                            <div key={l.k}>
                              <dt className="text-[12.5px] text-ink-3">{l.k}</dt>
                              <dd className="mt-0.5 text-[15px] leading-[1.45] text-ink">{l.v}</dd>
                            </div>
                          ))}
                        </dl>
                        <p className="mt-6 text-[12.5px] leading-[1.5] text-ink-3">{c.summary.note}</p>
                      </div>
                    </aside>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {status !== "sent" && (
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink/8 pt-6">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/10 px-5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-paper disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  {t.common.back}
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(3, s + 1))}
                    disabled={!canNext}
                    className="group inline-flex h-11 items-center gap-3 rounded-full bg-ink pl-5 pr-1.5 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-ink-2 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {t.common.next}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-ink">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    form="configurator-form"
                    disabled={status === "sending"}
                    className="group inline-flex h-11 items-center gap-3 rounded-full bg-lime pl-5 pr-1.5 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-lime-2 disabled:opacity-60"
                  >
                    {status === "sending" ? c.sending : c.send}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
                      <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepTitle({ title, hint, right }: { title: string; hint: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-[22px] tracking-[-0.015em] sm:text-[24px]">{title}</h3>
        <p className="mt-1.5 text-[14.5px] text-ink-3">{hint}</p>
      </div>
      {right}
    </div>
  );
}

function Choice<T extends string>({
  title,
  hint,
  options,
  value,
  onChange,
}: {
  title: string;
  hint: string;
  options: { id: T; label: string }[];
  value: T | null;
  onChange: (id: T) => void;
}) {
  return (
    <div>
      <StepTitle title={title} hint={hint} />
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const on = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange(o.id)}
              aria-pressed={on}
              className={`flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition-colors duration-300 ${
                on ? "border-ink bg-ink text-white" : "border-ink/10 bg-white text-ink hover:border-ink/30"
              }`}
            >
              {o.label}
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${on ? "border-lime bg-lime text-ink" : "border-ink/20"}`}>
                {on && <Check className="h-3 w-3" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
