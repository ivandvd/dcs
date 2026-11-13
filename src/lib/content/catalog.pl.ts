/**
 * Polish catalog text – the client's own Polish copy from dcs-drone.com/katalog (incoming/scrape/pl/catalog*.txt|html,
 * saved by scripts/scrape-catalog-pl.mjs) with light grammar and typography fixes; copy that exists only in our English
 * version is translated from catalog.en.ts. Numbers, SKUs and names are identical to the English version.
 * Shared data (slugs, SKUs, images, models) and the getters are in catalog.ts.
 */
import type { CatalogText, SpecGroup } from "./catalog";

const HOSE_REEL = "Z zaworem i manometrem + 60 m ultralekkiego węża";
const NOZZLES = '1/4" 25° 030–045, 1/4" 40° 030';

const X1_SHORT =
  "Standardowo system bazuje na najnowszej platformie DJI Matrice 400 / M350 RTK, zapewniając stabilną i bezpieczną realizację prac na wysokości do 120 metrów roboczych.";

const X1_DESCRIPTION = [
  "Platforma dronowa: standardowo system bazuje na najnowszej platformie – DJI Matrice 400 / M350 RTK. Rozwiązanie zapewnia stabilną i bezpieczną realizację prac na wysokości do 120 metrów roboczych.",
  "DCS prowadzi również rozwój kolejnej generacji systemów AeroCleaning, obejmujących autonomiczne drony czyszczące przeznaczone do realizacji zadań bez udziału operatora.",
  "Mobilny Moduł Operacyjny DCS: profesjonalny moduł serwisowy został zaprojektowany z myślą o maksymalnej wydajności i wygodzie pracy. Operator może sterować kluczowymi funkcjami systemu bezpośrednio z kontrolera drona, co znacząco usprawnia realizację prac.",
  "Gwarancja 24 miesiące.",
  "DCS Drone Cleaning Solutions – tworzymy standard AeroCleaning dla nowoczesnej branży czyszczenia elewacji.",
];

const X1_FEATURES = {
  title: "Funkcje systemu",
  items: [
    "Automatyczne dozowanie i mieszanie chemii",
    "Aplikacja aktywnej piany",
    "Podgrzewanie wody do 120°C z regulacją na ekranie dotykowym",
    "Podgląd parametrów pracy w czasie rzeczywistym",
    "System demineralizacji wody",
    "Zintegrowana szuflada serwisowa dla drona i akcesoriów",
    "Automatyczny zwijacz przewodu roboczego 220 bar",
    "Pełna integracja z ekosystemem DJI dzięki naszej aplikacji",
  ],
};

const X1_WHY_ITEMS = [
  "Gotowy model biznesowy",
  "Kompletny system operacyjny",
  "Minimalizacja kosztów dostępu do wysokości",
  "Wysoka wydajność realizacji zleceń",
  "Integracja z najnowszą platformą DJI",
  "Możliwość szybkiego skalowania działalności",
];

const ROTOR_GUARD_SHORT =
  "Konstrukcja wykonana jest z karbonu oraz elementów PA, co zapewnia niską masę, wysoką sztywność i odporność na codzienne użytkowanie.";

const ROTOR_GUARD_PROTECTION =
  "Osłony zabezpieczają przednie rotory oraz pełnią funkcję zderzaka, przejmując pierwszy kontakt z przeszkodą. Dzięki temu zmniejszają ryzyko uszkodzenia śmigieł, ramion i osprzętu podczas pracy w trudniejszych warunkach, manewrowania w ograniczonej przestrzeni lub transportu.";

const ROTOR_GUARD_PRACTICAL =
  "To praktyczne rozwiązanie dla operatorów, serwisów i firm, które chcą zwiększyć bezpieczeństwo pracy dronów DJI Matrice 350 RTK i DJI Matrice 400.";

const HOSE_REEL_SHORT =
  "Praktyczne i wygodne rozwiązanie do porządkowego przechowywania oraz sprawnego rozwijania przewodu podczas pracy.";

const hoseReelTested = (length: string) =>
  `Zwijak z wężem ${length} został przetestowany w naszym dziale R&D pod kątem zastosowań AeroCleaning. Weryfikujemy jego funkcjonalność, komfort obsługi oraz niezawodność podczas pracy z systemami czyszczenia dronowego, aby oferować rozwiązania praktyczne i gotowe do pracy w wymagających warunkach.`;

const MOSTFOAM_SHORT =
  "Profesjonalny koncentrat do trudnych zabrudzeń: wysokowydajny, niskopienny koncentrat alkaliczny przeznaczony do profesjonalnego czyszczenia powierzchni odpornych na działanie środków zasadowych.";

const MOSTFOAM_DESCRIPTION = [
  "DCS MOSTFOAM ZERO ONE KILLER to wysokowydajny, niskopienny koncentrat alkaliczny przeznaczony do profesjonalnego czyszczenia powierzchni odpornych na działanie środków zasadowych. Został opracowany z myślą o usuwaniu uporczywych zabrudzeń z pokryć dachowych, ogrodzeń oraz innych trwałych powierzchni zewnętrznych.",
  "Formuła o pH 14 wspiera skuteczne rozpuszczanie zabrudzeń eksploatacyjnych, osadów atmosferycznych i zanieczyszczeń organicznych. Niskopienna charakterystyka produktu ułatwia pracę z urządzeniami czyszczącymi i profesjonalnymi systemami aplikacji.",
  "Preparat należy stosować zgodnie z instrukcją na etykiecie oraz kartą charakterystyki. Produkt ma właściwości żrące – wymagane jest stosowanie odpowiednich środków ochrony osobistej.",
];

const mostfoamFeatures = (volume: string) => ({
  title: "Najważniejsze cechy",
  items: [
    `Koncentrat ${volume} do zastosowań profesjonalnych`,
    "Niskopienna formuła alkaliczna",
    "Skuteczne działanie na trudne zabrudzenia",
    "Przeznaczony do powierzchni odpornych na alkalia",
    "Rekomendowane rozcieńczenie robocze: 1–3%",
    "Produkt polski",
  ],
});

const mostfoamSpecs = (volume: string): SpecGroup[] => [
  {
    title: "Dane produktu",
    rows: [
      { label: "Pojemność", value: volume },
      { label: "Formuła", value: "Niskopienny koncentrat alkaliczny" },
      { label: "pH", value: "14" },
      { label: "Rekomendowane rozcieńczenie robocze", value: "1–3%" },
      { label: "Pochodzenie", value: "Produkt polski" },
    ],
  },
];

const COURSES_FOR =
  "Nasze kursy są skierowane do osób, firm i zespołów, które chcą wejść w zaawansowane zastosowania dronów – od realizacji usług komercyjnych, przez operacje techniczne, aż po wdrażanie nowoczesnych procesów z wykorzystaniem bezzałogowych statków powietrznych.";

export const catalogPl: CatalogText = {
  categories: {
    sets: "Zestawy / Stacje",
    drones: "Drony",
    accessories: "Akcesoria",
    chemicals: "Chemia",
    training: "Szkolenia",
  },

  tiers: {
    mini: {
      alt: "Lanca AeroCleaning DCS X1 MINI",
      rows: [
        { label: "Zbiornik wody", value: false },
        { label: "Sterowanie z poziomu kontrolera lotu", value: true },
        { label: "Zwijacz", value: HOSE_REEL },
        { label: "Demineralizacja", value: false },
      ],
    },
    pro: {
      badge: "Najczęściej wybierany",
      alt: "Mobilny moduł operacyjny DCS X1 PRO",
      rows: [
        { label: "Zbiornik wody", value: "450 l" },
        { label: "Sterowanie z poziomu kontrolera lotu", value: true },
        { label: "Zwijacz", value: HOSE_REEL },
        { label: "Demineralizacja", value: true },
      ],
    },
    maxi: {
      alt: "Mobilna stacja ciśnieniowa DCS X1 MAXI",
      rows: [
        { label: "Zbiornik wody", value: "300 l" },
        { label: "Sterowanie z poziomu kontrolera lotu", value: true },
        { label: "Zwijacz", value: HOSE_REEL },
        { label: "Demineralizacja", value: false },
      ],
    },
  },

  products: {
    // ---------------------------------------------------------------- Zestawy / Stacje
    "dcs-x1-mini": {
      name: "DCS X1 MINI",
      short:
        "System AeroCleaning wyposażony jest w ruchomą lancę czyszczącą, która jest w pełni kompatybilna z platformami DJI Matrice 350 RTK (M350 RTK) oraz DJI Matrice 400 (M400).",
      description: [
        "System AeroCleaning wyposażony jest w ruchomą lancę czyszczącą, która jest w pełni kompatybilna z platformami DJI Matrice 350 RTK (M350 RTK) oraz DJI Matrice 400 (M400). Rozwiązanie zostało w pełni zintegrowane z kontrolerem DJI, umożliwiając sterowanie funkcjami lancy i systemu czyszczącego bezpośrednio z poziomu aparatury operatorskiej.",
        "System współpracuje z myjkami wysokociśnieniowymi o wydajności przepływu wody wynoszącej co najmniej 6 l/min, co pozwala na skuteczną realizację prac czyszczących przy zachowaniu optymalnych parametrów roboczych.",
      ],
      highlights: ["Mycie elewacji", "Fasady budynków", "Panele fotowoltaiczne", "Dezynfekcja powierzchni"],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 3500 m² dziennie" },
            { label: "Zwijacz", value: HOSE_REEL },
            { label: "Dysza pianująca", value: "Tak" },
            { label: "Sterowanie z poziomu kontrolera lotu", value: "Tak" },
            { label: "Komplet dysz roboczych", value: NOZZLES },
          ],
        },
        {
          title: "Wydajność i pokrycie",
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 3500 m² dziennie" },
          ],
        },
        {
          title: "System natryskowy",
          rows: [
            { label: "Zwijacz", value: HOSE_REEL },
            { label: "Dysza pianująca", value: "Tak" },
            { label: "Komplet dysz roboczych", value: NOZZLES },
            { label: "Ceramiczna dysza rotacyjna szerokokątna", value: "Tak" },
            { label: "Karbonowa lanca z ruchomą głowicą", value: "Tak, ±50°" },
          ],
        },
        {
          title: "Dron oraz sterowanie",
          rows: [
            { label: "Sterowanie z poziomu kontrolera lotu", value: "Tak" },
            { label: "Osłony przednich rotorów do drona", value: "Tak" },
          ],
        },
      ],
      alt: "Lanca AeroCleaning DCS X1 MINI z ruchomą głowicą natryskową",
    },
    "dcs-x1-pro": {
      name: "DCS X1 PRO",
      short: X1_SHORT,
      description: X1_DESCRIPTION,
      lists: [X1_FEATURES, { title: "Dlaczego DCS X1 PRO?", items: X1_WHY_ITEMS }],
      highlights: [
        "Fasady budynków",
        "Mycie elewacji",
        "Panele fotowoltaiczne",
        "Dezynfekcja powierzchni",
        "Inspekcje i pomiary",
        "Szkolenie operatorów",
      ],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 1000 m² dziennie" },
            { label: "Ciśnienie robocze", value: "30–220 bar" },
            { label: "Moc pompy", value: "4 kW" },
            { label: "Zbiornik wody", value: "450 l" },
            { label: "DJI Matrice", value: "400" },
          ],
        },
        {
          title: "Wydajność i pokrycie",
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 1000 m² dziennie" },
          ],
        },
        {
          title: "System natryskowy",
          rows: [
            { label: "Zwijacz", value: HOSE_REEL },
            { label: "Zbiornik wody", value: "450 l" },
            { label: "Dysza pianująca", value: "Tak" },
            { label: "Zbiornik chemii", value: "60 l" },
            { label: "Ciśnienie robocze", value: "30–220 bar" },
            { label: "Podgrzewanie wody do", value: "120°C" },
            { label: "Sterowanie poziomem wody", value: "Tak" },
            { label: "Zwijacze z przewodami", value: "20 m i 60 m" },
            { label: "Komplet dysz roboczych", value: NOZZLES },
            { label: "Ceramiczna dysza rotacyjna szerokokątna", value: "Tak" },
            { label: "Karbonowa lanca z ruchomą głowicą", value: "±50°" },
            { label: "Automatyczne mieszanie wody z detergentem", value: "Tak" },
          ],
        },
        {
          title: "Zasilanie i pompa",
          rows: [
            { label: "Moc pompy", value: "4 kW" },
            { label: "Zasilanie", value: "400 V" },
            { label: "Ceramiczne tłoki zwiększające żywotność", value: "Tak" },
          ],
        },
        {
          title: "Dron oraz sterowanie",
          rows: [
            { label: "Akumulator", value: "2 x TB100" },
            { label: "DJI Matrice", value: "400" },
            { label: "Pakiet DJI Care", value: "Tak" },
            { label: "Stacja ładowania", value: "BS100" },
            { label: "Sterowanie z poziomu kontrolera lotu", value: "Tak" },
            { label: "Osłony przednich rotorów do drona", value: "M350 RTK / Matrice 400" },
            { label: "Kontroler lotu", value: "RC Plus 2 Enterprise" },
            { label: "Zabezpieczenia termiczne chroniące układ", value: "Tak" },
          ],
        },
        {
          title: "Wyposażenie operacyjne",
          rows: [
            { label: "Szuflada serwisowa", value: "Tak" },
            { label: "Demineralizacja wody – wydajność", value: "10 000 l" },
            { label: "Przystosowanie do pracy ciągłej", value: "Tak" },
            { label: "System filtracji i demineralizacji", value: "Tak" },
          ],
        },
        {
          title: "Wymagania wdrożeniowe",
          rows: [
            { label: "Poziom hałasu", value: "78 dB" },
            { label: "Średni koszt środków czyszczących", value: "0,17 EUR/m²" },
            { label: "Demineralizacja – koszt nowego wkładu żywicznego", value: "około 200 EUR" },
          ],
        },
      ],
      alt: "Mobilny moduł operacyjny DCS X1 PRO ze zwijaczem węża",
    },
    "dcs-x1-maxi": {
      name: "DCS X1 MAXI",
      short: X1_SHORT,
      description: X1_DESCRIPTION,
      lists: [X1_FEATURES, { title: "Dlaczego DCS X1?", items: X1_WHY_ITEMS }],
      highlights: ["Mycie elewacji", "Fasady budynków", "Panele fotowoltaiczne", "Dezynfekcja powierzchni", "Szkolenie operatorów"],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 1000 m² dziennie" },
            { label: "Zbiornik wody", value: "300 l" },
            { label: "DJI Matrice", value: "400" },
            { label: "Zasilanie", value: "400 V" },
            { label: "Zwijacz", value: HOSE_REEL },
          ],
        },
        {
          title: "Wydajność i pokrycie",
          rows: [
            { label: "Powierzchnie szklane", value: "do 3500 m² dziennie" },
            { label: "Elewacje mineralne", value: "do 1000 m² dziennie" },
          ],
        },
        {
          title: "System natryskowy",
          rows: [
            { label: "Zwijacz", value: HOSE_REEL },
            { label: "Zbiornik wody", value: "300 l" },
            { label: "Dysza pianująca", value: "Tak" },
            { label: "Zbiornik chemii", value: "60 l" },
            { label: "Podgrzewanie wody do", value: "120°C" },
            { label: "Zwijacze z przewodami", value: "20 m i 60 m" },
            { label: "Komplet dysz roboczych", value: NOZZLES },
            { label: "Ceramiczna dysza rotacyjna szerokokątna", value: "Tak" },
            { label: "Karbonowa lanca z ruchomą głowicą", value: "±50°" },
            { label: "Automatyczne mieszanie wody z detergentem", value: "Tak" },
          ],
        },
        {
          title: "Zasilanie i pompa",
          rows: [{ label: "Zasilanie", value: "400 V" }],
        },
        {
          title: "Dron oraz sterowanie",
          rows: [
            { label: "Akumulator", value: "2 x TB100" },
            { label: "DJI Matrice", value: "400" },
            { label: "Pakiet DJI Care", value: "Tak" },
            { label: "Stacja ładowania", value: "BS100" },
            { label: "Sterowanie z poziomu kontrolera lotu", value: "Tak" },
            { label: "Osłony przednich rotorów do drona", value: "M350 RTK / Matrice 400" },
            { label: "Kontroler lotu", value: "RC Plus 2 Enterprise" },
          ],
        },
        {
          title: "Wymagania wdrożeniowe",
          rows: [{ label: "Średni koszt środków czyszczących", value: "0,17 EUR/m²" }],
        },
      ],
      alt: "Mobilna stacja ciśnieniowa DCS X1 MAXI",
    },

    // ---------------------------------------------------------------- Drony
    "dji-matrice-350-rtk": {
      name: "DJI Matrice 350 RTK",
      short:
        "Zaawansowana platforma dronowa klasy enterprise, zaprojektowana do wymagających operacji profesjonalnych: do 55 minut lotu, pozycjonowanie RTK i sześciokierunkowy system wykrywania przeszkód.",
      description: [
        "DJI Matrice 350 RTK to zaawansowana platforma dronowa klasy enterprise, zaprojektowana do wymagających operacji profesjonalnych. Oferuje do 55 minut lotu, pozycjonowanie RTK, transmisję DJI O3 Enterprise oraz sześciokierunkowy system wykrywania przeszkód, zapewniający wysoki poziom bezpieczeństwa podczas pracy.",
        "Konstrukcja o klasie ochrony IP55 umożliwia realizację misji w wymagających warunkach terenowych. Matrice 350 RTK współpracuje z szeroką gamą kamer, czujników i urządzeń specjalistycznych, dzięki czemu sprawdza się w inspekcjach, pomiarach, mapowaniu, działaniach ratowniczych oraz operacjach przemysłowych.",
      ],
      specGroups: [],
      alt: "Dron DJI Matrice 350 RTK klasy enterprise",
    },
    "dji-matrice-400": {
      name: "DJI Matrice 400",
      short:
        "Flagowa platforma dronowa DJI klasy enterprise, zaprojektowana do najbardziej wymagających operacji profesjonalnych: do 59 minut lotu, udźwig do 6 kg i konstrukcja o klasie ochrony IP55.",
      description: [
        "DJI Matrice 400 to flagowa platforma dronowa klasy enterprise, zaprojektowana do najbardziej wymagających operacji profesjonalnych. Oferuje do 59 minut lotu, udźwig do 6 kg oraz konstrukcję o klasie ochrony IP55, umożliwiającą pracę w wymagającym środowisku.",
        "Zaawansowany system wykrywania przeszkód, wykorzystujący obrotowy LiDAR i radar mmWave, zwiększa bezpieczeństwo realizowanych misji. Platforma obsługuje transmisję DJI O4 Enterprise Enhanced oraz szeroką gamę kamer, czujników i urządzeń specjalistycznych, dzięki czemu sprawdza się w inspekcjach, mapowaniu, działaniach ratowniczych, budownictwie oraz operacjach przemysłowych.",
      ],
      highlights: [
        "Inspekcje i pomiary",
        "Szkolenie operatorów",
        "Dezynfekcja powierzchni",
        "Panele fotowoltaiczne",
        "Fasady budynków",
        "Mycie elewacji",
      ],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Typ", value: "Dron profesjonalny" },
            { label: "Marka", value: "DJI" },
            { label: "Model", value: "Matrice 400" },
          ],
        },
      ],
      alt: "Dron DJI Matrice 400 klasy enterprise",
    },

    // ---------------------------------------------------------------- Akcesoria
    "front-rotor-guards-dji-matrice-350-rtk": {
      name: "Osłony przednich rotorów DJI Matrice 350 RTK",
      short: ROTOR_GUARD_SHORT,
      description: [
        "Oferujemy dwa modele osłon przednich rotorów, dedykowane do dronów DJI Matrice 350 RTK. Konstrukcja wykonana jest z karbonu oraz elementów PA, co zapewnia niską masę, wysoką sztywność i odporność na codzienne użytkowanie.",
        ROTOR_GUARD_PROTECTION,
        "Lekka i sztywna osłona dopasowana do konstrukcji DJI 350. Chroni przednie rotory bez nadmiernego obciążania drona. Maksymalna rozpiętość: 600 mm.",
        ROTOR_GUARD_PRACTICAL,
      ],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Materiały", value: "Karbon + PA + PPGB" },
            { label: "Dedykowane dla", value: "DJI Matrice 350 RTK" },
            { label: "Funkcja zderzaka", value: "Tak" },
            { label: "Ochrona przednich rotorów", value: "Tak" },
          ],
        },
      ],
      alt: "Karbonowe osłony przednich rotorów DCS do DJI Matrice 350 RTK",
    },
    "front-rotor-guards-dji-matrice-400": {
      name: "Osłony przednich rotorów DJI Matrice 400",
      short: ROTOR_GUARD_SHORT,
      description: [
        "Oferujemy dwa modele osłon przednich rotorów, dedykowane do dronów DJI Matrice 350 RTK i DJI Matrice 400. Konstrukcja wykonana jest z karbonu oraz elementów PA, co zapewnia niską masę, wysoką sztywność i odporność na codzienne użytkowanie.",
        ROTOR_GUARD_PROTECTION,
        ROTOR_GUARD_PRACTICAL,
      ],
      specGroups: [
        {
          title: "Parametry krytyczne",
          critical: true,
          rows: [
            { label: "Materiały", value: "Karbon + PA + PPGB" },
            { label: "Dedykowane dla", value: "DJI Matrice 400" },
            { label: "Funkcja zderzaka", value: "Tak" },
            { label: "Ochrona przednich rotorów", value: "Tak" },
          ],
        },
      ],
      alt: "Karbonowe osłony przednich rotorów DCS do DJI Matrice 400",
    },
    "battery-tb65-dji-matrice-350-rtk": {
      name: "Akumulator TB65 do DJI Matrice 350 RTK",
      short: "Wysokowydajny akumulator litowo-polimerowy.",
      description: [],
      specGroups: [],
      alt: "Inteligentny akumulator lotniczy DJI TB65",
    },
    "battery-tb100-dji-matrice-400": {
      name: "Akumulator Pro TB100 do DJI Matrice 400",
      short: "Wysokowydajny akumulator litowo-polimerowy zapewniający do 50 minut lotu.",
      description: [],
      specGroups: [],
      alt: "Inteligentny akumulator lotniczy DJI TB100",
    },
    "tank-450l": {
      name: "Zbiornik 450 l",
      short: "Zbiornik o pojemności 450 l zapewnia niezawodny zapas wody roboczej dla profesjonalnych operacji AeroCleaning.",
      description: [
        "Zbiornik o pojemności 450 l zapewnia niezawodny zapas wody roboczej dla profesjonalnych operacji AeroCleaning. Jego trwała i kompaktowa konstrukcja wspiera efektywne magazynowanie oraz wygodny dostęp do wody podczas czyszczenia elewacji, obiektów przemysłowych i instalacji fotowoltaicznych.",
        "Duża pojemność 450 l pozwala ograniczyć liczbę przerw technicznych związanych z uzupełnianiem medium, zwiększając ciągłość pracy zespołu i efektywność realizacji zleceń w terenie. Zbiornik dobrze sprawdza się jako element mobilnego modułu operacyjnego, wyposażenia serwisowego lub stacji wspierającej pracę systemów dronowych.",
        "Solidna konstrukcja zapewnia stabilność podczas transportu i użytkowania, a prosta forma ułatwia integrację z instalacją hydrauliczną, pompą, systemem filtracji oraz układem dozowania chemii. Konstrukcja została opracowana tak, aby umożliwić wygodną obsługę, szybki dostęp do medium i łatwe utrzymanie zbiornika w czystości.",
        "To praktyczne rozwiązanie dla firm realizujących profesjonalne usługi AeroCleaning, które potrzebują niezawodnego zapasu medium roboczego oraz sprawnie zorganizowanego zaplecza technicznego.",
      ],
      specGroups: [],
      alt: "Zbiornik na wodę 450 l",
    },
    "tank-60l": {
      name: "Zbiornik 60 l",
      short:
        "Zbiornik o pojemności 60 l to praktyczne i uniwersalne rozwiązanie przeznaczone do zastosowań, w których liczy się niezawodne magazynowanie medium oraz wygoda użytkowania.",
      description: [
        "Zbiornik o pojemności 60 l to praktyczne i uniwersalne rozwiązanie przeznaczone do zastosowań, w których liczy się niezawodne magazynowanie medium oraz wygoda użytkowania. Kompaktowa konstrukcja ułatwia montaż i organizację przestrzeni, a pojemność 60 litrów sprawia, że produkt dobrze sprawdza się zarówno w zastosowaniach domowych, jak i technicznych.",
        "Produkt został zaprojektowany z myślą o funkcjonalności, trwałości oraz bezpiecznym użytkowaniu. Starannie wykonana forma sprzyja stabilnej pracy i wygodnej obsłudze, a prosta konstrukcja ułatwia utrzymanie zbiornika w czystości. To praktyczny wybór wszędzie tam, gdzie potrzebny jest solidny i pojemny zbiornik o uniwersalnym przeznaczeniu.",
        "Dzięki swojej wszechstronności zbiornik 60 l może stanowić wygodne uzupełnienie wyposażenia w wielu różnych zastosowaniach. To rozwiązanie dla osób poszukujących produktu o prostym, funkcjonalnym charakterze i odpowiedniej pojemności do codziennego użytku.",
      ],
      specGroups: [],
      alt: "Zbiornik 60 l",
    },
    "hose-reel-60m": {
      name: "Zwijak z wężem 60 m",
      short: HOSE_REEL_SHORT,
      description: [
        "Zwijak z wężem o długości 60 m to praktyczne i wygodne rozwiązanie do porządkowego przechowywania oraz sprawnego rozwijania przewodu podczas pracy. Ułatwia codzienne użytkowanie, pomaga utrzymać ład w miejscu pracy i zapewnia szybki dostęp do węża wtedy, gdy jest potrzebny.",
        "Solidna konstrukcja wspiera bezpieczne użytkowanie, a odpowiednio zaprojektowany mechanizm zwijania zwiększa komfort obsługi i ogranicza plątanie się przewodu.",
        hoseReelTested("60 m"),
      ],
      specGroups: [],
      alt: "Zwijak z wężem 60 m z zaworem i manometrem",
    },
    "hose-reel-120m": {
      name: "Zwijak z wężem 120 m",
      short: HOSE_REEL_SHORT,
      description: [
        "Zwijak z wężem o długości 120 m to praktyczne i wygodne rozwiązanie do porządkowego przechowywania oraz sprawnego rozwijania przewodu podczas pracy. Ułatwia codzienne użytkowanie, pomaga utrzymać ład w miejscu pracy i zapewnia szybki dostęp do węża wtedy, gdy jest potrzebny. Solidna konstrukcja wspiera bezpieczne użytkowanie, a odpowiednio zaprojektowany mechanizm zwijania zwiększa komfort obsługi i ogranicza plątanie się przewodu.",
        hoseReelTested("120 m"),
      ],
      specGroups: [],
      alt: "Zwijak z wężem 120 m z zaworem i manometrem",
    },
    "nozzle-set": {
      name: "Zestaw dysz",
      short:
        "Zestaw dysz przeznaczony do różnorodnych zastosowań związanych z myciem ciśnieniowym, zapewniający wygodny dobór odpowiedniego strumienia do konkretnego zadania.",
      description: [
        "Zestaw dysz przeznaczony do różnorodnych zastosowań związanych z myciem ciśnieniowym, zapewniający wygodny dobór odpowiedniego strumienia do konkretnego zadania. W komplecie znajdują się dysze o kącie pracy 25° i 40°, dysza pianująca oraz ceramiczna, rotacyjna, szeroka dysza, co pozwala na precyzyjne dopasowanie intensywności i charakteru natrysku.",
        'Dysze o parametrach 1/4" 25° 030–045 oraz 1/4" 40° 030 sprawdzą się podczas prac wymagających skutecznego czyszczenia różnych powierzchni, a dysza pianująca umożliwia równomierne nakładanie preparatów czyszczących. Ceramiczna, rotacyjna, szeroka dysza została zaprojektowana z myślą o efektywnym myciu przy zachowaniu wysokiej trwałości i komfortu użytkowania.',
        "To praktyczne rozwiązanie dla użytkowników oczekujących uniwersalności, solidnego wykonania oraz możliwości szybkiego dopasowania dyszy do rodzaju wykonywanej pracy.",
      ],
      lists: [
        {
          title: "Dysze w zestawie",
          items: ['1/4" 25° 030–045', '1/4" 40° 030', "Dysza pianująca", "Ceramiczna, rotacyjna, szeroka dysza"],
        },
      ],
      specGroups: [],
      alt: "Zestaw dysz roboczych DCS",
    },

    // ---------------------------------------------------------------- Chemia
    "mostfoam-zero-one-killer-10l": {
      name: "DCS MOSTFOAM ZERO ONE KILLER 10L",
      short: MOSTFOAM_SHORT,
      description: MOSTFOAM_DESCRIPTION,
      lists: [mostfoamFeatures("10 l")],
      specGroups: mostfoamSpecs("10 l"),
      alt: "Kanister DCS MOSTFOAM ZERO ONE KILLER 10 l",
    },
    "mostfoam-zero-one-killer-25l": {
      name: "DCS MOSTFOAM ZERO ONE KILLER 25L",
      short: MOSTFOAM_SHORT,
      description: MOSTFOAM_DESCRIPTION,
      lists: [mostfoamFeatures("25 l")],
      specGroups: mostfoamSpecs("25 l"),
      alt: "Kanister DCS MOSTFOAM ZERO ONE KILLER 25 l",
    },

    // ---------------------------------------------------------------- Szkolenia
    "sts-01-training": {
      name: "Szkolenie STS-01",
      short:
        "Szkolenie dla początkujących pilotów: przygotowanie do operacji dronowych w zasięgu wzroku operatora (VLOS) i dobry start w profesjonalnych zastosowaniach dronów.",
      description: [
        "Szkolenie dla początkujących pilotów przygotowujące do operacji dronowych w zasięgu wzroku operatora (VLOS). Dobry start w profesjonalnych zastosowaniach dronów.",
        COURSES_FOR,
      ],
      lists: [
        {
          title: "Program szkolenia",
          items: [
            "Teoria lotów VLOS",
            "Przepisy i regulacje UE",
            "Planowanie misji",
            "Procedury bezpieczeństwa",
            "Praktyczne ćwiczenia lotów",
            "Egzamin teoretyczny i praktyczny",
          ],
        },
      ],
      specGroups: [
        {
          title: "Dane szkolenia",
          rows: [
            { label: "Scenariusz", value: "STS-01" },
            { label: "Rodzaj operacji", value: "W zasięgu wzroku (VLOS)" },
            { label: "Dla kogo", value: "Początkujący piloci" },
          ],
        },
      ],
      alt: "Odznaka szkolenia STS-01",
    },
    "sts-02-training": {
      name: "Szkolenie STS-02",
      short:
        "Zaawansowane szkolenie dla operatorów chcących wykonywać loty poza zasięgiem wzroku (BVLOS) – wiedza i umiejętności praktyczne wymagane do złożonych operacji przemysłowych i komercyjnych.",
      description: [
        "Zaawansowane szkolenie dla operatorów chcących wykonywać loty poza zasięgiem wzroku. Zapewnia wiedzę i umiejętności praktyczne wymagane do złożonych operacji przemysłowych i komercyjnych.",
        COURSES_FOR,
      ],
      lists: [
        {
          title: "Program szkolenia",
          items: [
            "Teoria lotów BVLOS",
            "Zaawansowane planowanie misji",
            "Systemy zarządzania ryzykiem",
            "Komunikacja z kontrolą lotów",
            "Procedury awaryjne",
            "Certyfikacja BVLOS",
          ],
        },
      ],
      specGroups: [
        {
          title: "Dane szkolenia",
          rows: [
            { label: "Scenariusz", value: "STS-02" },
            { label: "Rodzaj operacji", value: "Poza zasięgiem wzroku (BVLOS)" },
            { label: "Poziom", value: "Zaawansowany" },
          ],
        },
      ],
      alt: "Odznaka szkolenia STS-02",
    },
  },

  showcase: {
    m350: {
      kicker: "Matrice 350",
      title: "Matrice 350 z osłonami rotorów i systemem AeroCleaning",
      body: "Dron został wyposażony w nasze przednie osłony rotorów wykonane z karbonu oraz komponentów drukowanych 3D z włóknem węglowym, które zwiększają ochronę kluczowych elementów platformy podczas pracy w ograniczonej przestrzeni. Zintegrowana lanca czyszcząca z ruchomą, zdalnie sterowaną głowicą umożliwia precyzyjne kierowanie strumieniem wody bezpośrednio z aparatury operatorskiej.",
    },
    m400: {
      kicker: "Matrice 400",
      title: "Matrice 400 z osłonami rotorów i systemem AeroCleaning",
      body: "Ta sama ochrona i lanca na flagowej platformie DJI klasy enterprise. Przednie osłony rotorów z karbonu i wzmacnianych komponentów drukowanych 3D oraz zdalnie sterowana głowica natryskowa. To rozwiązanie pozwala skuteczniej prowadzić mycie pionowych powierzchni, ograniczać ryzyko pracy na wysokości oraz zwiększać wydajność realizowanych zleceń.",
    },
    lance: {
      kicker: "System AeroCleaning",
      title: "System AeroCleaning – Lanca",
      body: "Zintegrowana lanca czyszcząca z ruchomą, zdalnie sterowaną głowicą umożliwia precyzyjne kierowanie strumieniem wody bezpośrednio z aparatury operatorskiej. Pozwala skuteczniej prowadzić mycie pionowych powierzchni, ograniczać ryzyko pracy na wysokości oraz zwiększać wydajność realizowanych zleceń.",
    },
  },

  copy: {
    title: "Katalog systemów",
    hero: {
      eyebrow: "System czyszczenia dronem DCS",
      title: "Kompletny system mycia z powietrza.",
      lede: "DCS to nie pojedyncze produkty, lecz dobrana całość: stacja natryskowa, dron, akcesoria i chemia. Wybierz poziom systemu, a my pomożemy skonfigurować zestaw pod Twój obiekt.",
      alt: "Stacja natryskowa DCS X1 PRO ze zwijaczami węży i panelem sterowania, zamontowana w samochodzie serwisowym",
    },
    intro: {
      eyebrow: "System DCS",
      title: "Nie pojedynczy produkt, lecz dobrana całość.",
      body: [
        "Dron został wyposażony w nasze przednie osłony rotorów wykonane z karbonu oraz komponentów drukowanych 3D z włóknem węglowym, które zwiększają ochronę kluczowych elementów platformy podczas pracy w ograniczonej przestrzeni.",
        "Zintegrowana lanca czyszcząca z ruchomą, zdalnie sterowaną głowicą umożliwia precyzyjne kierowanie strumieniem wody bezpośrednio z aparatury operatorskiej. To rozwiązanie pozwala skuteczniej prowadzić mycie pionowych powierzchni, ograniczać ryzyko pracy na wysokości oraz zwiększać wydajność realizowanych zleceń.",
      ],
      checklist: [
        "100% kompatybilne, dobrane komponenty systemu",
        "Oferty B2B i wsparcie dla firm oraz operatorów",
        "Szkolenia: wdrożenie i przygotowanie zespołu do pracy",
      ],
    },
    showcase: {
      eyebrow: "Interaktywny podgląd 3D",
      title: "Zobacz drony DCS w trzech wymiarach.",
      lede: "Obróć model, przybliż detale osłon czy lancy.",
    },
    tiers: {
      eyebrow: "Wybierz poziom systemu",
      title: "Trzy konfiguracje dopasowane do skali działalności.",
      lede: "Od wejścia w usługi po obiekty przemysłowe.",
    },
    products: {
      eyebrow: "Pełny katalog",
      title: "Stacje, drony, akcesoria i chemia.",
      lede: "Filtruj według kategorii i poznaj szczegóły każdego elementu.",
    },
    configurator: {
      eyebrow: "Konfigurator",
      title: "Skonfiguruj system i zapytaj o ofertę.",
      lede: "Odpowiedz na kilka pytań – przygotujemy propozycję dopasowaną do Twojego obiektu.",
    },
    contact: {
      eyebrow: "Wolisz porozmawiać?",
      title: "Zadzwoń, a skonfigurujemy system razem.",
      lede: "Biuro i dział sprzedaży pracują od poniedziałku do piątku w godzinach 8:00–18:00.",
      cta: "Skontaktuj się z nami",
    },
    product: {
      configure: "Nie wiesz, co wybrać? Zadamy kilka pytań i dobierzemy kompletny system pod Twój obiekt.",
      compare: {
        eyebrow: "Wybór modelu",
        title: "Porównaj modele X1.",
        lede: "Zobacz różnice w jednym miejscu – bez wracania do katalogu.",
      },
      deployment: {
        eyebrow: "Wdrożenie",
        title: "Kupujesz nie tylko urządzenie, kupujesz gotowość operacyjną.",
        lede: "Prowadzimy od doboru konfiguracji, przez szkolenie zespołu, aż po pełną gotowość do realizacji zleceń.",
        steps: [
          {
            title: "Dobór i audyt",
            body: "Analizujemy typ powierzchni, wysokość i dostęp do obiektu, a następnie dobieramy konfigurację systemu pod realne zlecenia.",
          },
          {
            title: "Szkolenie operatorów",
            body: "Przygotowujemy zespół do bezpiecznej i wydajnej pracy: obsługa drona, modułu natryskowego i procedury BHP na wysokości.",
          },
          {
            title: "Gotowość operacyjna",
            body: "Przekazujemy kompletny, gotowy do pracy system wraz ze wsparciem serwisowym i dostępem do materiałów eksploatacyjnych.",
          },
        ],
      },
      related: {
        eyebrow: "Kompatybilność i dobór",
        title: "Elementy, które tworzą kompletny, działający system.",
      },
      contact: {
        eyebrow: "Konfiguracja na zapytanie",
        title: "Skonfiguruj system i zapytaj o ofertę.",
        lede: "Odpowiedz na kilka pytań w konfiguratorze, a przygotujemy propozycję dopasowaną do Twojego obiektu.",
        cta: "Otwórz konfigurator",
      },
    },
  },
};
