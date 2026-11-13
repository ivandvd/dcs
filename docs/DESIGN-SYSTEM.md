# DCS website – design system & conventions

Next.js 16 (App Router, Turbopack) · React 19.3 · Tailwind v4 · Motion (`motion/react`) · GSAP + ScrollTrigger + SplitText · Lenis.
Dev server: `pnpm dev` → http://localhost:5200 (already running; Turbopack hot-reloads). Type check: `pnpm typecheck`.

## Look & feel

- Premium, calm, editorial. Light pages on `bg-paper` (#f3f5ee) with white cards; dark "sheet" sections in `bg-ink` (#0f1218) with
  `rounded-[40px]`; the brand accents are **lime** `#c0ff72` (CTAs, active dots) and **blue** `#5170ff` (icons, small accents, one big CTA card).
- Type: Onest (`font-sans`) for everything; headings are **font-light** with `tracking-[-0.03em]`; small labels use `font-mono` uppercase
  (`eyebrow` utility). Never bold headings.
- Radii: cards `rounded-[24px]`/`rounded-[28px]`, sections/sheets `rounded-[40px]`, pills `rounded-full`.
- Section rhythm: `px-5 sm:px-8 lg:px-12`, `py-24 lg:py-36`, inner `mx-auto max-w-[1320px]`.
- Every page is wrapped in `<PageShell>` (view transitions) and starts with `<PageHero>` (inset rounded media card with the nav over it).
- Copy: use the client's own copy from `incoming/scrape/*.txt` (light grammar fixes OK). **Never invent numbers, certifications, clients or claims.**
- Images: `next/image` with `fill` + `sizes` inside a positioned container, or explicit width/height. Put web-ready images in `public/images/<area>/`.
  Originals live in `incoming/original-site/` (catalog product photos in `incoming/original-site/catalog/`). Resize big originals (max ~1600px) with Python PIL.
- Files containing non-ASCII characters (–, ², ’, Polish letters) must be written with the Write tool, not Bash heredocs.

## Tokens (globals.css `@theme`)

Colors: `ink`, `ink-2`, `ink-3` (muted text), `paper`, `paper-2`, `mist` (pale blue), `lime`, `lime-2`, `blue`, `blue-2`.
Fonts: `font-sans`, `font-mono`. Utility `eyebrow` = mono 12px uppercase tracking, muted. Animation utility `animate-marquee`.

## Components

Layout / page

- `PageShell` (`@/components/site/PageShell`): wrap page content. `<PageShell><main>…</main></PageShell>`.
- `PageHero` (`@/components/site/PageHero`): `{ eyebrow, title, lede?, image, alt, active? ("/catalog" etc. – nav item to highlight), actions?: ReactNode (Buttons), aside?: ReactNode (e.g. <StatChips/>), morphName?, size?: "md" | "lg" }`. Hero images: `public/images/heroes/*.jpg` (1920×1100).
- `LightHeader` (`@/components/site/LightHeader`): for pages WITHOUT a photo hero (legal pages, product detail pages). Light background,
  ink nav. `{ active?, eyebrow?, title, lede?, breadcrumb?: ReactNode, children?: ReactNode }`. Use either PageHero or LightHeader – every page
  needs exactly one of them because they render the navigation.
- `SectionHeader` (`@/components/site/SectionHeader`): `{ eyebrow, title, lede?, tone?: "light"|"dark", align?: "left"|"center", size?: "sm"|"md"|"lg" }` – animated heading block.
- `Footer`, `FloatingNav`, `CookieBanner` are already in the root layout – do not add them to pages.

Motion primitives (`@/components/motion/*`)

- `Reveal` `{ delay?, y?, amount?, as?: "div"|"section"|"article"|"li"|"ul"|"ol"|"dl"|"p"|"span", className? }` – fade/rise in view.
- `Stagger` + `Item` – parent/children stagger (same `as` options). `EASE` export = `[0.16, 1, 0.3, 1]`.
- `TextReveal` `{ as?, delay?, immediate?, className }` – line-mask heading reveal (text children only).
- `ScrubWords` `{ text, as?, className }` – words brighten on scroll (statement paragraphs).
- `Parallax` `{ speed?, className }` – wrap a `fill` Image.
- `Marquee` `{ duration?, reverse? }`, `Magnetic`.

UI (`@/components/ui/*`)

- `Button` `{ href?, variant?: "lime"|"white"|"ink"|"ghost", size?: "sm"|"md"|"lg", icon?: "arrow"|"arrow-circle", className? }` – renders Link when `href` given.
- `Icons`: `ArrowUpRight, ArrowRight, Check, Phone, Mail, Pin, Play, Youtube, Facebook, Instagram` (16px stroke icons).
- `LineIcon` `{ name: IconName }` – 24px line icons: shield, zap, award, sparkles, users, badgeCheck, eye, clock, fileText, chart, droplet,
  layers, target, trendingUp, coins, lifebuoy, graduation, book, compass, camera, building, leaf, cpu, wind, gauge, radio, battery, puzzle, filter, lock.
- `CountUp` `{ to, from?, duration?, delay?, decimals? }`.

Page blocks (`@/components/pages/*`)

- `FeatureGrid` `{ eyebrow, title, lede?, items: {icon, title, body}[], columns?: 2|3|4, tone?: "light"|"dark" }` – icon cards.
- `NumberedList` `{ eyebrow, title, lede?, items: {title, body}[] }` – sticky header left, numbered rows right.
- `ProcessSteps` `{ eyebrow, title, lede?, steps: {title, body}[], tone? }` – 3 or 4 steps.
- `IntroBlock` `{ eyebrow, title, body: string[], checklist?, image?: {src, alt}, aside?, reverse? }` – two-column statement.
- `Checklist` `{ items, tone?: "light"|"dark"|"lime", columns?: 1|2 }`.
- `StatChips` `{ stats: {label, value}[] }` – stat tiles. Only the home hero shows stats (client decision); do not add them to inner-page heroes.
- `ContactStrip` `{ eyebrow, title, lede, cta: {label, href}, person?: Contact }` – lime closing band. The right side always lists the
  "Office" group (phone + e-mail, opening hours) and the "Sales department" group (Mateusz, Mariusz) from `src/lib/site.ts`; `person`
  (e.g. `contacts.examiner`) adds its own group on top.
- Hover rule: every element with `hover:`/`group-hover:` classes carries a transition (`transition-colors duration-300`, movement
  `transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`). Bare `transition-*` utilities default to 300ms expo-out (globals.css).
- `Programs`, `Audience`, `Requirements` – training/franchise specific.

Patterns

- Dark sheet section: `relative z-10 -mt-8 rounded-[40px] bg-ink text-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36`.
- Card: `rounded-[24px] border border-ink/8 bg-white p-7`. Muted text: `text-ink-3`. Dark muted: `text-white/65`.
- Tags/pills: `rounded-full bg-lime px-3.5 py-1.5 text-[12.5px] font-medium text-ink` or `border border-white/15 bg-white/10 … backdrop-blur-xl`.
- Lists of specs: `dl` rows with mono `dt` and light 22–26px `dd` (see `Requirements`).
- Page metadata: `generateMetadata({ params })` with `const locale = await localeFrom(params)` and localized title/description plus
  `alternates: langAlternates("/about", locale)` (title template adds the brand suffix). See docs/I18N.md.
- Dynamic routes (Next 16): `params` is a Promise – `const { slug } = await params;` plus `generateStaticParams()` returning only `{ slug }`
  (the `[locale]` layout provides the locales).
- Links: always `import { Link } from "@/components/ui/Link"` (adds the locale prefix); never `next/link` directly. Internationalisation conventions: see docs/I18N.md. Internal hrefs: `/about`, `/technology`, `/solutions`, `/catalog`, `/catalog/[slug]`, `/contact`,
  `/services/{cleaning|disinfection|inspection|training|franchise}`, `/news`, `/news/[slug]`, `/career`, `/privacy`, `/terms`.

## Internationalisation

Routes live under `src/app/[locale]/` (`/en/...`, `/pl/...`); `src/proxy.ts` redirects unprefixed URLs and the old Polish paths. UI strings:
`src/lib/i18n/dictionaries/{en,pl}.ts` + `areas/*.ts` (`useT()` in client components, `getDictionary(locale)` on the server). Page copy and
data: `Localized<T>` content modules in `src/lib/content/`. Full conventions in docs/I18N.md.

## Do not touch (unless the task says so)

`src/app/[locale]/layout.tsx`, `src/app/globals.css`, `src/proxy.ts`, `src/lib/site.ts`, `src/components/site/*`, `src/components/motion/*`,
`src/components/ui/*` (add new files under `src/components/<area>/` instead). Do not run Playwright/browser tools, git, or
`pnpm build`; `pnpm typecheck` is fine.
