import { Fragment } from "react";
import { Link } from "@/components/ui/Link";
import { PageShell } from "@/components/site/PageShell";
import { LightHeader } from "@/components/site/LightHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LegalToc } from "@/components/legal/LegalToc";
import type { LegalBlock, LegalDocument } from "@/lib/content/legal";
import { getDictionary, type Locale } from "@/lib/i18n";

type Links = Record<string, string> | undefined;

const EMAIL = "[\\w.+-]+@[\\w-]+(?:\\.[\\w-]+)+";
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const linkClass =
  "text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-300 hover:decoration-ink";

/** Plain text to nodes: e-mail addresses become mailto links, listed phrases become internal links. */
function Inline({ text, links }: { text: string; links: Links }) {
  const phrases = Object.keys(links ?? {}).map(escapeRegExp);
  const re = new RegExp(`(${[EMAIL, ...phrases].join("|")})`, "g");
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0 || !part) return <Fragment key={i}>{part}</Fragment>;
        const href = links?.[part];
        if (href) {
          return (
            <Link key={i} href={href} className={linkClass}>
              {part}
            </Link>
          );
        }
        return (
          <a key={i} href={`mailto:${part}`} className={linkClass}>
            {part}
          </a>
        );
      })}
    </>
  );
}

function Block({ block, links }: { block: LegalBlock; links: Links }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[16px] leading-[1.7] text-ink-2">
          <Inline text={block.text} links={links} />
        </p>
      );
    case "subheading":
      return <h3 className="pt-2 text-[18px] leading-[1.35] tracking-[-0.01em] text-ink">{block.text}</h3>;
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag
          className={`space-y-2 pl-5 text-[16px] leading-[1.7] text-ink-2 marker:text-ink-3 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <Inline text={item} links={links} />
            </li>
          ))}
        </Tag>
      );
    }
    case "address":
      return (
        <address className="rounded-[20px] border border-ink/8 bg-white px-6 py-5 text-[16px] not-italic leading-[1.7] text-ink-2">
          {block.lines.map((line, i) => (
            <span key={i} className={`block ${i === 0 ? "text-ink" : ""}`}>
              <Inline text={line} links={links} />
            </span>
          ))}
        </address>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[15px] leading-[1.6]">
            {block.head && (
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b border-ink/15 py-3 pr-4 font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-ink-3"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="border-b border-ink/8 py-3 pr-4 align-top text-ink-2">
                      <Inline text={cell} links={links} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

/**
 * Legal page: light header, sticky table of contents on the left, prose on the right.
 * Only the header animates; the document itself is static for easy reading and printing.
 */
export function LegalLayout({ doc, locale }: { doc: LegalDocument; locale: Locale }) {
  const t = getDictionary(locale).news.legal;
  const toc = doc.sections.map((s) => ({ id: s.id, label: s.heading }));

  return (
    <PageShell>
      <main>
        <LightHeader eyebrow={t.eyebrow} title={doc.title} lede={doc.lede} active="">
          <Reveal delay={0.25}>
            <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3">
              {doc.meta}
              {doc.updated && (
                <span className="ml-4">
                  {t.lastUpdated} {doc.updated}
                </span>
              )}
            </p>
          </Reveal>
        </LightHeader>

        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1320px] gap-10 border-t border-ink/10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-14">
            <aside className="lg:col-span-4">
              <LegalToc items={toc} />
            </aside>

            <article className="lg:col-span-8">
              <div className="max-w-[720px]">
                {doc.sections.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    aria-labelledby={`${s.id}-heading`}
                    className="scroll-mt-28 border-b border-ink/10 py-10 first:pt-0 last:border-b-0 lg:py-12"
                  >
                    <h2
                      id={`${s.id}-heading`}
                      className="flex items-baseline gap-4 text-[24px] font-light leading-[1.15] tracking-[-0.02em] sm:text-[28px]"
                    >
                      <span className="shrink-0 font-mono text-[12px] tabular-nums text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s.heading}</span>
                    </h2>
                    <div className="mt-6 space-y-5">
                      {s.blocks.map((b, j) => (
                        <Block key={j} block={b} links={doc.links} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
