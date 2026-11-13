import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { site } from "@/lib/site";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { Facebook, Instagram, Youtube } from "@/components/ui/Icons";

const socials = [
  { href: site.social.youtube, label: "YouTube", Icon: Youtube },
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
];

/**
 * Inset dark card, mirroring the hero card at the top of every page:
 * closing statement + actions, then the link columns.
 */
export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).footer;
  const tel = site.phone.replace(/\s+/g, "");
  return (
    <footer className="mt-24 px-2 pb-2 sm:px-3 sm:pb-3 lg:mt-36">
      <div className="rounded-[22px] bg-ink px-6 pb-7 pt-16 text-white sm:rounded-[32px] sm:px-10 lg:px-14 lg:pt-24">
        {/* Closing statement */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                {t.eyebrow}
              </span>
            </Reveal>
            <TextReveal
              as="h2"
              className="mt-5 max-w-[640px] text-[clamp(36px,5vw,68px)] font-light leading-[1.02] tracking-[-0.03em]"
            >
              {t.title}
            </TextReveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5 lg:justify-self-end">
            <p className="max-w-[440px] text-[16px] leading-[1.6] text-white/65">{t.lede}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" variant="lime" icon="arrow-circle">
                {t.contact}
              </Button>
              <Button href="/catalog" variant="ghost" icon="arrow">
                {t.catalog}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Columns */}
        <div className="grid gap-12 pt-14 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-4">
            <Image
              src="/brand/dcs-logo.png"
              alt="DCS – Global AeroCleaning Solutions"
              width={759}
              height={255}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-[320px] text-[15px] leading-[1.6] text-white/60">{t.blurb}</p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{t.solutions}</h3>
              <ul className="mt-5 space-y-3">
                {t.solutionLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-white/85 transition-colors hover:text-lime">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{t.company}</h3>
              <ul className="mt-5 space-y-3">
                {t.companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-white/85 transition-colors hover:text-lime">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{t.contactCol}</h3>
              <ul className="mt-5 space-y-4 text-[15px]">
                <li>
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/40">{t.office}</span>
                  <a href={`tel:${tel}`} className="block text-white/85 transition-colors duration-300 hover:text-lime">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="block text-white/85 transition-colors duration-300 hover:text-lime">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/40">{t.sales}</span>
                  <a href="tel:+48668373821" className="block text-white/85 transition-colors duration-300 hover:text-lime">
                    Mateusz +48 668 373 821
                  </a>
                  <a href="tel:+48664250323" className="block text-white/85 transition-colors duration-300 hover:text-lime">
                    Mariusz +48 664 250 323
                  </a>
                </li>
                <li className="text-white/60">
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/40">{t.address}</span>
                  {t.officeAddress}
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-white/40">{t.mailing}</span>
                  {t.mailingAddress}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.rights}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              {t.privacy}
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
