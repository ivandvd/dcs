import { Stagger, Item } from "@/components/motion/Reveal";
import { Check } from "@/components/ui/Icons";

type Props = { items: string[]; tone?: "light" | "dark" | "lime"; className?: string; columns?: 1 | 2 };

export function Checklist({ items, tone = "light", className = "", columns = 1 }: Props) {
  const badge =
    tone === "dark" ? "bg-lime text-ink" : tone === "lime" ? "bg-ink text-lime" : "bg-lime text-ink";
  const text = tone === "dark" ? "text-white/85" : "text-ink";
  return (
    <Stagger as="ul" className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`} stagger={0.06}>
      {items.map((it) => (
        <Item as="li" key={it} className={`flex items-start gap-3 text-[15.5px] leading-[1.5] ${text}`}>
          <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${badge}`}>
            <Check className="h-3.5 w-3.5" />
          </span>
          {it}
        </Item>
      ))}
    </Stagger>
  );
}
