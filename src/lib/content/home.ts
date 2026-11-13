import { type Locale, type Localized, pick } from "@/lib/i18n/config";

/**
 * Home page copy (headlines, paragraphs, lists) in English and Polish: `getHomeContent(locale)`.
 * Short UI labels of the home sections (buttons, stat labels, alt texts) live in the dictionary: `t.home`.
 */

/** Eyebrow, heading and lede of a home section (rendered by SectionHeader). */
export type SectionCopy = { eyebrow: string; title: string; lede: string };

export type Pillar = {
  num: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
};

export type Benefit = { title: string; body: string };

export type Facility = {
  kicker: string;
  title: string;
  body: string;
  chip: string;
  image: string;
  alt: string;
};

/** One row of the "traditional access vs. DCS AeroCleaning" table, using claims from the client's own site. */
export type ComparisonRow = { label: string; traditional: string; dcs: string };

export type HomeContent = {
  /**
   * Exactly three lines, each animated in on its own. Keep every line no wider than "Drone Cleaning":
   * the h1 is max 12ch wide and 44px on phones, so a longer line wraps into a fourth line.
   */
  hero: { lines: [string, string, string]; lede: string };
  ticker: string[];
  intro: { statement: string; body: string; points: { n: string; label: string; text: string }[] };
  pillars: SectionCopy & { items: Pillar[] };
  whyDrone: SectionCopy & { clip: string; comparison: ComparisonRow[]; footnote: string; benefits: Benefit[] };
  services: SectionCopy;
  facilities: SectionCopy & { items: Facility[] };
  statement: { eyebrow: string; text: string };
  startBusiness: { eyebrow: string; title: string; body: string; points: string[] };
};

type PillarId = "safety" | "control" | "predictability";
type FacilityId = "buildings" | "public" | "industrial" | "special";

/** Language-independent parts, in display order (only human-readable text is translated). */
const pillarBase: { id: PillarId; num: string; image: string }[] = [
  { id: "safety", num: "01", image: "/images/pillars/safety.jpg" },
  { id: "control", num: "02", image: "/images/pillars/control.jpg" },
  { id: "predictability", num: "03", image: "/images/pillars/predictability.jpg" },
];

const facilityBase: { id: FacilityId; image: string }[] = [
  { id: "buildings", image: "/images/facilities/office-towers.jpg" },
  { id: "public", image: "/images/facilities/public-campus.jpg" },
  { id: "industrial", image: "/images/facilities/industrial-site.jpg" },
  { id: "special", image: "/images/facilities/pv-and-wind.jpg" },
];

type HomeText = Omit<HomeContent, "pillars" | "facilities"> & {
  pillars: SectionCopy & { items: Record<PillarId, Omit<Pillar, "num" | "image">> };
  facilities: SectionCopy & { items: Record<FacilityId, Omit<Facility, "image">> };
};

/*
 * Polish single-word headings that are wider than their English counterparts carry a soft hyphen (\u00AD):
 * invisible while the word fits, "Bezpie-/czeństwo" when the column is too narrow (instead of overflowing the card).
 */
const text: Localized<HomeText> = {
  en: {
    hero: {
      lines: ["Revolutionary", "Drone Cleaning", "Technology."],
      lede: "Transform building maintenance with advanced drone technology. Safe, efficient, and eco-friendly cleaning solutions.",
    },
    ticker: [
      "Facade cleaning",
      "Glass surfaces",
      "Disinfection",
      "Aerial inspection",
      "Training STS-01 / STS-02",
      "Franchise",
      "Working height up to 120 m",
      "Gdynia · Poland · Europe",
    ],
    intro: {
      statement:
        "Global AeroCleaning Solutions is the future of building maintenance. A new category of surface cleaning, performed from the air with industrial drones.",
      body: "DCS Drone Cleaning Solutions develops the AeroCleaning concept. It is a complete operational solution that lets any organisation quickly implement cleaning, washing, impregnation, disinfection and other large-scale operations, without putting people on the facade.",
      points: [
        { n: "01", label: "Speed", text: "Shorter timelines through direct aerial access." },
        { n: "02", label: "Safety", text: "Nobody works at height. Ever." },
        { n: "03", label: "Economy", text: "No scaffolding, lifts or heavy logistics." },
      ],
    },
    pillars: {
      eyebrow: "Our foundations",
      title: "Technology built on three pillars.",
      lede: "Every project is executed on these fundamental principles. They are what make the results repeatable.",
      items: {
        safety: {
          kicker: "Zero-risk operations",
          title: "Safety",
          body: "We eliminate the risks associated with traditional cleaning methods. No scaffolding, no working at height, no worker exposure.",
          points: ["No work at height", "Ground-level operations"],
          alt: "DCS operator helmet with the company logo",
        },
        control: {
          kicker: "Precise monitoring",
          title: "Control",
          body: "Real-time monitoring and precise control of every cleaning operation. Full visibility of the process, with documented results.",
          points: ["Live monitoring", "Precision spraying", "Quality control"],
          alt: "DCS drone washing a brick facade",
        },
        predictability: {
          kicker: "Reliable planning",
          title: "Predictability",
          body: "Accurate cost estimates and reliable schedules. With drone cleaning there are no surprises: we deliver on time and within budget.",
          points: ["Fixed pricing", "On-time delivery", "Full documentation"],
          alt: "DCS spray station",
        },
      },
    },
    whyDrone: {
      eyebrow: "Why drone cleaning?",
      title: "The future of building maintenance.",
      lede: "Discover why industry leaders are switching to drone cleaning for their high-rises and industrial facilities.",
      clip: "Facade washing from the ground station: no scaffolding, nobody on the wall, less water than traditional methods.",
      comparison: [
        { label: "People at height", traditional: "Rope access or scaffolding", dcs: "None – operated from the ground" },
        { label: "Set-up", traditional: "Scaffolding, lifts, logistics", dcs: "Mobile station, same day" },
        { label: "Project time", traditional: "Weeks", dcs: "1–3 days for most buildings" },
        { label: "Water & chemicals", traditional: "High consumption", dcs: "Less water, fewer chemicals" },
        { label: "Building operations", traditional: "Disrupted", dcs: "Continue as normal" },
        { label: "Result", traditional: "Visual check", dcs: "Documented with photo and video" },
      ],
      footnote: "Based on DCS projects. Timelines depend on the size and complexity of the building.",
      benefits: [
        { title: "Safety first", body: "No workers at height. Operations are conducted safely from ground level." },
        {
          title: "Hard-to-reach areas",
          body: "Drones reach areas inaccessible to traditional methods, without logistical complications.",
        },
        { title: "Minimal disruption", body: "Building operations continue as normal during the cleaning process." },
        { title: "Faster completion", body: "Direct aerial access means shorter timelines and quicker results." },
        { title: "Cost-effective", body: "No scaffolding, lifts or extensive logistics to pay for." },
        { title: "Eco-friendly", body: "Less water, fewer chemicals and reduced operational waste." },
      ],
    },
    services: {
      eyebrow: "Our services",
      title: "Comprehensive drone cleaning solutions.",
      lede: "Our full range of services designed to transform building maintenance.",
    },
    facilities: {
      eyebrow: "Where we work",
      title: "Solutions for every type of facility.",
      lede: "From corporate headquarters to industrial complexes: professional drone cleaning for every kind of object.",
      items: {
        buildings: {
          kicker: "Office & commercial",
          title: "Buildings",
          body: "Modern office towers, apartment buildings and commercial facilities that require safe, precise facade cleaning at height.",
          chip: "Up to 120 m height",
          alt: "Glass office towers",
        },
        public: {
          kicker: "Public spaces",
          title: "Facilities",
          body: "Stadiums, arenas, urban spaces and public infrastructure, where effectiveness, safety and minimal impact on the surroundings matter.",
          chip: "Large surfaces",
          alt: "Modern public building complex",
        },
        industrial: {
          kicker: "Industrial facilities",
          title: "Industrial",
          body: "Factories, warehouses, production halls and logistics centres that need regular cleaning of large facade and technical surfaces.",
          chip: "24/7 operations",
          alt: "Industrial site with cranes",
        },
        special: {
          kicker: "Special objects",
          title: "Structures",
          body: "Photovoltaic panels, bridges, towers and specialised installations that call for an individual approach and precise cleaning technology.",
          chip: "Precision washing",
          alt: "Photovoltaic installation and wind turbines",
        },
      },
    },
    statement: {
      eyebrow: "B2B partnership",
      text: "We provide complete B2B solutions: hardware, know-how and support for your cleaning business.",
    },
    startBusiness: {
      eyebrow: "Franchise",
      title: "Start your drone cleaning business today.",
      body: "We provide complete solutions: equipment, training and ongoing support to launch your own drone cleaning operation in your market.",
      points: [
        "Complete hardware: spray station, drone, accessories and chemicals",
        "Full training and STS-01 / STS-02 certification",
        "Ongoing operational and marketing support",
      ],
    },
  },

  pl: {
    hero: {
      // Client wording "Rewolucyjna Technologia Mycia Dronem", split so no line is wider than "Drone Cleaning".
      lines: ["Rewolucyjna", "technologia", "mycia dronem."],
      lede: "Transformuj konserwację budynków dzięki zaawansowanej technologii dronowej. Bezpieczne, wydajne i ekologiczne rozwiązania czyszczenia.",
    },
    ticker: [
      "Mycie elewacji",
      "Powierzchnie szklane",
      "Dezynfekcja",
      "Inspekcje z powietrza",
      "Szkolenia STS-01 / STS-02",
      "Franczyza",
      "Wysokość pracy do 120 m",
      "Gdynia · Polska · Europa",
    ],
    intro: {
      statement:
        "Global AeroCleaning Solutions to przyszłość konserwacji budynków. Nowa kategoria czyszczenia powierzchni, wykonywanego z powietrza przy użyciu dronów przemysłowych.",
      body: "DCS Drone Cleaning Solutions rozwija koncepcję AeroCleaning. To kompletne rozwiązanie operacyjne, które pozwala każdej organizacji szybko wdrożyć czyszczenie, mycie, impregnację, dezynfekcję i inne realizacje na dużą skalę – bez wysyłania ludzi na elewację.",
      points: [
        { n: "01", label: "Szybkość", text: "Krótsze terminy dzięki bezpośredniemu dostępowi z powietrza." },
        { n: "02", label: "Bezpie\u00ADczeństwo", text: "Nikt nie pracuje na wysokości. Nigdy." },
        { n: "03", label: "Ekonomia", text: "Bez rusztowań, podnośników i ciężkiej logistyki." },
      ],
    },
    pillars: {
      eyebrow: "Nasze fundamenty",
      title: "Technologia oparta na trzech filarach.",
      lede: "Każdy projekt realizujemy w oparciu o te fundamentalne zasady. To dzięki nim rezultaty są powtarzalne.",
      items: {
        safety: {
          kicker: "Operacje bez ryzyka",
          title: "Bezpie\u00ADczeństwo",
          body: "Eliminujemy ryzyko związane z tradycyjnymi metodami czyszczenia. Bez rusztowań, bez prac na wysokości, bez narażania pracowników.",
          points: ["Brak pracy na wysokości", "Operacje z poziomu gruntu"],
          alt: "Kask operatora DCS z logo firmy",
        },
        control: {
          kicker: "Precyzyjny monitoring",
          title: "Kontrola",
          body: "Monitoring w czasie rzeczywistym i precyzyjna kontrola każdej operacji czyszczenia. Pełna widoczność procesu z udokumentowanymi wynikami.",
          points: ["Monitoring na żywo", "Precyzyjne natryskiwanie", "Kontrola jakości"],
          alt: "Dron DCS myjący ceglaną elewację",
        },
        predictability: {
          kicker: "Niezawodne planowanie",
          title: "Przewidy\u00ADwalność",
          body: "Dokładne kosztorysy i niezawodne harmonogramy. Z czyszczeniem dronem nie ma niespodzianek: realizujemy prace na czas i w ramach budżetu.",
          points: ["Stałe ceny", "Terminowa realizacja", "Pełna dokumentacja"],
          alt: "Stacja natryskowa DCS",
        },
      },
    },
    whyDrone: {
      eyebrow: "Dlaczego mycie dronem?",
      title: "Przyszłość konserwacji budynków.",
      lede: "Odkryj, dlaczego liderzy branży przechodzą na rozwiązania czyszczenia dronem dla swoich wysokościowców i obiektów przemysłowych.",
      clip: "Mycie elewacji ze stacji naziemnej: bez rusztowań, bez ludzi na ścianie, mniej wody niż w metodach tradycyjnych.",
      comparison: [
        { label: "Ludzie na wysokości", traditional: "Alpinizm przemysłowy lub rusztowania", dcs: "Brak – obsługa z poziomu gruntu" },
        { label: "Przygotowanie", traditional: "Rusztowania, podnośniki, logistyka", dcs: "Mobilna stacja, tego samego dnia" },
        { label: "Czas realizacji", traditional: "Tygodnie", dcs: "1–3 dni dla większości budynków" },
        { label: "Woda i chemia", traditional: "Wysokie zużycie", dcs: "Mniej wody, mniej chemii" },
        { label: "Działalność budynku", traditional: "Zakłócona", dcs: "Trwa normalnie" },
        { label: "Efekt", traditional: "Kontrola wizualna", dcs: "Udokumentowany zdjęciami i wideo" },
      ],
      footnote: "Na podstawie projektów DCS. Czas realizacji zależy od wielkości i złożoności budynku.",
      benefits: [
        {
          title: "Bezpieczeństwo przede wszystkim",
          body: "Brak pracowników na wysokości. Operacje prowadzone bezpiecznie z poziomu gruntu.",
        },
        {
          title: "Trudno dostępne miejsca",
          body: "Dron dociera do miejsc niedostępnych dla tradycyjnych metod, bez logistycznych komplikacji.",
        },
        { title: "Minimalne zakłócenia", body: "Działalność budynku trwa normalnie podczas naszego procesu czyszczenia." },
        { title: "Szybsza realizacja", body: "Bezpośredni dostęp z powietrza oznacza krótsze terminy i szybsze rezultaty." },
        { title: "Opłacalność", body: "Eliminacja rusztowań, podnośników i rozbudowanej logistyki." },
        { title: "Ekologiczne", body: "Mniej wody, mniej chemii i zredukowana ilość odpadów operacyjnych." },
      ],
    },
    services: {
      eyebrow: "Nasze usługi",
      title: "Kompleksowe rozwiązania czyszczenia dronem.",
      lede: "Poznaj pełną gamę naszych usług zaprojektowanych do transformacji konserwacji budynków.",
    },
    facilities: {
      eyebrow: "Gdzie działamy",
      title: "Rozwiązania dla każdego typu obiektu.",
      lede: "Od siedzib korporacji po kompleksy przemysłowe: profesjonalne czyszczenie dronem dla wszystkich typów obiektów.",
      items: {
        buildings: {
          kicker: "Biura i komercja",
          title: "Budynki",
          body: "Nowoczesne biurowce, apartamentowce oraz obiekty komercyjne wymagające bezpiecznego i precyzyjnego czyszczenia elewacji na wysokości.",
          chip: "Do 120 m wysokości",
          alt: "Szklane biurowce",
        },
        public: {
          kicker: "Miejsca publiczne",
          title: "Obiekty",
          body: "Stadiony, areny, przestrzenie miejskie oraz infrastruktura publiczna, gdzie liczy się skuteczność, bezpieczeństwo i minimalna ingerencja w otoczenie.",
          chip: "Duże powierzchnie",
          alt: "Nowoczesny kompleks budynków publicznych",
        },
        industrial: {
          kicker: "Obiekty przemysłowe",
          title: "Przemysł",
          body: "Fabryki, magazyny, hale produkcyjne oraz centra logistyczne wymagające regularnego czyszczenia dużych powierzchni elewacyjnych i technicznych.",
          chip: "Praca 24/7",
          alt: "Teren przemysłowy z dźwigami",
        },
        special: {
          kicker: "Obiekty specjalne",
          title: "Konstrukcje",
          body: "Panele fotowoltaiczne, mosty, wieże oraz specjalistyczne instalacje, które wymagają indywidualnego podejścia i precyzyjnej technologii czyszczenia.",
          chip: "Precyzyjne mycie",
          alt: "Instalacja fotowoltaiczna i turbiny wiatrowe",
        },
      },
    },
    statement: {
      eyebrow: "Partnerstwo B2B",
      text: "Dostarczamy kompletne rozwiązania B2B: sprzęt, know-how i wsparcie dla Twojego biznesu.",
    },
    startBusiness: {
      eyebrow: "Franczyza",
      title: "Rozpocznij biznes czyszczenia dronem już dziś.",
      body: "Dostarczamy kompletne rozwiązania: sprzęt, szkolenia i stałe wsparcie, aby uruchomić własny biznes czyszczenia dronem na Twoim rynku.",
      points: [
        "Kompletny sprzęt: stacja natryskowa, dron, akcesoria i chemia",
        "Pełne szkolenie i certyfikacja STS-01 / STS-02",
        "Stałe wsparcie operacyjne i marketingowe",
      ],
    },
  },
};

function build(t: HomeText): HomeContent {
  return {
    ...t,
    pillars: { ...t.pillars, items: pillarBase.map(({ id, ...shared }) => ({ ...shared, ...t.pillars.items[id] })) },
    facilities: {
      ...t.facilities,
      items: facilityBase.map(({ id, ...shared }) => ({ ...shared, ...t.facilities.items[id] })),
    },
  };
}

const content: Localized<HomeContent> = { en: build(text.en), pl: build(text.pl) };

/** All home page copy for one language. */
export function getHomeContent(locale: Locale): HomeContent {
  return pick(content, locale);
}
