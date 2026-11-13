/**
 * Product catalog – data scraped from the client's live catalog (English: incoming/scrape/catalog*.txt|html,
 * Polish: incoming/scrape/pl/catalog*.txt|html, saved by scripts/scrape-catalog-pl.mjs).
 *
 * This file holds the types, the language-independent data (slugs, SKUs, categories, images, 3D models, related items)
 * and the locale-aware getters. The human-readable text lives in catalog.en.ts and catalog.pl.ts.
 * Names, SKUs and spec values are the client's own; only light grammar fixes were applied.
 * No prices: the live site lists every item as "on request" ("na zapytanie").
 */
import { defaultLocale, pick, type Locale, type Localized } from "@/lib/i18n/config";
import { catalogEn } from "./catalog.en";
import { catalogPl } from "./catalog.pl";

/** Stable category keys (used as filter values); the labels are translated, see `getCategories`. */
export type CategoryId = "sets" | "drones" | "accessories" | "chemicals" | "training";

export const categoryIds: CategoryId[] = ["sets", "drones", "accessories", "chemicals", "training"];

export type Category = { id: CategoryId; label: string };

export type SpecRow = { label: string; value: string };
/** `critical` marks the "Critical specs" group: rendered as large rows, the other groups as compact dl rows. */
export type SpecGroup = { title: string; rows: SpecRow[]; critical?: boolean };

export type TierId = "mini" | "pro" | "maxi";

export type ProductSlug =
  | "dcs-x1-mini"
  | "dcs-x1-pro"
  | "dcs-x1-maxi"
  | "dji-matrice-350-rtk"
  | "dji-matrice-400"
  | "front-rotor-guards-dji-matrice-350-rtk"
  | "front-rotor-guards-dji-matrice-400"
  | "battery-tb65-dji-matrice-350-rtk"
  | "battery-tb100-dji-matrice-400"
  | "tank-450l"
  | "tank-60l"
  | "hose-reel-60m"
  | "hose-reel-120m"
  | "nozzle-set"
  | "mostfoam-zero-one-killer-10l"
  | "mostfoam-zero-one-killer-25l"
  | "sts-01-training"
  | "sts-02-training";

export type Product = {
  slug: ProductSlug;
  sku?: string;
  name: string;
  /** stable key, used by the filters */
  category: CategoryId;
  /** translated category name, shown on chips and eyebrows */
  categoryLabel: string;
  /** one or two sentences – card text and detail-page lede */
  short: string;
  /** description paragraphs */
  description: string[];
  /** titled bullet lists shown after the paragraphs */
  lists?: { title: string; items: string[] }[];
  /** application chips */
  highlights?: string[];
  /** the `critical` group is rendered as large rows, the rest as compact dl rows */
  specGroups: SpecGroup[];
  /** public paths – the first one is the main image */
  images: string[];
  alt: string;
  tier?: TierId;
  /** hand-picked related slugs; topped up with same-category items */
  related?: ProductSlug[];
  /** interactive glTF model (public path) */
  model?: { src: string; poster?: string; size: string };
};

/** The human-readable part of a product – one per language (catalog.en.ts, catalog.pl.ts). */
export type ProductText = Pick<Product, "name" | "short" | "description" | "lists" | "highlights" | "specGroups" | "alt">;

export type TierRow = { label: string; value: string | boolean };

export type Tier = {
  id: TierId;
  name: string;
  productSlug: ProductSlug;
  badge?: string;
  image: string;
  alt: string;
  /** the short rows shown on the catalog landing page; `true` = included, `false` = not included */
  rows: TierRow[];
};

export type TierText = Pick<Tier, "badge" | "alt" | "rows">;

export type ShowcaseId = "m350" | "m400" | "lance";

/** The models of the interactive 3D section on the catalog page. */
export type ShowcaseModel = {
  id: ShowcaseId;
  kicker: string;
  title: string;
  body: string;
  src: string;
  poster?: string;
  size: string;
};

export type ShowcaseText = Pick<ShowcaseModel, "kicker" | "title" | "body">;

type Heading = { eyebrow: string; title: string; lede: string };

/** Headlines and paragraphs of the catalog pages and sections (short UI labels are in the dictionary, `t.catalog`). */
export type CatalogCopy = {
  /** catalog landing page */
  title: string;
  hero: { eyebrow: string; title: string; lede: string; alt: string };
  intro: { eyebrow: string; title: string; body: string[]; checklist: string[] };
  showcase: Heading;
  tiers: Heading;
  products: Heading;
  configurator: Heading;
  contact: Heading & { cta: string };
  /** product detail pages */
  product: {
    /** text of the dark "Configuration on request" card */
    configure: string;
    compare: Heading;
    deployment: Heading & { steps: { title: string; body: string }[] };
    related: { eyebrow: string; title: string };
    contact: Heading & { cta: string };
  };
};

/** Everything translatable in the catalog – the shape of catalog.en.ts and catalog.pl.ts. */
export type CatalogText = {
  categories: Record<CategoryId, string>;
  products: Record<ProductSlug, ProductText>;
  tiers: Record<TierId, TierText>;
  showcase: Record<ShowcaseId, ShowcaseText>;
  copy: CatalogCopy;
};

// ---------------------------------------------------------------- shared, language-independent data

type ProductBase = Pick<Product, "slug" | "sku" | "category" | "tier" | "model" | "images" | "related">;

/** Catalog order. */
const productBase: ProductBase[] = [
  // ------------------------------------------------ Sets / Stations
  {
    slug: "dcs-x1-mini",
    sku: "dcs-x1-mini",
    category: "sets",
    tier: "mini",
    model: { src: "/models/aerocleaning-lance.glb", poster: "/models/posters/aerocleaning-lance.jpg", size: "0.5 MB" },
    images: [
      "/images/catalog/dcs-x1-mini/1.jpg",
      "/images/catalog/dcs-x1-mini/2.png",
      "/images/catalog/dcs-x1-mini/3.png",
      "/images/catalog/dcs-x1-mini/4.png",
      "/images/catalog/dcs-x1-mini/5.png",
      "/images/catalog/dcs-x1-mini/6.png",
      "/images/catalog/dcs-x1-mini/7.jpg",
    ],
    related: ["dcs-x1-pro", "dcs-x1-maxi", "dji-matrice-400"],
  },
  {
    slug: "dcs-x1-pro",
    sku: "DCS-DRONE-X1-PRO",
    category: "sets",
    tier: "pro",
    model: { src: "/models/matrice-400-dcs.glb", poster: "/models/posters/matrice-400-dcs.jpg", size: "12 MB" },
    images: [
      "/images/catalog/dcs-x1-pro/1.png",
      "/images/catalog/dcs-x1-pro/2.png",
      "/images/catalog/dcs-x1-pro/3.jpg",
      "/images/catalog/dcs-x1-pro/4.png",
      "/images/catalog/dcs-x1-pro/5.png",
      "/images/catalog/dcs-x1-pro/6.png",
      "/images/catalog/dcs-x1-pro/7.png",
      "/images/catalog/dcs-x1-pro/8.png",
      "/images/catalog/dcs-x1-pro/9.png",
      "/images/catalog/dcs-x1-pro/10.png",
    ],
    related: ["dcs-x1-maxi", "dcs-x1-mini", "dji-matrice-400"],
  },
  {
    slug: "dcs-x1-maxi",
    sku: "DCS-DRONE-X1-MAXI",
    category: "sets",
    tier: "maxi",
    model: { src: "/models/matrice-350-dcs.glb", poster: "/models/posters/matrice-350-dcs.jpg", size: "10 MB" },
    images: [
      "/images/catalog/dcs-x1-maxi/1.jpg",
      "/images/catalog/dcs-x1-maxi/2.png",
      "/images/catalog/dcs-x1-maxi/3.jpg",
      "/images/catalog/dcs-x1-maxi/4.png",
      "/images/catalog/dcs-x1-maxi/5.png",
      "/images/catalog/dcs-x1-maxi/6.png",
      "/images/catalog/dcs-x1-maxi/7.png",
      "/images/catalog/dcs-x1-maxi/8.png",
      "/images/catalog/dcs-x1-maxi/9.jpg",
    ],
    related: ["dcs-x1-pro", "dcs-x1-mini", "dji-matrice-400"],
  },

  // ------------------------------------------------ Drones
  {
    slug: "dji-matrice-350-rtk",
    sku: "DJI-Matrice-350-RTK",
    category: "drones",
    images: ["/images/catalog/dji-matrice-350-rtk/1.jpg"],
    related: ["battery-tb65-dji-matrice-350-rtk", "front-rotor-guards-dji-matrice-350-rtk", "dcs-x1-mini"],
  },
  {
    slug: "dji-matrice-400",
    sku: "DJI-Matrice-400",
    category: "drones",
    images: [
      "/images/catalog/dji-matrice-400/1.jpg",
      "/images/catalog/dji-matrice-400/2.jpg",
      "/images/catalog/dji-matrice-400/3.jpg",
      "/images/catalog/dji-matrice-400/4.jpg",
      "/images/catalog/dji-matrice-400/5.jpg",
    ],
    related: ["battery-tb100-dji-matrice-400", "front-rotor-guards-dji-matrice-400", "dcs-x1-pro"],
  },

  // ------------------------------------------------ Accessories
  {
    slug: "front-rotor-guards-dji-matrice-350-rtk",
    sku: "Oslony_dcs_dji_350_rtk",
    category: "accessories",
    images: [
      "/images/catalog/front-rotor-guards-dji-matrice-350-rtk/1.jpg",
      "/images/catalog/front-rotor-guards-dji-matrice-350-rtk/2.jpg",
    ],
    related: ["dji-matrice-350-rtk", "battery-tb65-dji-matrice-350-rtk", "front-rotor-guards-dji-matrice-400"],
  },
  {
    slug: "front-rotor-guards-dji-matrice-400",
    sku: "Oslony_dcs_dji_400",
    category: "accessories",
    images: [
      "/images/catalog/front-rotor-guards-dji-matrice-400/1.jpg",
      "/images/catalog/front-rotor-guards-dji-matrice-400/2.png",
    ],
    related: ["dji-matrice-400", "battery-tb100-dji-matrice-400", "front-rotor-guards-dji-matrice-350-rtk"],
  },
  {
    slug: "battery-tb65-dji-matrice-350-rtk",
    sku: "DCS-BATTERY-350-RTK",
    category: "accessories",
    images: ["/images/catalog/battery-tb65-dji-matrice-350-rtk/1.jpg"],
    related: ["dji-matrice-350-rtk", "front-rotor-guards-dji-matrice-350-rtk", "battery-tb100-dji-matrice-400"],
  },
  {
    slug: "battery-tb100-dji-matrice-400",
    sku: "DCS-BATTERY-PRO",
    category: "accessories",
    images: ["/images/catalog/battery-tb100-dji-matrice-400/1.jpg"],
    related: ["dji-matrice-400", "front-rotor-guards-dji-matrice-400", "battery-tb65-dji-matrice-350-rtk"],
  },
  {
    slug: "tank-450l",
    sku: "Zbiornik 450L",
    category: "accessories",
    images: ["/images/catalog/tank-450l/1.png"],
    related: ["tank-60l", "hose-reel-60m", "dcs-x1-pro"],
  },
  {
    slug: "tank-60l",
    sku: "DCS-TANK-60L",
    category: "accessories",
    images: ["/images/catalog/tank-60l/1.png"],
    related: ["tank-450l", "nozzle-set", "dcs-x1-pro"],
  },
  {
    slug: "hose-reel-60m",
    sku: "Zwijak-60m",
    category: "accessories",
    images: ["/images/catalog/hose-reel-60m/1.png"],
    related: ["hose-reel-120m", "nozzle-set", "dcs-x1-mini"],
  },
  {
    slug: "hose-reel-120m",
    sku: "Zwijak-120m",
    category: "accessories",
    images: ["/images/catalog/hose-reel-120m/1.png"],
    related: ["hose-reel-60m", "tank-450l", "dcs-x1-pro"],
  },
  {
    slug: "nozzle-set",
    sku: "DCS-NOZZLE-SET",
    category: "accessories",
    images: [
      "/images/catalog/nozzle-set/1.png",
      "/images/catalog/nozzle-set/2.png",
      "/images/catalog/nozzle-set/3.png",
      "/images/catalog/nozzle-set/4.png",
    ],
    related: ["hose-reel-60m", "dcs-x1-mini", "mostfoam-zero-one-killer-10l"],
  },

  // ------------------------------------------------ Chemicals
  {
    slug: "mostfoam-zero-one-killer-10l",
    sku: "DCS-MOSTFOAM-ZERO-ONE-KILLER-10L",
    category: "chemicals",
    images: ["/images/catalog/mostfoam-zero-one-killer-10l/1.jpg"],
    related: ["mostfoam-zero-one-killer-25l", "nozzle-set", "dcs-x1-pro"],
  },
  {
    slug: "mostfoam-zero-one-killer-25l",
    sku: "DCS MOSTOFOAM ZERO ONE KILLER 25L",
    category: "chemicals",
    images: ["/images/catalog/mostfoam-zero-one-killer-25l/1.jpg"],
    related: ["mostfoam-zero-one-killer-10l", "nozzle-set", "dcs-x1-maxi"],
  },

  // ------------------------------------------------ Training
  {
    slug: "sts-01-training",
    sku: "DCS-TRAINING-STS-01",
    category: "training",
    images: ["/images/catalog/sts-01-training/1.png"],
    related: ["sts-02-training", "dji-matrice-350-rtk", "dcs-x1-mini"],
  },
  {
    slug: "sts-02-training",
    sku: "Szkolenie STS-02",
    category: "training",
    images: ["/images/catalog/sts-02-training/1.png"],
    related: ["sts-01-training", "dji-matrice-400", "dcs-x1-pro"],
  },
];

const tierBase: Pick<Tier, "id" | "name" | "productSlug" | "image">[] = [
  { id: "mini", name: "DCS X1 MINI", productSlug: "dcs-x1-mini", image: "/images/catalog/dcs-x1-mini/1.jpg" },
  { id: "pro", name: "DCS X1 PRO", productSlug: "dcs-x1-pro", image: "/images/catalog/dcs-x1-pro/1.png" },
  { id: "maxi", name: "DCS X1 MAXI", productSlug: "dcs-x1-maxi", image: "/images/catalog/dcs-x1-maxi/1.jpg" },
];

const showcaseBase: Pick<ShowcaseModel, "id" | "src" | "poster" | "size">[] = [
  { id: "m350", src: "/models/matrice-350-dcs.glb", poster: "/models/posters/matrice-350-dcs.jpg", size: "10 MB" },
  { id: "m400", src: "/models/matrice-400-dcs.glb", poster: "/models/posters/matrice-400-dcs.jpg", size: "12 MB" },
  { id: "lance", src: "/models/aerocleaning-lance.glb", poster: "/models/posters/aerocleaning-lance.jpg", size: "0.5 MB" },
];

/**
 * The client's previous product slugs (dcs-drone.com/katalog/<slug>) → ours. The proxy sends /katalog/<old> to
 * /pl/catalog/<old>, and the product page redirects every key of this map to `/${locale}/catalog/${value}`.
 */
export const legacySlugs: Record<string, ProductSlug> = {
  "akumulator-pro-tb100-dji-matrice-400": "battery-tb100-dji-matrice-400",
  "akumulator-tb65-do-dji-matrice-350-rtk": "battery-tb65-dji-matrice-350-rtk",
  "dcs-mostfoam-zero-one-killer-10l": "mostfoam-zero-one-killer-10l",
  "dcs-mostofoam-zero-one-killer-25l": "mostfoam-zero-one-killer-25l",
  "dcs-x1-maxi": "dcs-x1-maxi",
  "dcs-x1-mini": "dcs-x1-mini",
  "dcs-x1-pro": "dcs-x1-pro",
  "dji-matrice-350-rtk": "dji-matrice-350-rtk",
  "dji-matrice-400": "dji-matrice-400",
  "oslony-przednich-rotorow-dji-350": "front-rotor-guards-dji-matrice-350-rtk",
  "oslony-przednich-rotorow-dji-400": "front-rotor-guards-dji-matrice-400",
  "szkolenie-sts-01": "sts-01-training",
  "szkolenie-sts-02": "sts-02-training",
  "zbiornik-450l": "tank-450l",
  "zbiornik-60l": "tank-60l",
  "zestaw-dysz": "nozzle-set",
  "zwijak-z-wezem-120m-zwijak-120m": "hose-reel-120m",
  "zwijak-z-wezem-60m": "hose-reel-60m",
};

// ---------------------------------------------------------------- locale-aware getters

const text: Localized<CatalogText> = { en: catalogEn, pl: catalogPl };

/** Builds the value once per locale, so client components get a stable reference. */
function perLocale<T>(build: (t: CatalogText) => T): (locale?: Locale) => T {
  const cache: Partial<Record<Locale, T>> = {};
  return (locale = defaultLocale) => (cache[locale] ??= build(pick(text, locale)));
}

/** All products in catalog order, with the text of `locale`. */
export const getProducts = perLocale<Product[]>((t) =>
  productBase.map((b) => ({ ...b, ...t.products[b.slug], categoryLabel: t.categories[b.category] })),
);

export const getProduct = (slug: string, locale: Locale = defaultLocale): Product | undefined =>
  getProducts(locale).find((p) => p.slug === slug);

/** Category filters in display order. */
export const getCategories = perLocale<Category[]>((t) => categoryIds.map((id) => ({ id, label: t.categories[id] })));

/** The three X1 system tiers. */
export const getTiers = perLocale<Tier[]>((t) => tierBase.map((b) => ({ ...b, ...t.tiers[b.id] })));

export const getTier = (id: TierId, locale: Locale = defaultLocale) => getTiers(locale).find((t) => t.id === id);

/** Models of the interactive 3D section. */
export const getShowcaseModels = perLocale<ShowcaseModel[]>((t) => showcaseBase.map((b) => ({ ...b, ...t.showcase[b.id] })));

/** Headlines and paragraphs of the catalog landing page and the product pages. */
export const getCatalogCopy = perLocale<CatalogCopy>((t) => t.copy);

/** Hand-picked related items first, then the same category, then the X1 systems – `count` in total. */
export function relatedProducts(product: Product, locale: Locale = defaultLocale, count = 3): Product[] {
  const list = getProducts(locale);
  const picked: Product[] = [];
  const add = (p?: Product) => {
    if (p && p.slug !== product.slug && !picked.includes(p)) picked.push(p);
  };
  product.related?.forEach((slug) => add(list.find((p) => p.slug === slug)));
  list.filter((p) => p.category === product.category).forEach(add);
  list.filter((p) => p.tier).forEach(add);
  return picked.slice(0, count);
}

/** English lists, kept for callers without a locale (e.g. the sitemap – slugs, images and SKUs are shared). */
export const products: Product[] = getProducts("en");
export const tiers: Tier[] = getTiers("en");
export const categories: Category[] = getCategories("en");
