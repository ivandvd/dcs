import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[clamp(30px,3.6vw,48px)]",
  md: "text-[clamp(32px,4.4vw,60px)]",
  lg: "text-[clamp(36px,5.2vw,72px)]",
};

export function SectionHeader({ eyebrow, title, lede, tone = "light", align = "left", className = "", size = "md" }: Props) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto flex flex-col items-center text-center" : ""} ${className}`}>
      <Reveal>
        <span className={`eyebrow ${dark ? "text-white/60" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {eyebrow}
        </span>
      </Reveal>
      <TextReveal
        as="h2"
        className={`mt-5 font-light leading-[1.02] tracking-[-0.03em] ${sizes[size]} ${
          center ? "max-w-[900px]" : "max-w-[760px]"
        }`}
      >
        {title}
      </TextReveal>
      {lede && (
        <Reveal delay={0.15}>
          <p
            className={`mt-6 max-w-[560px] text-[17px] leading-[1.55] sm:text-[18px] ${
              dark ? "text-white/65" : "text-ink-3"
            }`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
