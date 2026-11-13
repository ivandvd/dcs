import { Link } from "@/components/ui/Link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "lime" | "white" | "ink" | "ghost";
type Size = "sm" | "md" | "lg";
type Icon = "arrow" | "arrow-circle";

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  className?: string;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-medium leading-none whitespace-nowrap transition-[background-color,color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink hover:bg-lime-2",
  white: "bg-white text-ink hover:bg-paper",
  ink: "bg-ink text-white hover:bg-ink-2",
  ghost: "border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[14px]",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-[16px]",
};

const circlePad: Record<Size, string> = {
  sm: "pr-1.5",
  md: "pr-1.5",
  lg: "pr-2",
};

/** Pill button; with `href` it renders the locale-aware Link (internal hrefs get the /en or /pl prefix). */
export function Button({
  href,
  variant = "lime",
  size = "md",
  icon,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = [
    base,
    variants[variant],
    sizes[size],
    icon === "arrow-circle" ? circlePad[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span>{children}</span>
      {icon === "arrow" && <ArrowRight />}
      {icon === "arrow-circle" && <ArrowCircle size={size} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
    >
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowCircle({ size }: { size: Size }) {
  const dim = size === "lg" ? "h-10 w-10" : size === "md" ? "h-9 w-9" : "h-7 w-7";
  return (
    <span
      className={`relative flex ${dim} shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink text-white`}
    >
      <ArrowUpRight className="absolute transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:-translate-y-5" />
      <ArrowUpRight className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
    </span>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={`h-3.5 w-3.5 ${className}`}>
      <path
        d="M4 12 12 4M5.5 4H12v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
