/**
 * UI strings for the "news" area (news index + article, newsletter, legal pages). `en` is the source of truth;
 * `pl` must have the same shape. Page copy (headlines, articles, legal text) does NOT belong here: it lives in
 * src/lib/content/news.ts and legal.ts as Localized<T>.
 */
const en = {
  /** eyebrow above the newest article on the index */
  featured: "Featured",
  list: { eyebrow: "All articles", title: "More news & updates." },
  /** plural forms for "N photos" (Intl.PluralRules categories; see formatPhotoCount in content/news.ts) */
  photos: { one: "photo", few: "photos", many: "photos", other: "photos" },
  article: {
    backToNews: "Back to news",
    category: "Category",
    published: "Published",
    gallery: "Gallery",
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Subscribe to our newsletter.",
    lede: "Receive the latest industry news and DCS updates straight to your inbox.",
    emailLabel: "Email address",
    placeholder: "Your email address",
    submit: "Subscribe",
    sending: "Subscribing…",
    thanks: "Thank you for subscribing.",
    another: "Use another address",
    invalid: "Please enter a valid email address.",
    error: "Something went wrong. Please try again.",
  },
  legal: { eyebrow: "Legal", contents: "Contents", lastUpdated: "Last updated:" },
};

const pl: typeof en = {
  featured: "Wyróżnione",
  list: { eyebrow: "Wszystkie artykuły", title: "Więcej aktualności i nowości." },
  photos: { one: "zdjęcie", few: "zdjęcia", many: "zdjęć", other: "zdjęcia" },
  article: {
    backToNews: "Powrót do aktualności",
    category: "Kategoria",
    published: "Opublikowano",
    gallery: "Galeria",
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Zapisz się do newslettera.",
    lede: "Otrzymuj najnowsze informacje o branży i aktualnościach DCS prosto na skrzynkę.",
    emailLabel: "Adres e-mail",
    placeholder: "Twój adres e-mail",
    submit: "Zapisz się",
    sending: "Zapisywanie…",
    thanks: "Dziękujemy za zapisanie się.",
    another: "Użyj innego adresu",
    invalid: "Podaj poprawny adres e-mail.",
    error: "Coś poszło nie tak. Spróbuj ponownie.",
  },
  legal: { eyebrow: "Informacje prawne", contents: "Spis treści", lastUpdated: "Ostatnia aktualizacja:" },
};

export const newsArea = { en, pl };
