"use client";

import { PageShell } from "@/components/site/PageShell";
import { LightHeader } from "@/components/site/LightHeader";
import { Button } from "@/components/ui/Button";
import { useT } from "@/components/i18n/I18nProvider";

export function NotFoundContent() {
  const t = useT().notFound;
  return (
    <PageShell>
      <main className="min-h-[70svh]">
        <LightHeader eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/" variant="lime" icon="arrow-circle">
              {t.home}
            </Button>
            <Button href="/contact" variant="white" className="border border-ink/10" icon="arrow">
              {t.contact}
            </Button>
          </div>
        </LightHeader>
      </main>
    </PageShell>
  );
}
