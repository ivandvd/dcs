/**
 * UI strings for the "catalog" area. `en` is the source of truth; `pl` must have the same shape.
 * Page copy (headlines, paragraphs, product data) does NOT belong here: it lives in src/lib/content as Localized<T>
 * (catalog pages: `getCatalogCopy`, products: `getProducts` in src/lib/content/catalog.ts).
 * Placeholders in braces – {count}, {noun}, {name}, {n}, {total}, {phone} – are filled in by the components.
 */
const en = {
  requestQuote: "Request a quote",
  backToCatalog: "Back to catalog",
  /** catalog hero buttons */
  configure: "Configure your system",
  browse: "Browse products",
  /** product detail page */
  product: {
    applications: "Applications",
    description: "Product description",
    onRequest: "Configuration on request",
    configureWith: "Configure a system with it",
    /** followed by the phone number */
    call: "Call",
  },
  /** category filter + product grid */
  grid: {
    filterLabel: "Filter by category",
    all: "All",
    showing: "Showing {count} {noun}",
    /** plural forms by Intl.PluralRules category */
    noun: { one: "product", few: "products", many: "products", other: "products" },
  },
  card: {
    details: "View details",
  },
  tiers: {
    viewing: "Viewing",
    details: "System details",
    included: "Included",
    notIncluded: "Not included",
  },
  gallery: {
    label: "{name} photos",
    thumb: "Photo {n} of {total}",
  },
  showcase: {
    tabs: "3D models",
    tip: "Tip: drag to rotate · scroll to zoom",
  },
  systemCard: {
    alt: "DJI Matrice 350 RTK fitted with DCS front rotor guards and the AeroCleaning lance",
    caption: "Matrice 350 with DCS shields and AeroCleaning system",
    tags: "Front rotor guards · movable lance",
  },
  configurator: {
    steps: ["Object type", "Application", "Component selection", "Contact details"],
    object: {
      title: "What object do you want to service?",
      hint: "This helps us match the right configuration.",
    },
    objects: {
      residential: "Residential building / HOA",
      office: "Office / commercial building",
      industrial: "Hall / industrial facility",
      solar: "Photovoltaic farm",
      operator: "Service company / operator",
      other: "Other",
    },
    application: {
      title: "What task should the system handle?",
      hint: "Choose the main application.",
    },
    applications: {
      facade: "Facade cleaning",
      solar: "Solar panels",
      disinfection: "Surface disinfection",
      inspection: "Inspection & surveys",
      training: "Operator training",
    },
    components: {
      title: "Select your kit components",
      hint: "Select the products you are interested in. Highlighted ones match the chosen application.",
      selected: "{count} selected",
      recommended: "recommended",
    },
    contact: {
      title: "Your contact details",
      hint: "We will prepare a proposal and get back to you.",
    },
    fields: {
      name: "Full name *",
      company: "Company",
      email: "E-mail *",
      phone: "Phone *",
      message: "Additional information",
    },
    placeholders: {
      name: "John Smith",
      company: "Company name",
      email: "john@company.com",
      phone: "+48 000 000 000",
      message:
        "Describe what kind of work the configured set is for, what type of building it will be used on, which surfaces will be cleaned, and any specific requirements regarding reach, performance or accessories.",
    },
    summary: {
      title: "Inquiry summary",
      object: "Object",
      application: "Application",
      products: "Selected products",
      note: "No prices are shown online. Every system is quoted individually for your building and market.",
    },
    send: "Send inquiry",
    sending: "Sending…",
    sent: {
      title: "Thank you. Your inquiry is on its way.",
      body: "We will prepare a proposal matched to your project and get back to you within 24 hours on business days. For urgent matters call {phone}.",
    },
    errors: {
      required: "Please fill in all required fields.",
      email: "Please enter a valid email address.",
      generic: "Something went wrong.",
    },
  },
};

const pl: typeof en = {
  requestQuote: "Zapytaj o ofertę",
  backToCatalog: "Powrót do katalogu",
  configure: "Skonfiguruj system",
  browse: "Przeglądaj produkty",
  product: {
    applications: "Zastosowania",
    description: "Opis produktu",
    onRequest: "Konfiguracja na zapytanie",
    configureWith: "Skonfiguruj z nim system",
    call: "Zadzwoń",
  },
  grid: {
    filterLabel: "Filtruj według kategorii",
    all: "Wszystkie",
    showing: "Wyświetlono {count} {noun}",
    noun: { one: "produkt", few: "produkty", many: "produktów", other: "produktu" },
  },
  card: {
    details: "Zobacz szczegóły",
  },
  tiers: {
    viewing: "Oglądasz",
    details: "Szczegóły zestawu",
    included: "W zestawie",
    notIncluded: "Brak w zestawie",
  },
  gallery: {
    label: "Zdjęcia – {name}",
    thumb: "Zdjęcie {n} z {total}",
  },
  showcase: {
    tabs: "Modele 3D",
    tip: "Wskazówka: przeciągnij, aby obrócić · użyj scrolla, aby przybliżyć",
  },
  systemCard: {
    alt: "DJI Matrice 350 RTK z przednimi osłonami rotorów DCS i lancą AeroCleaning",
    caption: "Matrice 350 z osłonami rotorów i systemem AeroCleaning",
    tags: "Osłony przednich rotorów · ruchoma lanca",
  },
  configurator: {
    steps: ["Typ obiektu", "Zastosowanie", "Dobór elementów", "Dane kontaktowe"],
    object: {
      title: "Jaki obiekt chcesz obsługiwać?",
      hint: "Pomoże nam to dobrać odpowiednią konfigurację.",
    },
    objects: {
      residential: "Budynek mieszkalny / wspólnota",
      office: "Biurowiec / obiekt komercyjny",
      industrial: "Hala / obiekt przemysłowy",
      solar: "Farma fotowoltaiczna",
      operator: "Firma usługowa / operator",
      other: "Inne",
    },
    application: {
      title: "Jakie zadanie ma realizować system?",
      hint: "Wybierz główne zastosowanie.",
    },
    applications: {
      facade: "Mycie elewacji",
      solar: "Panele fotowoltaiczne",
      disinfection: "Dezynfekcja powierzchni",
      inspection: "Inspekcje i pomiary",
      training: "Szkolenie operatorów",
    },
    components: {
      title: "Wybierz elementy zestawu",
      hint: "Zaznacz produkty, które Cię interesują. Wyróżnione pasują do wybranego zastosowania.",
      selected: "Wybrano: {count}",
      recommended: "polecane",
    },
    contact: {
      title: "Twoje dane kontaktowe",
      hint: "Przygotujemy propozycję i odezwiemy się do Ciebie.",
    },
    fields: {
      name: "Imię i nazwisko *",
      company: "Firma",
      email: "E-mail *",
      phone: "Telefon *",
      message: "Dodatkowe informacje",
    },
    placeholders: {
      name: "Jan Kowalski",
      company: "Nazwa firmy",
      email: "jan@firma.pl",
      phone: "+48 000 000 000",
      message:
        "Opisz, do jakich prac ma służyć konfigurowany zestaw, na jakim typie obiektu będzie używany, jakie powierzchnie będą czyszczone, oraz podaj szczególne wymagania dotyczące zasięgu, wydajności lub akcesoriów.",
    },
    summary: {
      title: "Podsumowanie zapytania",
      object: "Obiekt",
      application: "Zastosowanie",
      products: "Wybrane produkty",
      note: "Nie podajemy cen online. Każdy system wyceniamy indywidualnie – pod Twój obiekt i rynek.",
    },
    send: "Wyślij zapytanie",
    sending: "Wysyłanie…",
    sent: {
      title: "Dziękujemy. Twoje zapytanie jest już w drodze.",
      body: "Przygotujemy propozycję dopasowaną do Twojego projektu i odezwiemy się w ciągu 24 godzin w dni robocze. W pilnych sprawach zadzwoń: {phone}.",
    },
    errors: {
      required: "Wypełnij wszystkie wymagane pola.",
      email: "Podaj prawidłowy adres e-mail.",
      generic: "Coś poszło nie tak. Spróbuj ponownie.",
    },
  },
};

export const catalogArea = { en, pl };
