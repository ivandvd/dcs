import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IntroBlock } from "@/components/pages/IntroBlock";
import { FeatureGrid } from "@/components/pages/FeatureGrid";
import { SpecsGrid } from "@/components/pages/SpecsGrid";
import { ProcessSteps } from "@/components/pages/ProcessSteps";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { VideoCard, BUNNY } from "@/components/pages/VideoCard";
import { Reveal } from "@/components/motion/Reveal";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { getTechnologyCopy } from "@/lib/content/pages/technology";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { meta } = getTechnologyCopy(locale);
  return { title: meta.title, description: meta.description, alternates: langAlternates("/technology", locale) };
}

export default async function TechnologyPage({ params }: Props) {
  const copy = getTechnologyCopy(await localeFrom(params));
  const { hero, intro, features, specs, process, video, closing } = copy;

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lede={hero.lede}
          image="/images/heroes/technology.jpg"
          alt={hero.alt}
          active="/technology"
          actions={
            <>
              <Button href="/contact" variant="lime" icon="arrow-circle">
                {hero.demo}
              </Button>
              <Button href="/catalog" variant="white" icon="arrow">
                {hero.catalog}
              </Button>
            </>
          }
        />

        <IntroBlock
          eyebrow={intro.eyebrow}
          title={intro.title}
          body={intro.body}
          image={{ src: "/images/tech/nozzle.jpg", alt: intro.alt }}
          actions={
            <Button href="/contact" variant="ink" icon="arrow">
              {intro.cta}
            </Button>
          }
        />

        <FeatureGrid
          eyebrow={features.eyebrow}
          title={features.title}
          columns={4}
          className="pt-0 lg:pt-0"
          items={features.items}
        />

        <SpecsGrid eyebrow={specs.eyebrow} title={specs.title} specs={specs.items} />

        <ProcessSteps eyebrow={process.eyebrow} title={process.title} steps={process.steps} />

        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader eyebrow={video.eyebrow} title={video.title} size="sm" />
            <Reveal className="mt-10" amount={0.2}>
              <VideoCard embed={BUNNY.facadeCleaning} poster="/images/hero-poster.jpg" title={video.videoTitle}>
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/15 px-3.5 py-1.5 text-[12.5px] text-white backdrop-blur">
                  {video.chip}
                </span>
              </VideoCard>
            </Reveal>
          </div>
        </section>

        <ContactStrip
          eyebrow={closing.eyebrow}
          title={closing.title}
          lede={closing.lede}
          cta={{ label: closing.cta, href: "/contact" }}
        />
      </main>
    </PageShell>
  );
}
