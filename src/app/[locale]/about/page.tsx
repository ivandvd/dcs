import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Button } from "@/components/ui/Button";
import { IntroBlock } from "@/components/pages/IntroBlock";
import { FeatureGrid } from "@/components/pages/FeatureGrid";
import { Stagger, Item } from "@/components/motion/Reveal";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { getAboutCopy } from "@/lib/content/pages/about";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { meta } = getAboutCopy(locale);
  return { title: meta.title, description: meta.description, alternates: langAlternates("/about", locale) };
}

export default async function AboutPage({ params }: Props) {
  const copy = getAboutCopy(await localeFrom(params));
  const { hero, mission, values, why, career } = copy;

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lede={hero.lede}
          image="/images/heroes/about.jpg"
          alt={hero.alt}
          active="/about"
          actions={
            <>
              <Button href="/contact" variant="lime" icon="arrow-circle">
                {hero.contact}
              </Button>
              <Button href="/solutions" variant="white" icon="arrow">
                {hero.solutions}
              </Button>
            </>
          }
        />

        <IntroBlock
          eyebrow={mission.eyebrow}
          title={mission.title}
          body={mission.body}
          image={{ src: "/images/stills/field-aerial.jpg", alt: mission.alt }}
        />

        <FeatureGrid
          eyebrow={values.eyebrow}
          title={values.title}
          columns={4}
          className="pt-0 lg:pt-0"
          items={values.items}
        />

        <section className="relative z-10 -mt-8 rounded-[40px] bg-ink px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1320px]">
            <SectionHeader tone="dark" eyebrow={why.eyebrow} title={why.title} lede={why.lede} />
            <Stagger
              as="ul"
              className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
              stagger={0.08}
            >
              {why.facts.map((f) => (
                <Item as="li" key={f.k} className="flex min-h-[250px] flex-col justify-between bg-ink p-7 lg:p-8">
                  <span className="text-[40px] font-light leading-none tracking-[-0.03em] text-lime">{f.k}</span>
                  <div className="pt-10">
                    <h3 className="text-[20px] tracking-[-0.01em]">{f.t}</h3>
                    <p className="mt-2 text-[15px] leading-[1.55] text-white/65">{f.d}</p>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <IntroBlock
          eyebrow={career.eyebrow}
          title={career.title}
          body={career.body}
          image={{ src: "/images/tech/operator.jpg", alt: career.alt }}
          reverse
          actions={
            <>
              <Button href="/career" variant="lime" icon="arrow-circle">
                {career.openings}
              </Button>
              <Button href="mailto:biuro@dcs-drone.com?subject=CV" variant="white" className="border border-ink/10" icon="arrow">
                {career.sendCv}
              </Button>
            </>
          }
        />
      </main>
    </PageShell>
  );
}
