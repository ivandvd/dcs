/**
 * UI strings for the "pages" area. `en` is the source of truth; `pl` must have the same shape.
 * Page copy (headlines, paragraphs, product data) does NOT belong here: it lives in src/lib/content as Localized<T>.
 */
const en = {
  /** components/pages/Audience.tsx */
  audience: {
    designedFor: "Designed for",
    quoteOpen: "“",
    quoteClose: "”",
  },
  /** components/pages/Programs.tsx – `{code}` is replaced with the program code (STS-01 / STS-02) */
  programs: {
    program: "Training program",
    inquire: "Inquire about {code}",
  },
};

const pl: typeof en = {
  audience: {
    designedFor: "Przeznaczone dla",
    quoteOpen: "„",
    quoteClose: "”",
  },
  programs: {
    program: "Program szkolenia",
    inquire: "Zapytaj o {code}",
  },
};

export const pagesArea = { en, pl };
