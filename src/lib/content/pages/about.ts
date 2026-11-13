import { type Locale, type Localized, pick } from "@/lib/i18n";
import type { IconName } from "@/components/ui/LineIcons";

/**
 * Copy of the About page. English is the source of truth; the Polish text follows the client's own
 * wording from incoming/scrape/pl/about.txt wherever a block exists there.
 * Images and hrefs stay in the page; only human-readable text (incl. alt texts) lives here.
 */
export type AboutCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; alt: string; contact: string; solutions: string };
  mission: { eyebrow: string; title: string; body: string[]; alt: string };
  values: { eyebrow: string; title: string; items: { icon: IconName; title: string; body: string }[] };
  why: { eyebrow: string; title: string; lede: string; facts: { k: string; t: string; d: string }[] };
  career: { eyebrow: string; title: string; body: string[]; alt: string; openings: string; sendCv: string };
};

const en: AboutCopy = {
  meta: {
    title: "About Us",
    description:
      "DCS is at the forefront of aerial cleaning technology, combining cutting-edge drone systems with experienced operations to deliver safer, more efficient building maintenance.",
  },
  hero: {
    eyebrow: "About DCS",
    title: "Shaping the future of building maintenance.",
    lede: "DCS is at the forefront of aerial cleaning technology, combining cutting-edge drone systems with experienced operations to deliver safer, more efficient building maintenance solutions.",
    alt: "DCS drone on a trade fair stand",
    contact: "Contact Us",
    solutions: "Our solutions",
  },
  mission: {
    eyebrow: "Our mission",
    title: "Revolutionizing how buildings are maintained.",
    body: [
      "Traditional building cleaning methods put workers at risk, consume excessive resources and disrupt building operations. We founded DCS to completely change this paradigm.",
      "Our drone-based approach eliminates the need for scaffolding, rope access and elevated work platforms. This means faster turnaround times, lower costs, reduced environmental impact and, most importantly, zero worker risk.",
      "We believe every building deserves safe, sustainable maintenance. Our mission is to make advanced drone cleaning technology available to property owners worldwide.",
    ],
    alt: "DCS crew washing a facade: drone on the wall, hose line and the ground station below",
  },
  values: {
    eyebrow: "Our values",
    title: "Principles that guide everything we do.",
    items: [
      { icon: "target", title: "Precision", body: "Every operation is executed with meticulous attention to detail and accuracy." },
      { icon: "sparkles", title: "Innovation", body: "We continuously develop technology to deliver ever-better results." },
      { icon: "shield", title: "Safety first", body: "Worker safety is non-negotiable. Our methods eliminate height-work risks." },
      { icon: "leaf", title: "Sustainability", body: "Reduced water consumption and eco-friendly cleaning agents." },
    ],
  },
  why: {
    eyebrow: "Why DCS",
    title: "Built in Gdynia. Working across Europe.",
    lede: "A complete operational solution: hardware, know-how and support, developed and tested in real operations.",
    facts: [
      { k: "ECO", t: "Water reduction", d: "Less water and fewer chemicals than traditional washing, with reduced operational waste." },
      { k: "R&D", t: "Continuous upgrades", d: "Our own R&D team works on upgrades to the AeroCleaning system." },
      { k: "€", t: "Security in price", d: "Accurate estimates and fixed pricing. No surprises on the invoice." },
      { k: "EU", t: "Across Europe", d: "We work across Europe from our base in Gdynia, Poland." },
    ],
  },
  career: {
    eyebrow: "Career",
    title: "Join our team.",
    body: [
      "We are looking for technology and innovation enthusiasts. Send us your CV, even if you don't see an open position that fits.",
    ],
    alt: "DCS team member preparing a hose reel at a trade fair",
    openings: "See open positions",
    sendCv: "Send your CV",
  },
};

const pl: AboutCopy = {
  meta: {
    title: "O nas",
    description:
      "DCS jest na czele technologii czyszczenia lotniczego, łącząc najnowocześniejsze systemy dronów z doświadczonymi operacjami, aby dostarczać bezpieczniejsze i wydajniejsze rozwiązania konserwacji budynków.",
  },
  hero: {
    eyebrow: "O DCS",
    title: "Kształtujemy przyszłość konserwacji budynków.",
    lede: "DCS jest na czele technologii czyszczenia lotniczego, łącząc najnowocześniejsze systemy dronów z doświadczonymi operacjami w celu dostarczania bezpieczniejszych, wydajniejszych rozwiązań konserwacji budynków.",
    alt: "Dron DCS na stoisku targowym",
    contact: "Skontaktuj się",
    solutions: "Nasze rozwiązania",
  },
  mission: {
    eyebrow: "Nasza misja",
    title: "Rewolucjonizujemy sposób konserwacji budynków.",
    body: [
      "Tradycyjne metody czyszczenia budynków narażają pracowników na ryzyko, zużywają nadmierne zasoby i zakłócają działalność budynku. Założyliśmy DCS, aby całkowicie zmienić ten paradygmat.",
      "Nasze podejście oparte na dronach eliminuje potrzebę rusztowań, dostępu linowego i platform roboczych na wysokości. Oznacza to krótsze terminy realizacji, niższe koszty, mniejszy wpływ na środowisko i przede wszystkim zerowe ryzyko dla pracowników.",
      "Wierzymy, że każdy budynek zasługuje na bezpieczną i zrównoważoną konserwację. Naszą misją jest udostępnienie zaawansowanej technologii czyszczenia dronem właścicielom nieruchomości na całym świecie.",
    ],
    alt: "Ekipa DCS myje elewację: dron przy ścianie, linia węża i stacja naziemna poniżej",
  },
  values: {
    eyebrow: "Nasze wartości",
    title: "Zasady, które kierują wszystkim, co robimy.",
    items: [
      { icon: "target", title: "Precyzja", body: "Każda operacja wykonywana jest z drobiazgową dbałością o szczegóły i dokładność." },
      { icon: "sparkles", title: "Innowacja", body: "Nieustannie rozwijamy technologię, aby dostarczać coraz lepsze wyniki." },
      { icon: "shield", title: "Bezpieczeństwo", body: "Pracownicy są ważni. Nasze metody eliminują ryzyko pracy na wysokości." },
      { icon: "leaf", title: "Zrównoważony rozwój", body: "Ograniczone zużycie wody i ekologiczne środki czyszczące." },
    ],
  },
  why: {
    eyebrow: "Dlaczego DCS",
    title: "Powstaliśmy w Gdyni. Działamy w całej Europie.",
    lede: "Kompletne rozwiązanie operacyjne: sprzęt, know-how i wsparcie, opracowane i sprawdzone w rzeczywistych operacjach.",
    facts: [
      {
        k: "ECO",
        t: "Redukcja zużycia wody",
        d: "Mniej wody i mniej chemii niż przy tradycyjnym myciu, a do tego mniej odpadów operacyjnych.",
      },
      { k: "R&D", t: "Ciągłe ulepszenia", d: "Nasz własny dział R&D pracuje nad ulepszeniami systemu AeroCleaning." },
      { k: "€", t: "Bezpieczeństwo w cenie", d: "Dokładne wyceny i stała cena. Żadnych niespodzianek na fakturze." },
      { k: "EU", t: "W całej Europie", d: "Pracujemy w całej Europie z naszej bazy w Gdyni." },
    ],
  },
  career: {
    eyebrow: "Kariera",
    title: "Dołącz do naszego zespołu.",
    body: [
      "Poszukujemy pasjonatów technologii i innowacji. Wyślij nam swoje CV – nawet jeśli nie widzisz aktualnie odpowiedniego ogłoszenia.",
    ],
    alt: "Członek zespołu DCS przygotowuje zwijak węża na targach",
    openings: "Zobacz oferty pracy",
    sendCv: "Wyślij swoje CV",
  },
};

const copy: Localized<AboutCopy> = { en, pl };

export const getAboutCopy = (locale: Locale) => pick(copy, locale);
