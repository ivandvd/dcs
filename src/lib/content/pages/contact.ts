import { type Locale, type Localized, pick } from "@/lib/i18n";
import type { FaqItem } from "@/components/pages/Faq";

/**
 * Copy of the Contact page (form labels live in the dictionary: t.company.contactForm).
 * English is the source of truth; the Polish text follows the client's own wording from
 * incoming/scrape/pl/contact.txt wherever a block exists there. Phone numbers and e-mail come from
 * src/lib/site.ts in the page; the postal addresses are repeated here because "Poland"/"Polska" translates.
 */
export type ContactCopy = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string; alt: string };
  info: {
    eyebrow: string;
    title: string;
    email: string;
    office: string;
    sales: string;
    address: string;
    addressLine: string;
    mailing: string;
    hours: string;
    hoursLine: string;
    fastTitle: string;
    fastBody: string;
  };
  form: { title: string; lede: string };
  faq: { eyebrow: string; title: string; lede: string; items: FaqItem[] };
  /** `ctaPrefix` is followed by the office e-mail address: "Email biuro@dcs-drone.com" */
  closing: { eyebrow: string; title: string; lede: string; ctaPrefix: string };
};

const en: ContactCopy = {
  meta: {
    title: "Contact",
    description:
      "Contact DCS for a free consultation and a personalised drone cleaning quote. We respond to all enquiries within 24 hours on business days.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    lede: "Ready to transform your building maintenance? Contact our team for a free consultation and a personalised quote.",
    alt: "DCS operator helmet",
  },
  info: {
    eyebrow: "Get in touch",
    title: "Every project starts with a conversation.",
    email: "Email",
    office: "Office",
    sales: "Sales department",
    address: "Address",
    addressLine: "ul. Pucka 35, 81-036 Gdynia, Poland",
    mailing: "Mailing: ul. Kwidzyńska 15, 81-306 Gdynia, Poland",
    hours: "Hours",
    hoursLine: "Mon–Fri: 8:00 – 18:00",
    fastTitle: "Fast response guarantee",
    fastBody:
      "We respond to all enquiries within 24 hours on business days. For urgent matters, please contact us directly by phone.",
  },
  form: {
    title: "Request a quote",
    lede: "Fill out the form and we will contact you with a personalised offer.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    lede: "Quick answers to the most common questions about our services.",
    items: [
      {
        q: "What types of buildings can you clean?",
        a: "Our drone systems can clean virtually any building type: glass facades, concrete structures, metal cladding and heritage buildings. We assess each project individually.",
      },
      {
        q: "How long does a typical project take?",
        a: "Project duration depends on the size and complexity of the building. Most commercial buildings can be completed in 1–3 days, compared to weeks with traditional methods.",
      },
      {
        q: "Is drone cleaning safe for my building?",
        a: "Absolutely. Our systems use controlled water pressure and approved cleaning agents that are safe for all common building materials. We conduct a pre-cleaning assessment.",
      },
      {
        q: "Do you operate internationally?",
        a: "Yes, DCS operates globally through a network of certified partners. Contact us to discuss your location and we will connect you with the nearest service provider.",
      },
    ],
  },
  closing: {
    eyebrow: "Prefer to call?",
    title: "We're available.",
    lede: "Monday to Friday, 8:00 to 18:00. For urgent matters, call us directly and we will pick up.",
    ctaPrefix: "Email",
  },
};

const pl: ContactCopy = {
  meta: {
    title: "Kontakt",
    description:
      "Skontaktuj się z DCS po bezpłatną konsultację i spersonalizowaną wycenę mycia dronem. Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.",
  },
  hero: {
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o Twoim projekcie.",
    lede: "Gotowy na transformację konserwacji budynku? Skontaktuj się z naszym zespołem po bezpłatną konsultację i spersonalizowaną wycenę.",
    alt: "Kask operatora DCS",
  },
  info: {
    eyebrow: "Skontaktuj się z nami",
    title: "Każdy projekt zaczyna się od rozmowy.",
    email: "E-mail",
    office: "Biuro",
    sales: "Dział handlowy",
    address: "Adres",
    addressLine: "ul. Pucka 35, 81-036 Gdynia, Polska",
    mailing: "Adres do korespondencji: ul. Kwidzyńska 15, 81-306 Gdynia, Polska",
    hours: "Godziny",
    hoursLine: "Pn–Pt: 8:00 – 18:00",
    fastTitle: "Gwarancja szybkiej odpowiedzi",
    fastBody:
      "Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze. W pilnych sprawach prosimy o bezpośredni kontakt telefoniczny.",
  },
  form: {
    title: "Zapytaj o wycenę",
    lede: "Wypełnij poniższy formularz, a skontaktujemy się z Tobą ze spersonalizowaną ofertą.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Często zadawane pytania.",
    lede: "Szybkie odpowiedzi na najczęstsze pytania dotyczące naszych usług.",
    items: [
      {
        q: "Jakie typy budynków możecie czyścić?",
        a: "Nasze systemy dronów mogą czyścić praktycznie każdy typ budynku: fasady szklane, konstrukcje betonowe, okładziny metalowe i budynki zabytkowe. Każdy projekt oceniamy indywidualnie.",
      },
      {
        q: "Jak długo trwa typowy projekt?",
        a: "Czas realizacji zależy od wielkości i złożoności budynku. Większość budynków komercyjnych można ukończyć w 1–3 dni, w porównaniu z tygodniami przy tradycyjnych metodach.",
      },
      {
        q: "Czy czyszczenie dronem jest bezpieczne dla mojego budynku?",
        a: "Absolutnie. Nasze systemy używają kontrolowanego ciśnienia wody i zatwierdzonych środków czyszczących bezpiecznych dla wszystkich typowych materiałów budowlanych. Przeprowadzamy ocenę przed czyszczeniem.",
      },
      {
        q: "Czy działacie za granicą?",
        a: "Tak, DCS działa globalnie poprzez sieć certyfikowanych partnerów. Skontaktuj się z nami, aby omówić swoją lokalizację – połączymy Cię z najbliższym dostawcą usług.",
      },
    ],
  },
  closing: {
    eyebrow: "Wolisz zadzwonić?",
    title: "Jesteśmy dostępni.",
    lede: "Od poniedziałku do piątku, od 8:00 do 18:00. W pilnych sprawach zadzwoń bezpośrednio – odbierzemy.",
    ctaPrefix: "Napisz na",
  },
};

const copy: Localized<ContactCopy> = { en, pl };

export const getContactCopy = (locale: Locale) => pick(copy, locale);
