"use client";

import { Reveal, Stagger, Item } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Mail, Phone } from "@/components/ui/Icons";
import { useT } from "@/components/i18n/I18nProvider";
import { contacts as people, site, type Contact } from "@/lib/site";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  cta: { label: string; href: string };
  /**
   * Extra person shown first, in a group of their own (e.g. the examiner on the training page).
   * Office and sales department are always listed, so passing one of them changes nothing.
   */
  person?: Contact;
};

type Row = { key: string; href: string; icon: "phone" | "mail"; label: string; value: string };
type Group = { key: string; title: string; note?: string; rows: Row[] };

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const tel = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

/** Lime closing band: statement + CTA on the left, grouped direct contacts (office, sales department) on the right. */
export function ContactStrip({ eyebrow, title, lede, cta, person }: Props) {
  const t = useT().contacts;

  const phoneRow = (c: Contact, label: string): Row => ({
    key: c.phone,
    href: tel(c.phone),
    icon: "phone",
    label,
    value: c.phone,
  });

  const listed = new Set([people.office.phone, ...people.sales.map((c) => c.phone)]);
  const groups: Group[] = [];
  if (person && !listed.has(person.phone)) {
    groups.push({
      key: person.role,
      title: t[person.role],
      note: person.note ? t[person.note] : undefined,
      rows: [phoneRow(person, person.name)],
    });
  }
  groups.push(
    {
      key: "office",
      title: t.office,
      note: t.hours,
      rows: [
        phoneRow(people.office, t.phone),
        { key: "email", href: `mailto:${site.email}`, icon: "mail", label: t.email, value: site.email },
      ],
    },
    { key: "sales", title: t.sales, rows: people.sales.map((c) => phoneRow(c, c.name)) },
  );

  return (
    <section className="px-3 pt-8">
      <Reveal amount={0.2}>
        <div className="relative mx-auto grid max-w-[1320px] gap-10 overflow-hidden rounded-[32px] bg-lime px-7 py-10 text-ink sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:py-16">
          <div className="lg:col-span-6">
            <span className="eyebrow text-ink/60">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              {eyebrow}
            </span>
            <TextReveal
              as="h2"
              className="mt-5 max-w-[520px] text-[clamp(30px,3.8vw,52px)] font-light leading-[1.04] tracking-[-0.03em]"
            >
              {title}
            </TextReveal>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.55] text-ink/70">{lede}</p>
            <div className="mt-8">
              <Button href={cta.href} variant="ink" icon="arrow-circle">
                {cta.label}
              </Button>
            </div>
          </div>

          <div className="grid gap-7 self-end lg:col-span-6">
            {groups.map((g) => (
              <div key={g.key}>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-1">
                  <h3 className="inline-flex items-center gap-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.16em] text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    {g.title}
                  </h3>
                  {g.note && <span className="text-[13px] text-ink/60">{g.note}</span>}
                </div>
                <Stagger as="ul" className="mt-3 grid gap-2" stagger={0.08} amount={0.2}>
                  {g.rows.map((r) => (
                    <Item as="li" key={r.key}>
                      <a
                        href={r.href}
                        className={`group flex items-center gap-4 rounded-2xl bg-ink p-4 text-white transition-[transform,background-color,box-shadow] duration-500 ${EASE} hover:-translate-y-0.5 hover:bg-ink-2 hover:shadow-[0_18px_40px_-22px_rgba(15,18,24,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-lime sm:gap-5 sm:p-5`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-500 ${EASE} group-hover:scale-110`}
                        >
                          {r.icon === "phone" ? <Phone className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                            {r.label}
                          </span>
                          <span className="mt-0.5 block break-words text-[18px] font-medium tracking-[-0.01em] sm:text-[20px]">
                            {r.value}
                          </span>
                        </span>
                        <span
                          aria-hidden
                          className="relative hidden h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 text-white/80 transition-colors duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink sm:flex"
                        >
                          <ArrowUpRight
                            className={`absolute h-3.5 w-3.5 transition-transform duration-500 ${EASE} group-hover:-translate-y-5 group-hover:translate-x-5`}
                          />
                          <ArrowUpRight
                            className={`absolute h-3.5 w-3.5 -translate-x-5 translate-y-5 transition-transform duration-500 ${EASE} group-hover:translate-x-0 group-hover:translate-y-0`}
                          />
                        </span>
                      </a>
                    </Item>
                  ))}
                </Stagger>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
