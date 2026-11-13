import type { SpecGroup } from "@/lib/content/catalog";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  groups: SpecGroup[];
  /** "lg" renders the values as large light figures (used for "Critical specs") */
  size?: "md" | "lg";
  className?: string;
};

/** Light-tone spec tables: a small mono title per group, then `dl` rows with hairline dividers. */
export function SpecGroups({ groups, size = "md", className = "" }: Props) {
  const large = size === "lg";
  return (
    <div className={`space-y-12 ${className}`}>
      {groups.map((g) => (
        <Reveal key={g.title} amount={0.15}>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {g.title}
          </span>
          <dl className="mt-5 border-t border-ink/10">
            {g.rows.map((r) => (
              <div
                key={`${r.label}-${r.value}`}
                className={`grid gap-1.5 border-b border-ink/10 sm:gap-6 ${
                  large
                    ? "py-5 sm:grid-cols-[minmax(0,230px)_1fr] sm:items-baseline"
                    : "py-3.5 sm:grid-cols-[minmax(0,270px)_1fr]"
                }`}
              >
                <dt
                  className={
                    large ? "font-mono text-[12px] uppercase tracking-[0.14em] text-ink-3" : "text-[14.5px] text-ink-3"
                  }
                >
                  {r.label}
                </dt>
                <dd
                  className={
                    large
                      ? r.value.length > 36
                        ? "text-[18px] font-light leading-[1.4] tracking-[-0.01em] sm:text-[20px]"
                        : "text-[22px] font-light tracking-[-0.02em] sm:text-[26px]"
                      : "text-[16px] leading-[1.45] text-ink"
                  }
                >
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      ))}
    </div>
  );
}
