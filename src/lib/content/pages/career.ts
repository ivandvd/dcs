import { type Locale, type Localized, pick } from "@/lib/i18n";
import type { IconName } from "@/components/ui/LineIcons";
import type { Job } from "@/components/pages/JobList";

/**
 * Copy of the Career page. English is the source of truth; the Polish text follows the client's own
 * wording from incoming/scrape/pl/career.txt (the same five openings the client lists – none added).
 * Images and hrefs stay in the page; only human-readable text (incl. alt texts) lives here.
 */
export type CareerCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; alt: string; openings: string; sendCv: string };
  why: { eyebrow: string; title: string; lede: string; items: { icon: IconName; title: string; body: string }[] };
  jobs: { eyebrow: string; title: string; items: Job[] };
  cv: { eyebrow: string; title: string; body: string[]; alt: string; cta: string };
};

const en: CareerCopy = {
  meta: {
    title: "Career",
    description:
      "Join a team that is changing the future of the industrial cleaning industry. Current openings at DCS: drone operators, service engineers, sales and project management.",
  },
  hero: {
    eyebrow: "Join us",
    title: "Career at DCS.",
    lede: "Join a team that is changing the future of the industrial cleaning industry. We create innovative solutions and expand into global markets.",
    alt: "DCS team member preparing equipment at a trade fair",
    openings: "View job openings",
    sendCv: "Send your CV",
  },
  why: {
    eyebrow: "Why DCS?",
    title: "More than a job. A technological revolution.",
    lede: "We offer more than just a job: a chance to be part of a technological revolution.",
    items: [
      { icon: "users", title: "Young team", body: "Work with technology and innovation enthusiasts in a dynamic environment." },
      { icon: "trendingUp", title: "Career development", body: "Training, certifications and real opportunities for advancement in a growing company." },
      { icon: "award", title: "Benefits", body: "Private healthcare, sports card, flexible working hours." },
      { icon: "building", title: "Modern office", body: "Work in a modern office with access to the latest equipment." },
    ],
  },
  jobs: {
    eyebrow: "Current job openings",
    title: "Find a position that matches your skills and ambitions.",
    items: [
      {
        department: "Operations",
        title: "Industrial Drone Operator",
        body: "We are looking for experienced drone pilots to carry out cleaning and inspection projects.",
        location: "Warsaw",
        type: "Full-time",
      },
      {
        department: "Technical",
        title: "Drone Service Engineer",
        body: "Responsible for maintenance, repairs and modernisation of the DCS drone fleet.",
        location: "Kraków",
        type: "Full-time",
      },
      {
        department: "Sales",
        title: "B2B Sales Specialist",
        body: "Developing relationships with corporate clients and acquiring new projects.",
        location: "Warsaw",
        type: "Full-time",
      },
      {
        department: "Management",
        title: "Project Manager",
        body: "Coordinating cleaning projects for key industrial clients.",
        location: "Gdańsk",
        type: "Full-time",
      },
      {
        department: "Marketing",
        title: "Marketing Specialist",
        body: "Creating and implementing marketing strategies for European markets.",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
  cv: {
    eyebrow: "Didn't find the right position?",
    title: "Send us your CV anyway.",
    body: [
      "We are always looking for talented people to join our team. Technology and innovation enthusiasts are welcome, even if you don't see an open position that fits.",
    ],
    alt: "DCS drone with the AeroCleaning module",
    cta: "Send CV",
  },
};

const pl: CareerCopy = {
  meta: {
    title: "Kariera",
    description:
      "Dołącz do zespołu, który zmienia przyszłość branży czyszczenia przemysłowego. Aktualne oferty pracy w DCS: operatorzy dronów, inżynierowie serwisu, sprzedaż i zarządzanie projektami.",
  },
  hero: {
    eyebrow: "Dołącz do nas",
    title: "Kariera w DCS.",
    lede: "Dołącz do zespołu, który zmienia przyszłość branży czyszczenia przemysłowego. Tworzymy innowacyjne rozwiązania i rozwijamy się na rynkach globalnych.",
    alt: "Członek zespołu DCS przygotowuje sprzęt na targach",
    openings: "Zobacz oferty pracy",
    sendCv: "Wyślij swoje CV",
  },
  why: {
    eyebrow: "Dlaczego DCS?",
    title: "Więcej niż praca. Rewolucja technologiczna.",
    lede: "Oferujemy więcej niż tylko pracę – to szansa na bycie częścią rewolucji technologicznej.",
    items: [
      { icon: "users", title: "Młody zespół", body: "Pracuj z pasjonatami technologii i innowacji w dynamicznym środowisku." },
      { icon: "trendingUp", title: "Rozwój kariery", body: "Szkolenia, certyfikaty i realne możliwości awansu w rozwijającej się firmie." },
      { icon: "award", title: "Benefity", body: "Prywatna opieka medyczna, karta sportowa, elastyczne godziny pracy." },
      { icon: "building", title: "Nowoczesne biuro", body: "Praca w nowoczesnym biurze z dostępem do najnowszego sprzętu." },
    ],
  },
  jobs: {
    eyebrow: "Aktualne oferty pracy",
    title: "Znajdź stanowisko, które pasuje do Twoich umiejętności i ambicji.",
    items: [
      {
        department: "Operacje",
        title: "Operator drona przemysłowego",
        body: "Poszukujemy doświadczonych pilotów dronów do realizacji projektów czyszczenia i inspekcji.",
        location: "Warszawa",
        type: "Pełny etat",
      },
      {
        department: "Techniczny",
        title: "Inżynier serwisu dronów",
        body: "Odpowiedzialność za konserwację, naprawy i modernizację floty dronów DCS.",
        location: "Kraków",
        type: "Pełny etat",
      },
      {
        department: "Sprzedaż",
        title: "Specjalista ds. sprzedaży B2B",
        body: "Rozwijanie relacji z klientami korporacyjnymi i pozyskiwanie nowych projektów.",
        location: "Warszawa",
        type: "Pełny etat",
      },
      {
        department: "Zarządzanie",
        title: "Project Manager",
        body: "Koordynacja projektów czyszczenia dla kluczowych klientów przemysłowych.",
        location: "Gdańsk",
        type: "Pełny etat",
      },
      {
        department: "Marketing",
        title: "Specjalista ds. marketingu",
        body: "Tworzenie i realizacja strategii marketingowych dla rynków europejskich.",
        location: "Zdalnie",
        type: "Pełny etat",
      },
    ],
  },
  cv: {
    eyebrow: "Nie znalazłeś odpowiedniej oferty?",
    title: "Mimo to wyślij nam swoje CV.",
    body: [
      "Zawsze szukamy utalentowanych osób do naszego zespołu. Pasjonaci technologii i innowacji są u nas mile widziani – nawet jeśli nie widzisz aktualnie odpowiedniego ogłoszenia.",
    ],
    alt: "Dron DCS z modułem AeroCleaning",
    cta: "Wyślij CV",
  },
};

const copy: Localized<CareerCopy> = { en, pl };

export const getCareerCopy = (locale: Locale) => pick(copy, locale);
