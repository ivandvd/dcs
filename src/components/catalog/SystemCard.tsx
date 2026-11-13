import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Aside for the catalog intro: the M350 with DCS rotor guards and the AeroCleaning lance. */
export function SystemCard({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).catalog.systemCard;
  return (
    <Reveal amount={0.2} className="h-full">
      <figure className="flex h-full flex-col overflow-hidden rounded-[28px] border border-ink/8 bg-white">
        <div className="relative aspect-[4/3] flex-1 lg:aspect-auto lg:min-h-[420px]">
          <div className="absolute inset-10 lg:inset-14">
            <Image
              src="/images/catalog/front-rotor-guards-dji-matrice-350-rtk/2.jpg"
              alt={t.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/8 px-6 py-5">
          <span className="text-[15px] text-ink">{t.caption}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">{t.tags}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
