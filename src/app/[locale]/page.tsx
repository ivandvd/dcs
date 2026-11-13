import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/site/Hero";
import { TickerStrip } from "@/components/home/TickerStrip";
import { Intro } from "@/components/home/Intro";
import { Pillars } from "@/components/home/Pillars";
import { WhyDrone } from "@/components/home/WhyDrone";
import { Services } from "@/components/home/Services";
import { Facilities } from "@/components/home/Facilities";
import { Statement } from "@/components/home/Statement";
import { StartBusiness } from "@/components/home/StartBusiness";

type Props = { params: Promise<{ locale: string }> };

// Title and description come from the [locale] layout (localized defaults); the page adds its language alternates.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { alternates: langAlternates("/", await localeFrom(params)) };
}

export default async function HomePage({ params }: Props) {
  const locale = await localeFrom(params);

  // Drop the client's source file at public/video/hero.mp4 and the hero
  // switches from the Bunny Stream embed to a native, self-hosted <video>.
  const localVideo = path.join(process.cwd(), "public", "video", "hero.mp4");
  const videoSrc = fs.existsSync(localVideo) ? "/video/hero.mp4" : null;

  // Client sections (Hero, Pillars, WhyDrone, Services, Facilities) read the locale via useLocale()/useT().
  return (
    <PageShell>
      <main>
        <Hero videoSrc={videoSrc} />
        <TickerStrip locale={locale} />
        <Intro locale={locale} />
        <Pillars />
        <WhyDrone />
        <Services />
        <Facilities />
        <Statement locale={locale} />
        <StartBusiness locale={locale} />
      </main>
    </PageShell>
  );
}
