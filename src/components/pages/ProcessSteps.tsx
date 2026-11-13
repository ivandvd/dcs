import { SectionHeader } from "@/components/site/SectionHeader";
import { Stagger, Item } from "@/components/motion/Reveal";

type Step = { title: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  steps: Step[];
  tone?: "light" | "dark";
  className?: string;
};

export function ProcessSteps({ eyebrow, title, lede, steps, tone = "light", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <section
      className={`px-5 py-24 sm:px-8 lg:px-12 lg:py-36 ${
        dark ? "relative z-10 -mt-8 rounded-[40px] bg-ink text-white" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} tone={tone} align="center" />
        <Stagger
          as="ol"
          className={`mt-16 grid gap-px overflow-hidden rounded-[28px] sm:grid-cols-2 ${
            steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          } ${dark ? "bg-white/10" : "bg-ink/10"}`}
          stagger={0.1}
        >
          {steps.map((s, i) => (
            <Item as="li" key={s.title} className={`flex min-h-[260px] flex-col p-7 ${dark ? "bg-ink" : "bg-paper"}`}>
              <span
                className={`font-mono text-[12px] ${dark ? "text-lime" : "text-blue"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`mt-10 text-[56px] font-light leading-none tracking-[-0.04em] ${
                  dark ? "text-white/15" : "text-ink/10"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-auto pt-8 text-[22px] tracking-[-0.015em]">{s.title}</h3>
              <p className={`mt-2 text-[15px] leading-[1.55] ${dark ? "text-white/65" : "text-ink-3"}`}>{s.body}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
