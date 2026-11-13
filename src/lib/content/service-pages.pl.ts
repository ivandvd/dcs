import { contacts } from "@/lib/site";
import type { ServicePage } from "./service-pages";

/**
 * Polish service pages – mirrors service-pages.en.ts (same order, slugs, images, icons and hrefs).
 * The text follows the client's own Polish pages (incoming/scrape/pl/{cleaning,disinfection,inspection,training,franchise}.txt)
 * wherever a block exists there, with light grammar fixes; the rest of our (richer) English copy is translated.
 */
export const servicePagesPl: ServicePage[] = [
  {
    slug: "cleaning",
    metaTitle: "Mycie dronem",
    metaDescription:
      "Profesjonalne mycie fasad, dachów i powierzchni budynków z wykorzystaniem zaawansowanej technologii dronowej. Bezpiecznie, szybko, efektywnie.",
    eyebrow: "Mycie dronem",
    title: "Rewolucyjne czyszczenie bez rusztowań.",
    lede: "Profesjonalne mycie fasad, dachów i powierzchni budynków z wykorzystaniem zaawansowanej technologii dronowej. Bezpiecznie, szybko, efektywnie.",
    image: "/images/heroes/cleaning.jpg",
    alt: "Dron DCS spłukujący pianę z elewacji",
    actions: [
      { label: "Zapytaj o wycenę", href: "/contact", variant: "lime" },
      { label: "Poznaj technologię", href: "/technology", variant: "white" },
    ],
    features: {
      eyebrow: "Dlaczego mycie dronem?",
      title: "Odkryj zalety czyszczenia dronem dla Twojego budynku.",
      lede: "Wszystko, co daje tradycyjny dostęp do elewacji – ale bez rusztowań, ryzyka i tygodni utrudnień.",
      items: [
        {
          icon: "zap",
          title: "Szybkość",
          body: "Dron dociera do strefy pracy w kilka minut. Nie trzeba stawiać rusztowań, ustawiać podnośnika ani przygotowywać stanowisk dla alpinistów: zespół zaczyna myć elewację tego samego dnia, w którym przyjeżdża na miejsce.",
          detail: "Start tego samego dnia",
        },
        {
          icon: "award",
          title: "Gwarancja",
          body: "Po zakończeniu prac sprawdzamy i dokumentujemy każdą powierzchnię. Jeśli któryś fragment nie spełnia uzgodnionego standardu, wracamy i poprawiamy go bez dodatkowych kosztów.",
          detail: "Gwarancja 100% satysfakcji",
        },
        {
          icon: "sparkles",
          title: "Efektywność",
          body: "Oczyszczona woda, regulowane ciśnienie i zdalnie sterowana dysza dają równy efekt bez smug – na szkle, panelach kompozytowych i elewacjach mineralnych.",
          detail: "Efekt bez smug",
        },
        {
          icon: "users",
          title: "Zespół ekspercki",
          body: "Specjaliści, którzy myli prawdziwe elewacje, a nie tylko latali dronami. Zanim rozpylą pierwszy litr, oceniają budynek, wiatr i powierzchnię.",
          detail: "Doświadczenie w myciu elewacji",
        },
        {
          icon: "badgeCheck",
          title: "Profesjonalizm",
          body: "Certyfikowani operatorzy, planowanie lotów, strefy wyznaczone geofencingiem i udokumentowana procedura dla każdego obiektu – zgodnie z przepisami UE.",
          detail: "Operatorzy STS-01 / STS-02",
        },
        {
          icon: "shield",
          title: "Bezpieczeństwo",
          body: "Nikt nie pracuje na wysokości. Na górę wznosi się dron, a zespół pozostaje na ziemi i ma pełną kontrolę wizualną nad całym procesem.",
          detail: "Zero pracy na wysokości",
        },
      ],
    },
    list: {
      eyebrow: "Zastosowania",
      title: "Mycie dronem dla każdego typu obiektu.",
      lede: "Od szklanych wieżowców po zabytkowe fasady – konfigurację dopasowujemy do powierzchni.",
      items: [
        { title: "Budynki biurowe", body: "Czyszczenie wysokościowych fasad szklanych i metalowych." },
        { title: "Centra handlowe", body: "Pielęgnacja elewacji i powierzchni dużych obiektów." },
        { title: "Obiekty przemysłowe", body: "Przygotowanie do inspekcji i konserwacji." },
        { title: "Elektrownie", body: "Czyszczenie paneli i struktur wysokonapięciowych." },
        { title: "Obiekty historyczne", body: "Delikatne mycie zabytkowych fasad." },
        { title: "Infrastruktura", body: "Mosty, wiadukty i obiekty transportowe." },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Cztery kroki do idealnie czystego budynku.",
      steps: [
        { title: "Analiza obiektu", body: "Ocena stanu powierzchni i planowanie zakresu prac." },
        { title: "Przygotowanie", body: "Przygotowanie drona i wybór optymalnych parametrów." },
        { title: "Mycie", body: "Profesjonalne czyszczenie z precyzją milimetrową." },
        { title: "Kontrola jakości", body: "Profesjonalna inspekcja i dokumentacja rezultatów." },
      ],
    },
  },
  {
    slug: "disinfection",
    metaTitle: "Dezynfekcja dronem",
    metaDescription:
      "Bezpieczne i efektywne dezynfekowanie dużych przestrzeni z wykorzystaniem zaawansowanej technologii aerozolu. Idealne dla biur, szpitali, szkół i fabryk.",
    eyebrow: "Dezynfekcja dronem",
    title: "Profesjonalna dezynfekcja dronem.",
    lede: "Bezpieczne i efektywne dezynfekowanie dużych przestrzeni z wykorzystaniem zaawansowanej technologii aerozolu. Idealne dla biur, szpitali, szkół i fabryk.",
    image: "/images/heroes/disinfection-v2.jpg",
    alt: "Dron DCS dezynfekujący budynek szpitala z zewnątrz",
    actions: [
      { label: "Zapytaj o wycenę", href: "/contact", variant: "lime" },
      { label: "Wszystkie rozwiązania", href: "/solutions", variant: "white" },
    ],
    features: {
      eyebrow: "Zalety dezynfekcji dronem",
      title: "Najskuteczniejsza metoda ochrony zdrowia.",
      lede: "Środek rozpylany z powietrza równomiernie i szybko pokrywa całe obiekty, a operatorzy pozostają poza strefą zabiegu.",
      items: [
        {
          icon: "droplet",
          title: "Eliminacja patogenów",
          body: "Aerozol osiada cienką, równą warstwą, więc środek dezynfekujący dociera do miejsc pomijanych przy ręcznym przecieraniu: okuć, krawędzi i materiałów o wyraźnej fakturze.",
          detail: "Skuteczność 99,9%",
        },
        {
          icon: "clock",
          title: "Szybkość",
          body: "Duże hale, parkingi i całe elewacje dezynfekujemy podczas jednej sesji zamiast przez wiele dni ręcznej pracy.",
          detail: "Godziny, nie dni",
        },
        {
          icon: "layers",
          title: "Penetracja",
          body: "Ponieważ środek unosi się w powietrzu, z taką samą równomiernością pokrywa wysokie stropy, trudno dostępne narożniki i konstrukcje zewnętrzne.",
          detail: "Każda powierzchnia",
        },
        {
          icon: "award",
          title: "Certyfikacja",
          body: "Środki i procedury zgodne z normami europejskimi. Dokumentujemy, co, gdzie i kiedy zostało zastosowane.",
          detail: "Normy UE",
        },
        {
          icon: "shield",
          title: "Bezpieczeństwo",
          body: "Operatorzy pozostają poza strefą zabiegu, a przestrzeń zostaje udostępniona dopiero po upływie określonego czasu kontaktu.",
          detail: "Strefa kontrolowana",
        },
        {
          icon: "target",
          title: "Dokładność",
          body: "Dawkowanie, przepływ i pokrycie są monitorowane w trakcie operacji i zapisywane w raporcie końcowym.",
          detail: "Udokumentowane pokrycie",
        },
      ],
    },
    list: {
      eyebrow: "Zastosowania",
      title: "Dezynfekcja dla każdego sektora.",
      items: [
        { title: "Biura i centra handlowe", body: "Dezynfekcja powierzchni publicznych i wspólnych." },
        { title: "Szpitale i kliniki", body: "Sterylizacja szpitalnych powierzchni." },
        { title: "Szkoły i uczelnie", body: "Ochrona zdrowia studentów i pracowników." },
        { title: "Hotele i restauracje", body: "Bezpieczeństwo gości i personelu." },
        { title: "Fabryki i magazyny", body: "Ochrona produktów i pracowników." },
        { title: "Transport", body: "Dezynfekcja pojazdów i stacji." },
      ],
    },
  },
  {
    slug: "inspection",
    metaTitle: "Inspekcja dronem",
    metaDescription:
      "Zaawansowana inspekcja wizualna i termiczna dla budynków, infrastruktury i instalacji. Pełna dokumentacja i raport ekspercki.",
    eyebrow: "Nadzór dronem",
    title: "Profesjonalna inspekcja dronem.",
    lede: "Zaawansowana inspekcja wizualna i termiczna dla budynków, infrastruktury i instalacji. Pełna dokumentacja i raport ekspercki.",
    image: "/images/heroes/inspection.jpg",
    alt: "Dron DCS podczas inspekcji elewacji obok okna",
    actions: [
      { label: "Zarezerwuj inspekcję", href: "/contact", variant: "lime" },
      { label: "Wszystkie rozwiązania", href: "/solutions", variant: "white" },
    ],
    features: {
      eyebrow: "Zalety inspekcji dronem",
      title: "Najskuteczniejsza metoda diagnostyki budynków.",
      lede: "Poznaj stan elewacji, dachu lub konstrukcji w ciągu kilku godzin – z dokumentacją, na której oprzesz konkretne decyzje.",
      items: [
        {
          icon: "camera",
          title: "Precyzja HD",
          body: "Kamery 4K i termowizja ujawniają mikropęknięcia, zawilgocenia, poluzowane mocowania i straty ciepła na długo, zanim będą wymagały napraw.",
          detail: "4K + termowizja",
        },
        {
          icon: "clock",
          title: "Szybkość",
          body: "Całą elewację lub dach badamy w ciągu kilku godzin, bez zamykania budynku i wynajmowania sprzętu do pracy na wysokości.",
          detail: "Godziny, nie tygodnie",
        },
        {
          icon: "shield",
          title: "Bezpieczeństwo",
          body: "Nikt się nie wspina i nikt nie wisi na linie. Inspektor pracuje z ziemi, śledząc obraz wideo na żywo.",
          detail: "Inspekcja z ziemi",
        },
        {
          icon: "fileText",
          title: "Dokumentacja",
          body: "Otrzymujesz zdjęcia, nagranie z inspekcji i uporządkowany raport, który możesz przekazać ubezpieczycielowi, zarządowi lub wykonawcom.",
          detail: "Raport + wideo",
        },
        {
          icon: "chart",
          title: "Analiza",
          body: "Nasi specjaliści oceniają stan techniczny i porządkują ustalenia według pilności, więc wiesz, co naprawić w pierwszej kolejności.",
          detail: "Ocena ekspercka",
        },
        {
          icon: "award",
          title: "Certyfikacja",
          body: "Loty i przetwarzanie danych zgodne z przepisami europejskimi.",
          detail: "Zgodność z przepisami UE",
        },
      ],
    },
    list: {
      eyebrow: "Typy inspekcji",
      title: "Kompleksowy nadzór dla każdego obiektu.",
      items: [
        { title: "Inspekcja fasad", body: "Badanie stanu elewacji i mikropęknięć." },
        { title: "Badanie dachów", body: "Kontrola pokrycia i konstrukcji dachowej." },
        { title: "Nadzór budów", body: "Monitoring postępu prac budowlanych." },
        { title: "Linie energetyczne", body: "Badanie kabli i słupów." },
        { title: "Mosty i wiadukty", body: "Ocena stanu połączeń i uszkodzeń." },
        { title: "Panele słoneczne", body: "Kontrola wydajności i uszkodzeń." },
      ],
    },
  },
  {
    slug: "training",
    metaTitle: "Kursy i szkolenia dronowe STS-01 / STS-02",
    metaDescription:
      "Profesjonalne przygotowanie do wykonywania operacji dronowych w scenariuszach standardowych STS-01 i STS-02, prowadzone przez certyfikowanych pilotów z doświadczeniem operacyjnym.",
    eyebrow: "Szkolenia dronowe",
    title: "Kursy i szkolenia STS-01 / STS-02.",
    lede: "Profesjonalne przygotowanie do wykonywania operacji dronowych w scenariuszach standardowych. Zdobądź kompetencje potrzebne do świadomego i odpowiedzialnego wykorzystania dronów w pracy zawodowej.",
    image: "/images/heroes/training.jpg",
    alt: "Pilot DCS przygotowujący drona do lotu",
    actions: [
      { label: "Zapisz się na szkolenie", href: "/contact", variant: "lime" },
      { label: "Zobacz ofertę kursów", href: "#programs", variant: "white" },
    ],
    intro: {
      eyebrow: "Nasze podejście",
      title: "Rozwijamy kompetencje pilotów dronów.",
      body: [
        "W DCS Drone Cleaning Solutions rozwijamy nie tylko technologię AeroCleaning, ale również kompetencje pilotów, którzy chcą profesjonalnie i legalnie realizować operacje dronowe w środowisku biznesowym, przemysłowym i usługowym.",
      ],
    },
    features: {
      eyebrow: "Dlaczego warto szkolić się w DCS",
      title: "Doświadczenie z terenu, nie tylko z sali wykładowej.",
      items: [
        {
          icon: "graduation",
          title: "Doświadczeni instruktorzy",
          body: "Szkolenia prowadzą certyfikowani piloci z wieloletnim doświadczeniem operacyjnym, w tym w komercyjnych misjach mycia i inspekcji.",
          detail: "Praktykujący piloci",
        },
        {
          icon: "shield",
          title: "Bezpieczeństwo priorytetem",
          body: "Procedury bezpieczeństwa, kontrola procesu i zgodność z przepisami są częścią każdego modułu, a nie dodatkiem na końcu.",
          detail: "Najpierw procedury",
        },
        {
          icon: "compass",
          title: "Praktyczne podejście",
          body: "Od teorii, przez praktyczne loty, po wdrażanie w terenie: kończysz kurs gotowy do przeprowadzenia prawdziwej operacji.",
          detail: "Od teorii do terenu",
        },
        {
          icon: "book",
          title: "Aktualna wiedza",
          body: "Materiały zgodne z najnowszymi przepisami UE i najlepszymi praktykami branży, aktualizowane wraz ze zmianami przepisów.",
          detail: "Aktualne przepisy UE",
        },
        {
          icon: "award",
          title: "Uznane certyfikaty",
          body: "Certyfikaty uprawniające do legalnego wykonywania operacji dronowych w całej Unii Europejskiej.",
          detail: "Ważne w całej UE",
        },
        {
          icon: "lifebuoy",
          title: "Wsparcie po szkoleniu",
          body: "Konsultacje i wsparcie po ukończeniu kursu, gdy pierwsze prawdziwe misje rodzą prawdziwe pytania.",
          detail: "Wsparcie po kursie",
        },
      ],
    },
    programs: {
      eyebrow: "Nasze szkolenia",
      title: "Dwa scenariusze, jeden profesjonalny standard.",
      lede: "Oferujemy kompleksowe kursy przygotowujące do wykonywania operacji w scenariuszach STS-01 i STS-02.",
      items: [
        {
          code: "STS-01",
          name: "Loty w zasięgu wzroku",
          subtitle: "VLOS",
          body: "Szkolenie dla początkujących pilotów przygotowujące do operacji dronowych w zasięgu wzroku operatora. Dobry start w profesjonalnych zastosowaniach dronów.",
          program: [
            "Teoria lotów VLOS",
            "Przepisy i regulacje UE",
            "Planowanie misji",
            "Procedury bezpieczeństwa",
            "Praktyczne ćwiczenia lotów",
            "Egzamin teoretyczny i praktyczny",
          ],
        },
        {
          code: "STS-02",
          name: "Loty poza zasięgiem wzroku",
          subtitle: "BVLOS",
          body: "Zaawansowane szkolenie dla operatorów, którzy chcą wykonywać loty poza zasięgiem wzroku. Wiedza i umiejętności wymagane przy złożonych operacjach przemysłowych i komercyjnych.",
          program: [
            "Teoria lotów BVLOS",
            "Zaawansowane planowanie misji",
            "Systemy zarządzania ryzykiem",
            "Komunikacja z kontrolą lotów",
            "Procedury awaryjne",
            "Certyfikacja BVLOS",
          ],
        },
      ],
    },
    audience: {
      eyebrow: "Dla kogo",
      title: "Dla kogo są nasze szkolenia?",
      body: "Nasze kursy są skierowane do osób, firm i zespołów, które chcą wejść w zaawansowane zastosowania dronów – od realizacji usług komercyjnych, przez operacje techniczne, aż po wdrażanie nowoczesnych procesów z wykorzystaniem bezzałogowych statków powietrznych.",
      items: [
        "Osoby rozpoczynające karierę w branży dronowej",
        "Firmy wdrażające technologie dronowe",
        "Zespoły techniczne i operacyjne",
        "Specjaliści z branży budowlanej i przemysłowej",
        "Fotografowie i operatorzy wideo",
        "Inspektorzy i geodeci",
      ],
      quote:
        "DCS Drone to praktyczne podejście do technologii dronowej – od szkoleń, przez operacje, po wdrażanie rozwiązań w terenie.",
    },
    closing: {
      eyebrow: "Chcesz rozpocząć szkolenie?",
      title: "Porozmawiaj z egzaminatorem.",
      lede: "Szczegółowe informacje o kursach, terminach i cenach. Zadzwoń lub napisz SMS – odpowiemy najszybciej, jak to możliwe.",
      cta: { label: "Wyślij wiadomość online", href: "/contact" },
      person: contacts.examiner,
    },
  },
  {
    slug: "franchise",
    metaTitle: "Program franczyzy",
    metaDescription:
      "Dołącz do sieci franczyzowej DCS oferującej innowacyjne usługi czyszczenia dronem. Sprzęt, szkolenia i stałe wsparcie, by wystartować na Twoim rynku.",
    eyebrow: "Program franczyzy",
    title: "Zostań partnerem DCS.",
    lede: "Dołącz do zaawansowanej sieci franczyz oferujących innowacyjne usługi czyszczenia dronem. Wspólnie rozwijamy przyszłość branży.",
    image: "/images/heroes/franchise.jpg",
    alt: "Dron DCS prezentowany na stoisku targowym",
    actions: [
      { label: "Zapytaj o franczyzę", href: "/contact", variant: "lime" },
      { label: "Zobacz systemy", href: "/catalog", variant: "white" },
    ],
    features: {
      eyebrow: "Dlaczego franczyza DCS?",
      title: "Sprawdzony model biznesowy z potencjałem wzrostu.",
      lede: "Ty wnosisz rynek. My wnosimy system, szkolenia i ludzi, którzy już to robili.",
      items: [
        {
          icon: "trendingUp",
          title: "Rynek w fazie wzrostu",
          body: "Właściciele budynków odchodzą od rusztowań i alpinizmu przemysłowego. Mycie dronem to młoda, dynamicznie rozwijająca się kategoria usług.",
          detail: "Rosnący popyt",
        },
        {
          icon: "award",
          title: "Certyfikacja",
          body: "Pełne szkolenie i wsparcie operacyjne: Twój zespół zdobywa certyfikaty i jest gotowy do pracy przed pierwszym płatnym zleceniem.",
          detail: "Certyfikaty od pierwszego dnia",
        },
        {
          icon: "coins",
          title: "Rentowność",
          body: "Niskie koszty logistyki i krótki czas realizacji projektów przekładają się na wysokie marże z każdego zlecenia.",
          detail: "Wysokie marże",
        },
        {
          icon: "lifebuoy",
          title: "Kompletne wsparcie",
          body: "Marketing, sprzęt i szkolenia w jednym pakiecie – od partnera, który już uruchamiał tę usługę.",
          detail: "Marketing, sprzęt, szkolenia",
        },
        {
          icon: "users",
          title: "Zespół",
          body: "Dostęp do doświadczonego zespołu operatorów i inżynierów – przy konsultacjach i wymagających projektach.",
          detail: "Doświadczony zespół",
        },
        {
          icon: "badgeCheck",
          title: "Sprawdzony model",
          body: "Model biznesowy przetestowany w realnych operacjach, z procesami, które możesz powielić na własnym rynku.",
          detail: "Przetestowany w terenie",
        },
      ],
    },
    requirements: {
      eyebrow: "Wymagania",
      title: "Czego potrzebujesz, by uruchomić franczyzę.",
      lede: "Warunki potrzebne do uruchomienia usług mycia dronem DCS na Twoim rynku.",
      items: [
        // non-breaking spaces keep "50 000 €" together; amounts are identical to the English version
        { title: "Kapitał początkowy", body: "50 000 € – 100 000 € na sprzęt i operacje" },
        { title: "Szkolenie", body: "1 dzień szkolenia operacyjnego" },
        { title: "Wsparcie", body: "Wsparcie techniczne DCS 24/7" },
        { title: "Certyfikacja", body: "Uzyskanie licencji drona w danym kraju" },
        { title: "Referencje", body: "Referencje biznesowe od stron trzecich" },
      ],
    },
  },
];
