import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { StickyShowcase } from "@/components/pages/StickyShowcase";
import { ProcessSteps } from "@/components/pages/ProcessSteps";
import { ContactStrip } from "@/components/pages/ContactStrip";
import { Stagger, Item } from "@/components/motion/Reveal";
import { LineIcon } from "@/components/ui/LineIcons";
import { langAlternates, localeFrom } from "@/lib/i18n";
import { getSolutionsCopy, type ApplicationKey } from "@/lib/content/pages/solutions";

type Props = { params: Promise<{ locale: string }> };

/** Language-independent part of the showcase: the image and service page of each application (order = display order). */
const showcaseMedia: { key: ApplicationKey; href: string; image: string }[] = [
  { key: "facade", href: "/services/cleaning", image: "/images/solutions/facade.jpg" },
  { key: "glass", href: "/services/cleaning", image: "/images/solutions/glass.jpg" },
  { key: "agents", href: "/services/disinfection", image: "/images/solutions/agents.jpg" },
  { key: "inspection", href: "/services/inspection", image: "/images/services/inspection.jpg" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { meta } = getSolutionsCopy(locale);
  return { title: meta.title, description: meta.description, alternates: langAlternates("/solutions", locale) };
}

export default async function SolutionsPage({ params }: Props) {
  const { hero, pillars, applications, process, closing } = getSolutionsCopy(await localeFrom(params));

  return (
    <PageShell>
      <main>
        <PageHero
          eyebrow={hero.eyebrow}
          title={hero.title}
          lede={hero.lede}
          image="/images/heroes/solutions.jpg"
          alt={hero.alt}
          active="/solutions"
          actions={
            <>
              <Button href="/contact" variant="lime" icon="arrow-circle">
                {hero.consult}
              </Button>
              <Button href="#applications" variant="white" icon="arrow">
                {hero.explore}
              </Button>
            </>
          }
        />

        <section className="px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28">
          <Stagger as="ul" className="mx-auto grid max-w-[1320px] gap-3 sm:grid-cols-3" stagger={0.1}>
            {pillars.map((p) => (
              <Item as="li" key={p.title} className="flex items-start gap-5 rounded-[24px] border border-ink/8 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-blue">
                  <LineIcon name={p.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[20px] tracking-[-0.01em]">{p.title}</span>
                  <span className="mt-1 block text-[15px] leading-[1.5] text-ink-3">{p.body}</span>
                </span>
              </Item>
            ))}
          </Stagger>
        </section>

        <StickyShowcase
          id="applications"
          eyebrow={applications.eyebrow}
          title={applications.title}
          lede={applications.lede}
          items={showcaseMedia.map((m) => ({ ...applications.items[m.key], href: m.href, image: m.image }))}
        />

        <ProcessSteps
          tone="dark"
          eyebrow={process.eyebrow}
          title={process.title}
          lede={process.lede}
          steps={process.steps}
        />

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
