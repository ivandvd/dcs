import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/pages/FeatureGrid";
import { JobList } from "@/components/pages/JobList";
import { IntroBlock } from "@/components/pages/IntroBlock";
import { site } from "@/lib/site";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { getCareerCopy } from "@/lib/content/pages/career";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { meta } = getCareerCopy(locale);
  return { title: meta.title, description: meta.description, alternates: langAlternates("/career", locale) };
}

export default async function CareerPage({ params }: Props) {
  const copy = getCareerCopy(await localeFrom(params));
  const { hero, why, jobs, cv } = copy;

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lede={hero.lede}
          image="/images/heroes/career.jpg"
          alt={hero.alt}
          active="/news"
          actions={
            <>
              <Button href="#openings" variant="lime" icon="arrow-circle">
                {hero.openings}
              </Button>
              <Button href={`mailto:${site.email}?subject=CV`} variant="white" icon="arrow">
                {hero.sendCv}
              </Button>
            </>
          }
        />

        <FeatureGrid eyebrow={why.eyebrow} title={why.title} lede={why.lede} columns={4} items={why.items} />

        <JobList id="openings" eyebrow={jobs.eyebrow} title={jobs.title} jobs={jobs.items} applyEmail={site.email} />

        <IntroBlock
          eyebrow={cv.eyebrow}
          title={cv.title}
          body={cv.body}
          image={{ src: "/images/tech/drone.jpg", alt: cv.alt }}
          actions={
            <Button href={`mailto:${site.email}?subject=CV`} variant="lime" icon="arrow-circle">
              {cv.cta}
            </Button>
          }
          className="pt-0 lg:pt-0"
        />
      </main>
    </PageShell>
  );
}
