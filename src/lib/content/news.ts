/**
 * News articles in both languages.
 * English copy: incoming/scrape/news.txt and news--trade-fair.txt; Polish copy: incoming/scrape/pl/news.txt and
 * news--targi.txt (the client's own text, light fixes only). Gallery captions are the client's photo captions in the
 * original order. Slugs, dates, images and the gallery layout are shared; only human-readable text is translated.
 */
import { getDictionary, pick, type Locale, type Localized } from "@/lib/i18n";

export type GalleryImage = {
  src: string;
  alt: string;
  /** spans two grid columns for rhythm */
  span?: "wide";
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  /** teaser shown on the index and as the article lede */
  excerpt: string;
  /** opening paragraph(s) of the article */
  intro: string[];
  cover: string;
  coverAlt: string;
  photoCount: number;
  gallery: GalleryImage[];
};

/** Copy of the news index page (hero + metadata). */
export type NewsPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  lede: string;
  heroAlt: string;
};

type ArticleSlug = "trade-fair-2026-warsaw";

/** Language-independent part of an article. */
type ArticleBase = {
  slug: ArticleSlug;
  date: string;
  cover: string;
  /** folder with 01.jpg, 02.jpg, … */
  dir: string;
  /** 1-based photo numbers that span two columns (keeps every group of six cells full on 2- and 3-column grids) */
  wide: Set<number>;
};

/** Translated part of an article; `captions` are the gallery alt texts in photo order. */
type ArticleText = Pick<Article, "title" | "category" | "excerpt" | "intro" | "coverAlt"> & { captions: string[] };

const base: ArticleBase[] = [
  {
    slug: "trade-fair-2026-warsaw",
    date: "2026-03-03",
    cover: "/images/heroes/news-trade-fair.jpg",
    dir: "/images/news/trade-fair-2026-warsaw",
    wide: new Set([1, 18, 29, 35, 40]),
  },
];

const text: Localized<Record<ArticleSlug, ArticleText>> = {
  en: {
    "trade-fair-2026-warsaw": {
      title: "Trade Fair Report 2026 Warsaw",
      category: "Events",
      excerpt:
        "Watch our report from the trade fair in Warsaw. We presented the latest solutions for drone cleaning and disinfection.",
      intro: [
        "Check out our photo gallery from the trade fair in Warsaw. We presented the latest solutions for drone cleaning and disinfection, including our flagship product DCS X1 PRO and the complete ground station.",
      ],
      coverAlt: "DCS cleaning drone with the DCS logo on the stand at the Warsaw trade fair",
      captions: [
        "DCS X1 PRO drone at trade show booth",
        "DCS drone with cleaning system",
        "DCS drone with extended brush system",
        "DCS drone in action at trade fair",
        "Close-up of DCS drone body",
        "Technical details of DCS drone",
        "DCS ground station with hose reels",
        "Nozzles for cleaning system",
        "Spray nozzle with mounting",
        "Nozzle with brass connector",
        "Cable guide element",
        "Drone arm with propeller",
        "DCS drone with trade fair red graphics background",
        "6-rotor DCS drone top view",
        "DCS drone with logo and spray module",
        "3D printed mount detail with DCS logo",
        "Color-coded spray nozzle set",
        "Drone central unit with battery pack",
        "Spray nozzle with blue fitting",
        "Drone arm with propeller and spray module",
        "Spray connector with brass quick-connect",
        "Nozzle with red tip on drone arm",
        "DCS drone body with sticker and module",
        "DCS ground station with hose reels",
        "Mobile DCS unit with drone on trailer roof",
        "Spray nozzle with brass quick-mount connector",
        "DCS drone bottom view with spray module",
        "Drone arm with propeller and mount",
        "DCS Global AeroCleaning Solutions ground station",
        "DCS drone with brass spray tube",
        "Mobile DCS unit with drone and ground station",
        "DCS operator helmet with logo and adjustment dial",
        "Drone arm with 3D printed mount and DCS logo",
        "DCS drone bottom view with spray module",
        "DCS X1P DCS X1 PRO marketing materials",
        "Drone propeller with yellow 3D printed mount",
        "DCS drone from above with protective frame and logo",
        "DCS staff demonstrating hose reel equipment",
        "Spray nozzle with pink tip and brass fitting",
        "DCS Global AeroCleaning Solutions ground station",
        "Drone central unit with battery and control panel",
        "Drone motor with propeller and yellow frame",
        "Drone arm with propeller and guide mount",
      ],
    },
  },
  pl: {
    "trade-fair-2026-warsaw": {
      title: "Relacja z Targów 2026 Warszawa",
      category: "Wydarzenia",
      excerpt:
        "Zapraszamy do obejrzenia relacji z naszego udziału w targach w Warszawie. Prezentowaliśmy najnowsze rozwiązania do mycia i dezynfekcji dronem.",
      intro: [
        "Zapraszamy do obejrzenia galerii zdjęć z naszego udziału w targach w Warszawie. Prezentowaliśmy najnowsze rozwiązania do mycia i dezynfekcji dronem, w tym nasz flagowy produkt DCS X1 PRO oraz kompletną stację naziemną.",
      ],
      coverAlt: "Dron czyszczący DCS z logo DCS na stoisku podczas targów w Warszawie",
      // The client's Polish captions (dcs-drone.com/aktualnosci/targi). The Polish gallery has 40 photos; the three
      // that only appear in the English gallery (36–38) are translated from the English captions.
      captions: [
        "Dron DCS X1 PRO na stoisku targowym",
        "Dron DCS z systemem czyszczenia",
        "Dron DCS z rozłożonym systemem szczotek",
        "Dron DCS w akcji na targach",
        "Zbliżenie na korpus drona DCS",
        "Detale techniczne drona DCS",
        "Stacja naziemna DCS z wężami",
        "Dysze do systemu czyszczenia",
        "Dysza natryskowa z mocowaniem",
        "Dysza z mosiężnym złączem",
        "Element prowadzący kable",
        "Ramię drona ze śmigłem",
        "Dron DCS na tle czerwonej grafiki targowej",
        "Dron 6-rotorowy DCS – widok z góry",
        "Dron DCS z logo i modułem natryskowym",
        "Detal mocowania drukowanego 3D z logo DCS",
        "Zestaw kolorowych dysz natryskowych",
        "Centralna jednostka drona z akumulatorem",
        "Dysza natryskowa z niebieskim złączem",
        "Ramię drona ze śmigłem i modułem natryskowym",
        "Złącze natryskowe z mosiężnym szybkozłączem",
        "Dysza z czerwoną końcówką na ramieniu drona",
        "Korpus drona DCS z naklejką i modułem",
        "Stacja naziemna DCS z bębnami wężowymi",
        "Mobilna jednostka DCS z dronem na dachu przyczepy",
        "Dysza natryskowa z mosiężnym złączem szybkiego montażu",
        "Dron DCS – widok od dołu z modułem natryskowym",
        "Ramię drona ze śmigłem i mocowaniem",
        "Stacja naziemna DCS Global AeroCleaning Solutions",
        "Dron DCS z mosiężną rurą natryskową",
        "Mobilna jednostka DCS z dronem i stacją naziemną",
        "Kask operatora DCS z logo i pokrętłem regulacji",
        "Ramię drona z mocowaniem 3D i logo DCS",
        "Dron DCS – widok od dołu z modułem natryskowym",
        "Materiały marketingowe DCS X1P DCS X1 PRO",
        "Śmigło drona z żółtym mocowaniem drukowanym 3D",
        "Dron DCS z góry z ramą ochronną i logo",
        "Pracownicy DCS prezentujący zwijak z wężem",
        "Dysza natryskowa z różową końcówką i mosiężnym złączem",
        "Stacja naziemna DCS Global AeroCleaning Solutions",
        "Jednostka centralna drona z akumulatorem i panelem sterowania",
        "Silnik drona ze śmigłem i żółtą ramą",
        "Ramię drona ze śmigłem i mocowaniem prowadzącym",
      ],
    },
  },
};

function build(b: ArticleBase, t: ArticleText): Article {
  const gallery: GalleryImage[] = t.captions.map((alt, i) => ({
    src: `${b.dir}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt,
    ...(b.wide.has(i + 1) ? { span: "wide" as const } : {}),
  }));
  return {
    slug: b.slug,
    date: b.date,
    cover: b.cover,
    title: t.title,
    category: t.category,
    excerpt: t.excerpt,
    intro: t.intro,
    coverAlt: t.coverAlt,
    photoCount: gallery.length,
    gallery,
  };
}

const buildAll = (locale: Locale): Article[] =>
  base.map((b) => build(b, text[locale][b.slug])).sort((a, b) => b.date.localeCompare(a.date));

const byLocale: Localized<Article[]> = { en: buildAll("en"), pl: buildAll("pl") };

/** English list (newest first). Slugs, dates and images are shared with Polish – used by the sitemap. */
export const articles: Article[] = byLocale.en;

/** Articles in the given language, newest first. */
export function getArticles(locale: Locale): Article[] {
  return pick(byLocale, locale);
}

export function getArticle(slug: string, locale: Locale): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

const page: Localized<NewsPageCopy> = {
  en: {
    metaTitle: "News & Updates",
    metaDescription: "Stay up to date with the latest information about DCS, drone technology and industry trends.",
    eyebrow: "Blog",
    title: "News & updates.",
    lede: "Stay up to date with the latest information about DCS, drone technology and industry trends.",
    heroAlt: "Close-up of a DCS cleaning drone on display at a trade fair",
  },
  pl: {
    metaTitle: "Aktualności i nowości",
    metaDescription: "Bądź na bieżąco z najnowszymi informacjami o firmie DCS, technologii dronów i trendach w branży.",
    eyebrow: "Blog",
    title: "Aktualności i nowości.",
    lede: "Bądź na bieżąco z najnowszymi informacjami o firmie DCS, technologii dronów i trendach w branży.",
    heroAlt: "Zbliżenie drona czyszczącego DCS prezentowanego na targach",
  },
};

export const getNewsPageCopy = (locale: Locale): NewsPageCopy => pick(page, locale);

const INTL_LOCALE: Record<Locale, string> = { en: "en-GB", pl: "pl-PL" };

/** "2026-03-03" -> "3 March 2026" / "3 marca 2026" */
export function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(INTL_LOCALE[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "43 photos" / "43 zdjęcia" – Polish plural forms: 1 zdjęcie, 2–4 zdjęcia, 5+ zdjęć. */
export function formatPhotoCount(count: number, locale: Locale): string {
  const forms = getDictionary(locale).news.photos;
  const rule = new Intl.PluralRules(INTL_LOCALE[locale]).select(count);
  const word = (forms as Record<string, string | undefined>)[rule] ?? forms.other;
  return `${count} ${word}`;
}
