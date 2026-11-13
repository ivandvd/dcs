import { type Locale, type Localized, pick } from "@/lib/i18n";
import type { IconName } from "@/components/ui/LineIcons";
import type { Spec } from "@/components/pages/SpecsGrid";

/**
 * Copy of the Technology page. English is the source of truth; the Polish text follows the client's own
 * wording from incoming/scrape/pl/technology.txt wherever a block exists there.
 * Images, hrefs and the video embed stay in the page; only human-readable text (incl. alt texts) lives here.
 * Spec values are identical in both languages – only the labels (and the litre symbol) differ.
 */
export type TechnologyCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; alt: string; demo: string; catalog: string };
  intro: { eyebrow: string; title: string; body: string[]; alt: string; cta: string };
  features: { eyebrow: string; title: string; items: { icon: IconName; title: string; body: string }[] };
  specs: { eyebrow: string; title: string; items: Spec[] };
  process: { eyebrow: string; title: string; steps: { title: string; body: string }[] };
  video: { eyebrow: string; title: string; videoTitle: string; chip: string };
  closing: { eyebrow: string; title: string; lede: string; cta: string };
};

const en: TechnologyCopy = {
  meta: {
    title: "Technology",
    description:
      "Proprietary drone systems that combine aerospace engineering with professional cleaning technology: flight control, purified water, safety protocols and real-time monitoring.",
  },
  hero: {
    eyebrow: "Our technology",
    title: "Engineering excellence in aerial cleaning.",
    lede: "Our proprietary drone systems combine aerospace engineering with professional cleaning technology, delivering results that traditional methods simply cannot achieve.",
    alt: "DCS drone seen from above on a trade fair stand",
    demo: "Request technical demo",
    catalog: "View catalog",
  },
  intro: {
    eyebrow: "Purpose-built",
    title: "Built for professional cleaning.",
    body: [
      "Unlike modified consumer drones, our systems were designed from the ground up for building maintenance. Every component is selected for reliability, efficiency and safety in demanding commercial environments.",
      "The result is a platform that delivers consistent, high-quality cleaning results while maintaining the highest safety standards in the industry.",
    ],
    alt: "Spray nozzle with brass quick-connect on the DCS lance",
    cta: "Request technical demo",
  },
  features: {
    eyebrow: "Key features",
    title: "Technology that sets us apart.",
    items: [
      { icon: "target", title: "Advanced flight control", body: "Precision GPS and obstacle avoidance systems ensure stable, accurate positioning near building surfaces." },
      { icon: "filter", title: "Purified water system", body: "Multi-stage water filtration delivers streak-free cleaning without chemicals on most surfaces." },
      { icon: "shield", title: "Safety protocols", body: "Redundant flight systems, geofencing and failsafe mechanisms protect people and property." },
      { icon: "gauge", title: "High-pressure cleaning", body: "Pressure regulation adapts to different surfaces, from delicate glass to tough concrete." },
      { icon: "eye", title: "Real-time monitoring", body: "Live video transmission and telemetry data let operators monitor every aspect of the process." },
      { icon: "radio", title: "Remote operations", body: "Secure control systems enable operation from safe distances with full situational awareness." },
      { icon: "battery", title: "Extended flight time", body: "Efficient systems and high-capacity batteries maximise cleaning coverage per flight." },
      { icon: "puzzle", title: "Modular design", body: "Interchangeable cleaning heads and tanks adapt to different job requirements." },
    ],
  },
  specs: {
    eyebrow: "Technical specifications",
    title: "Professional-grade performance for commercial applications.",
    items: [
      { value: 50, unit: "min", label: "Max flight time on one charge" },
      { value: 500, unit: "L", label: "Tank capacity" },
      { value: 120, unit: "m", label: "Operating range" },
      { value: 12, unit: "m/s", label: "Max wind speed" },
      { value: 1.5, decimals: 1, unit: "m", label: "Cleaning width" },
      { value: 275, unit: "bar", label: "Water pressure" },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "From takeoff to pristine finish.",
    steps: [
      { title: "Flight preparation", body: "Operators configure flight paths, cleaning parameters and safety zones based on building specifications." },
      { title: "Automated cleaning", body: "The drone follows programmed routes while operators monitor progress and adjust settings in real time." },
      { title: "Quality verification", body: "Onboard cameras document results and AI-assisted analysis ensures complete coverage before project completion." },
    ],
  },
  video: {
    eyebrow: "In action",
    title: "Watch the system at work.",
    videoTitle: "DCS drone washing a building facade",
    chip: "Facade cleaning · Gdynia",
  },
  closing: {
    eyebrow: "See our technology in action",
    title: "Schedule a demonstration.",
    lede: "Discover how our drone systems can revolutionize your building maintenance.",
    cta: "Schedule demo",
  },
};

const pl: TechnologyCopy = {
  meta: {
    title: "Technologia",
    description:
      "Autorskie systemy dronów łączące inżynierię lotniczą z profesjonalną technologią czyszczenia: sterowanie lotem, woda oczyszczona, protokoły bezpieczeństwa i monitoring w czasie rzeczywistym.",
  },
  hero: {
    eyebrow: "Nasza technologia",
    title: "Inżynierska doskonałość w czyszczeniu lotniczym.",
    lede: "Nasze autorskie systemy dronów łączą inżynierię lotniczą z profesjonalną technologią czyszczenia, dostarczając wyniki, których tradycyjne metody po prostu nie mogą osiągnąć.",
    alt: "Dron DCS widziany z góry na stoisku targowym",
    demo: "Zamów demo techniczne",
    catalog: "Zobacz katalog",
  },
  intro: {
    eyebrow: "Od podstaw",
    title: "Zbudowane z myślą o profesjonalnym czyszczeniu.",
    body: [
      "W odróżnieniu od zmodyfikowanych dronów konsumenckich nasze systemy zostały zaprojektowane od podstaw do konserwacji budynków. Każdy element dobieramy pod kątem niezawodności, wydajności i bezpieczeństwa w wymagających środowiskach komercyjnych.",
      "Rezultatem jest platforma zapewniająca spójne, wysokiej jakości wyniki czyszczenia przy zachowaniu najwyższych standardów bezpieczeństwa w branży.",
    ],
    alt: "Dysza natryskowa z mosiężnym szybkozłączem na lancy DCS",
    cta: "Zamów demo techniczne",
  },
  features: {
    eyebrow: "Kluczowe cechy",
    title: "Technologia, która nas wyróżnia.",
    items: [
      { icon: "target", title: "Zaawansowane sterowanie lotem", body: "Precyzyjny GPS i systemy unikania przeszkód zapewniają stabilne, dokładne pozycjonowanie przy powierzchniach budynków." },
      { icon: "filter", title: "System wody oczyszczonej", body: "Wielostopniowa filtracja wody zapewnia czyszczenie bez smug i bez użycia chemii na większości powierzchni." },
      { icon: "shield", title: "Protokoły bezpieczeństwa", body: "Redundantne systemy lotu, geofencing i mechanizmy awaryjne chronią ludzi i mienie." },
      { icon: "gauge", title: "Czyszczenie wysokociśnieniowe", body: "Regulacja ciśnienia adaptuje się do różnych powierzchni – od delikatnego szkła po twardy beton." },
      { icon: "eye", title: "Monitoring w czasie rzeczywistym", body: "Transmisja wideo na żywo i dane telemetryczne pozwalają operatorom monitorować każdy aspekt procesu." },
      { icon: "radio", title: "Zdalne operacje", body: "Bezpieczne systemy sterowania umożliwiają pracę z bezpiecznej odległości z pełną świadomością sytuacyjną." },
      { icon: "battery", title: "Wydłużony czas lotu", body: "Wydajne systemy i pojemne akumulatory maksymalizują pokrycie czyszczenia na jeden lot." },
      { icon: "puzzle", title: "Modułowa budowa", body: "Wymienne głowice czyszczące i zbiorniki adaptują się do różnych wymagań zlecenia." },
    ],
  },
  specs: {
    eyebrow: "Specyfikacja techniczna",
    title: "Wydajność klasy profesjonalnej dla zastosowań komercyjnych.",
    items: [
      { value: 50, unit: "min", label: "Maks. czas lotu na jednym ładowaniu" },
      { value: 500, unit: "l", label: "Pojemność zbiorników" },
      { value: 120, unit: "m", label: "Zasięg operacyjny" },
      { value: 12, unit: "m/s", label: "Maks. prędkość wiatru" },
      { value: 1.5, decimals: 1, unit: "m", label: "Szerokość czyszczenia" },
      { value: 275, unit: "bar", label: "Ciśnienie wody" },
    ],
  },
  process: {
    eyebrow: "Jak to działa",
    title: "Od startu do nieskazitelnego efektu.",
    steps: [
      { title: "Przygotowanie lotu", body: "Operatorzy konfigurują trasy lotów, parametry czyszczenia i strefy bezpieczeństwa na podstawie specyfikacji budynku." },
      { title: "Automatyczne czyszczenie", body: "Dron podąża zaprogramowanymi trasami, podczas gdy operatorzy monitorują postęp i dostosowują ustawienia na bieżąco." },
      { title: "Weryfikacja jakości", body: "Pokładowe kamery dokumentują wyniki, a analiza z pomocą AI zapewnia pełne pokrycie przed zakończeniem projektu." },
    ],
  },
  video: {
    eyebrow: "W akcji",
    title: "Zobacz system w działaniu.",
    videoTitle: "Dron DCS myje elewację budynku",
    chip: "Mycie elewacji · Gdynia",
  },
  closing: {
    eyebrow: "Zobacz naszą technologię w działaniu",
    title: "Umów się na demonstrację.",
    lede: "Sprawdź, jak nasze systemy dronów mogą zrewolucjonizować konserwację Twoich budynków.",
    cta: "Umów demo",
  },
};

const copy: Localized<TechnologyCopy> = { en, pl };

export const getTechnologyCopy = (locale: Locale) => pick(copy, locale);
