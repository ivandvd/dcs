import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({ viewBox: "0 0 16 16", fill: "none", "aria-hidden": true, ...p });
const stroke = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const ArrowUpRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 12 12 4M5.5 4H12v6.5" {...stroke} />
  </svg>
);

export const ArrowRight = (p: P) => (
  <svg {...base(p)}>
    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" {...stroke} />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base(p)}>
    <path d="m3 8.5 3 3 7-7" {...stroke} />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base(p)}>
    <path
      d="M3.2 2.5h2.4l1.1 2.9-1.4 1a7.6 7.6 0 0 0 4.3 4.3l1-1.4 2.9 1.1v2.4a1.2 1.2 0 0 1-1.3 1.2A11.2 11.2 0 0 1 2 3.8a1.2 1.2 0 0 1 1.2-1.3Z"
      {...stroke}
    />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base(p)}>
    <rect x="2" y="3.5" width="12" height="9" rx="1.6" {...stroke} />
    <path d="m2.5 4.5 5.5 4 5.5-4" {...stroke} />
  </svg>
);

export const Pin = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 0 0-9 0C3.5 10 8 14 8 14Z" {...stroke} />
    <circle cx="8" cy="6.5" r="1.5" {...stroke} />
  </svg>
);

export const Play = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 3.5v9l7-4.5-7-4.5Z" fill="currentColor" />
  </svg>
);

export const Youtube = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  </svg>
);

export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.4H7.4v3.2h2.8V22h3.3Z" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
  </svg>
);
