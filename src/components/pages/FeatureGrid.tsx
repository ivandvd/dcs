import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";
import { LineIcon, type IconName } from "@/components/ui/LineIcons";

export type Feature = { icon: IconName; title: string; body: string; detail?: string };

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
  className?: string;
};

export function FeatureGrid({ eyebrow, title, lede, items, columns = 3, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  const cols = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section
      className={`px-5 py-24 sm:px-8 lg:px-12 lg:py-36 ${
        dark ? "relative z-10 -mt-8 rounded-[40px] bg-ink text-white" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} tone={tone} />
        <Stagger as="ul" className={`mt-14 grid gap-3 sm:grid-cols-2 ${cols}`} stagger={0.07}>
          {items.map((f, i) => (
            <Item
              as="li"
              key={f.title}
              className={`group relative flex min-h-[300px] flex-col rounded-[24px] p-7 transition-[border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${
                dark
                  ? "border border-white/10 bg-white/[0.04] hover:border-white/20"
                  : "border border-ink/8 bg-white hover:border-ink/15 hover:shadow-[0_30px_60px_-40px_rgba(15,18,24,0.35)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500 ${
                    dark
                      ? "bg-white/10 text-lime group-hover:bg-lime group-hover:text-ink"
                      : "bg-mist text-blue group-hover:bg-lime group-hover:text-ink"
                  }`}
                >
                  <LineIcon name={f.icon} className="h-5 w-5" />
                </span>
                <span className={`font-mono text-[11px] ${dark ? "text-white/35" : "text-ink/30"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-7 text-[21px] tracking-[-0.015em]">{f.title}</h3>
              <p className={`mt-2.5 text-[15px] leading-[1.6] ${dark ? "text-white/65" : "text-ink-3"}`}>{f.body}</p>
              {f.detail && (
                <span
                  className={`mt-auto inline-flex w-fit items-center gap-2 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] ${
                    dark ? "text-lime" : "text-blue"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-lime" : "bg-blue"}`} />
                  {f.detail}
                </span>
              )}
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
