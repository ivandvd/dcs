import type { SVGProps } from "react";

export type IconName =
  | "shield"
  | "zap"
  | "award"
  | "sparkles"
  | "users"
  | "badgeCheck"
  | "eye"
  | "clock"
  | "fileText"
  | "chart"
  | "droplet"
  | "layers"
  | "target"
  | "trendingUp"
  | "coins"
  | "lifebuoy"
  | "graduation"
  | "book"
  | "compass"
  | "camera"
  | "building"
  | "leaf"
  | "cpu"
  | "wind"
  | "gauge"
  | "radio"
  | "battery"
  | "puzzle"
  | "filter"
  | "lock";

const paths: Record<IconName, React.ReactNode> = {
  shield: <path d="M12 3l7 3v5.5c0 4.4-2.9 8.4-7 9.5-4.1-1.1-7-5.1-7-9.5V6l7-3z" />,
  zap: <path d="M13 2.5 4.5 14H11l-1 7.5L19.5 10H13l1-7.5z" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.3 13.6-1.3 7.9 5-2.8 5 2.8-1.3-7.9" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3.5 12.8 8.7 18 10.5l-5.2 1.8L11 17.5l-1.8-5.2L4 10.5l5.2-1.8L11 3.5z" />
      <path d="m18.5 15.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M15.5 5.3a3.2 3.2 0 1 1 0 6.4M17.5 14c2.6.3 4.5 2.4 4.5 5.5" />
    </>
  ),
  badgeCheck: (
    <>
      <path d="m12 2.5 2.3 1.7 2.9-.3.9 2.8 2.5 1.5-1 2.7 1 2.7-2.5 1.5-.9 2.8-2.9-.3L12 21.5l-2.3-1.7-2.9.3-.9-2.8-2.5-1.5 1-2.7-1-2.7 2.5-1.5.9-2.8 2.9.3L12 2.5z" />
      <path d="m8.5 12 2.4 2.4 4.6-4.6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  fileText: (
    <>
      <path d="M7 3h7l5 5v13H7V3z" />
      <path d="M14 3v5h5M9.5 13h5M9.5 17h5" />
    </>
  ),
  chart: <path d="M4 20h16M7 16v-5M12 16V8M17 16v-8" />,
  droplet: <path d="M12 3s6.5 6.8 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 9.8 12 3 12 3z" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" />
    </>
  ),
  trendingUp: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
  coins: (
    <>
      <circle cx="9" cy="9" r="6" />
      <path d="M14.5 10.2A6 6 0 1 1 10.2 14.5" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="m5.6 5.6 3.2 3.2M15.2 15.2l3.2 3.2M5.6 18.4l3.2-3.2M15.2 8.8l3.2-3.2" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 9 10-5 10 5-10 5L2 9z" />
      <path d="M6 11.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.8M22 9v6" />
    </>
  ),
  book: (
    <>
      <path d="M4 4h6a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H4V4z" />
      <path d="M20 4h-6a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H20V4z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V4h9v17M14 9h5v12M3 21h18" />
      <path d="M8 8h2M8 12h2M8 16h2M16.5 13h1M16.5 17h1" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8.5 5.5-13.5 14-14-.5 8.5-5.5 14-14 14z" />
      <path d="m5 19 8-8" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
    </>
  ),
  wind: <path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 16h8a2.5 2.5 0 1 1-2.5 2.5" />,
  gauge: (
    <>
      <path d="M4 18a9 9 0 1 1 16 0" />
      <path d="m12 14 4-5" />
      <circle cx="12" cy="14" r="1.5" />
    </>
  ),
  radio: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 19.1a10 10 0 0 1 0-14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
    </>
  ),
  battery: (
    <>
      <rect x="2.5" y="7" width="16" height="10" rx="2" />
      <path d="M21.5 10v4M6 10.5v3M9.5 10.5v3M13 10.5v3" />
    </>
  ),
  puzzle: (
    <path d="M10 3.5a1.8 1.8 0 0 1 3.6 0V5H18v4.4a1.8 1.8 0 0 0 0 3.6V18h-4.4a1.8 1.8 0 0 0-3.6 0H6v-4.4a1.8 1.8 0 0 1 0-3.6V5h4V3.5z" />
  ),
  filter: <path d="M3 5h18l-7 8v6l-4 2v-8L3 5z" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
};

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function LineIcon({ name, ...p }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      {paths[name]}
    </svg>
  );
}
