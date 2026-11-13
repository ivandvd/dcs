import { type Locale, type Localized, pick } from "@/lib/i18n";
import type { IconName } from "@/components/ui/LineIcons";

/**
 * Copy of the Solutions page. English is the source of truth (incoming/scrape/solutions.txt). The client's site has
 * no Polish version of this page, so the Polish text is a translation that reuses the client's wording from
 * incoming/scrape/pl/home.txt and the Polish service pages where they overlap.
 * Images and hrefs stay in the page; only human-readable text (incl. alt texts) lives here.
 */

/** The four applications of the sticky showcase; the page maps each key to its image and service page. */
export type ApplicationKey = "facade" | "glass" | "agents" | "inspection";

type Application = { kicker: string; title: string; body: string; points: string[]; alt: string };

export type SolutionsCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; alt: string; consult: string; explore: string };
  pillars: { icon: IconName; title: string; body: string }[];
  applications: { eyebrow: string; title: string; lede: string; items: Record<ApplicationKey, Application> };
  process: { eyebrow: string; title: string; lede: string; steps: { title: string; body: string }[] };
  closing: { eyebrow: string; title: string; lede: string; cta: string };
};

const en: SolutionsCopy = {
  meta: {
    title: "Solutions",
    description:
      "DCS systems use professional unmanned platforms for cleaning, disinfection and inspection of buildings, configured to the surface, height and surroundings of each task.",
  },
  hero: {
    eyebrow: "DCS solutions",
    title: "One platform. Many applications.",
    lede: "DCS systems use professional unmanned platforms for cleaning, disinfection and inspection of buildings. We tailor the configuration to the surface type, height, surroundings and the requirements of each task.",
    alt: "DCS drone working high on a brick facade",
    consult: "Consult your building",
    explore: "Explore solutions",
  },
  pillars: [
    { icon: "shield", title: "Safety", body: "Less human work at height." },
    { icon: "zap", title: "Speed", body: "Efficient execution without extensive scaffolding." },
    { icon: "coins", title: "Economy", body: "Less infrastructure and shorter preparation time." },
  ],
  applications: {
    eyebrow: "Applications",
    title: "What we can do for your building.",
    lede: "The same DCS platform, a different equipment setup. Pick the application and we will tailor the details to your building.",
    items: {
      facade: {
        kicker: "Surface cleaning",
        title: "Facade cleaning",
        body: "Precise facade cleaning without the need for extensive scaffolding. The system reaches high and hard-to-access parts of the building with ease.",
        points: ["Mineral facades", "Composite panels", "Industrial buildings", "Atmospheric and operational soiling", "Work at heights up to 120 m"],
        alt: "DCS drone washing a brick facade against a blue sky",
      },
      glass: {
        kicker: "Glass surfaces",
        title: "Glass surface cleaning",
        body: "Controlled stream guidance enables effective cleaning of glazing, facades and other surfaces that require precise access.",
        points: ["Glass facades", "Office buildings", "Halls and commercial facilities", "Skylights and hard-to-reach glazing", "Remotely controlled cleaning head"],
        alt: "DCS drone washing a glass office facade",
      },
      agents: {
        kicker: "Agent application",
        title: "Disinfection & agent application",
        body: "The platform can be used to evenly apply carefully selected agents across large and hard-to-access surfaces.",
        points: ["Surface disinfection", "Protective coating application", "Impregnation", "Application of specialist agents", "Controlled dosing and even application"],
        alt: "DCS drone applying agent to a facade",
      },
      inspection: {
        kicker: "Inspection & documentation",
        title: "Building & infrastructure inspection",
        body: "Aerial imaging lets you quickly assess surface condition, locate damage and prepare documentation before work begins.",
        points: ["Facades", "Roofs", "Industrial structures", "Technical infrastructure", "Visual documentation before and after the work"],
        alt: "DCS drone inspecting a facade",
      },
    },
  },
  process: {
    eyebrow: "How do we choose the solution?",
    title: "Technology matched to the object.",
    lede: "Every project requires an analysis of the surface, surroundings and expected result. Based on this we select the platform, equipment and working parameters.",
    steps: [
      { title: "Object analysis", body: "We assess the height, surface, type of soiling and surrounding conditions." },
      { title: "Configuration selection", body: "We select the drone platform, lance, head, pressure and the right agent." },
      { title: "Execution & report", body: "We carry out the work and document its course and final result." },
    ],
  },
  closing: {
    eyebrow: "Get in touch",
    title: "Show us your building.",
    lede: "Send us photos, basic dimensions and information about the surface. We will select the right configuration and propose a possible way to carry out the work. You can attach photos in your first message.",
    cta: "Request a consultation",
  },
};

const pl: SolutionsCopy = {
  meta: {
    title: "Rozwiązania",
    description:
      "Systemy DCS wykorzystują profesjonalne platformy bezzałogowe do mycia, dezynfekcji i inspekcji budynków, konfigurowane pod powierzchnię, wysokość i otoczenie każdego zadania.",
  },
  hero: {
    eyebrow: "Rozwiązania DCS",
    title: "Jedna platforma. Wiele zastosowań.",
    lede: "Systemy DCS wykorzystują profesjonalne platformy bezzałogowe do mycia, dezynfekcji i inspekcji budynków. Konfigurację dopasowujemy do rodzaju powierzchni, wysokości, otoczenia i wymagań każdego zadania.",
    alt: "Dron DCS pracujący wysoko na ceglanej elewacji",
    consult: "Skonsultuj swój obiekt",
    explore: "Zobacz rozwiązania",
  },
  pillars: [
    { icon: "shield", title: "Bezpieczeństwo", body: "Mniej pracy ludzi na wysokości." },
    { icon: "zap", title: "Szybkość", body: "Sprawna realizacja bez rozbudowanych rusztowań." },
    { icon: "coins", title: "Ekonomia", body: "Mniej infrastruktury i krótszy czas przygotowania." },
  ],
  applications: {
    eyebrow: "Zastosowania",
    title: "Co możemy zrobić dla Twojego budynku.",
    lede: "Ta sama platforma DCS, inna konfiguracja wyposażenia. Wybierz zastosowanie, a szczegóły dopasujemy do Twojego budynku.",
    items: {
      facade: {
        kicker: "Mycie powierzchni",
        title: "Mycie elewacji",
        body: "Precyzyjne mycie elewacji bez konieczności stawiania rozbudowanych rusztowań. System z łatwością dociera do wysokich i trudno dostępnych części budynku.",
        // non-breaking space keeps "120 m" on one line
        points: ["Elewacje mineralne", "Panele kompozytowe", "Budynki przemysłowe", "Zabrudzenia atmosferyczne i eksploatacyjne", "Praca na wysokości do 120 m"],
        alt: "Dron DCS myjący ceglaną elewację na tle błękitnego nieba",
      },
      glass: {
        kicker: "Powierzchnie szklane",
        title: "Mycie powierzchni szklanych",
        body: "Kontrolowane prowadzenie strumienia pozwala skutecznie myć przeszklenia, fasady i inne powierzchnie wymagające precyzyjnego dostępu.",
        points: ["Fasady szklane", "Budynki biurowe", "Hale i obiekty komercyjne", "Świetliki i trudno dostępne przeszklenia", "Zdalnie sterowana głowica myjąca"],
        alt: "Dron DCS myjący szklaną fasadę biurowca",
      },
      agents: {
        kicker: "Aplikacja środków",
        title: "Dezynfekcja i aplikacja środków",
        body: "Platformę można wykorzystać do równomiernego nanoszenia starannie dobranych środków na duże i trudno dostępne powierzchnie.",
        points: ["Dezynfekcja powierzchni", "Nakładanie powłok ochronnych", "Impregnacja", "Aplikacja środków specjalistycznych", "Kontrolowane dozowanie i równomierne nanoszenie"],
        alt: "Dron DCS nanoszący środek na elewację",
      },
      inspection: {
        kicker: "Inspekcja i dokumentacja",
        title: "Inspekcja budynków i infrastruktury",
        body: "Obrazowanie z powietrza pozwala szybko ocenić stan powierzchni, zlokalizować uszkodzenia i przygotować dokumentację przed rozpoczęciem prac.",
        points: ["Elewacje", "Dachy", "Konstrukcje przemysłowe", "Infrastruktura techniczna", "Dokumentacja wizualna przed pracami i po nich"],
        alt: "Dron DCS podczas inspekcji elewacji",
      },
    },
  },
  process: {
    eyebrow: "Jak dobieramy rozwiązanie?",
    title: "Technologia dopasowana do obiektu.",
    lede: "Każdy projekt wymaga analizy powierzchni, otoczenia i oczekiwanego efektu. Na tej podstawie dobieramy platformę, wyposażenie i parametry pracy.",
    steps: [
      { title: "Analiza obiektu", body: "Oceniamy wysokość, powierzchnię, rodzaj zabrudzeń i warunki otoczenia." },
      { title: "Dobór konfiguracji", body: "Dobieramy platformę dronową, lancę, głowicę, ciśnienie i odpowiedni środek." },
      { title: "Realizacja i raport", body: "Wykonujemy prace i dokumentujemy ich przebieg oraz efekt końcowy." },
    ],
  },
  closing: {
    eyebrow: "Skontaktuj się",
    title: "Pokaż nam swój budynek.",
    lede: "Prześlij nam zdjęcia, podstawowe wymiary i informacje o powierzchni. Dobierzemy odpowiednią konfigurację i zaproponujemy możliwy sposób realizacji prac. Zdjęcia możesz załączyć już w pierwszej wiadomości.",
    cta: "Poproś o konsultację",
  },
};

const copy: Localized<SolutionsCopy> = { en, pl };

export const getSolutionsCopy = (locale: Locale) => pick(copy, locale);
