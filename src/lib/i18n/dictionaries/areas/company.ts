/**
 * UI strings for the "company" area. `en` is the source of truth; `pl` must have the same shape.
 * Page copy (headlines, paragraphs, product data) does NOT belong here: it lives in src/lib/content as Localized<T>.
 */
const en = {
  /** components/contact/ContactForm – the required marker " *" is added by the component */
  contactForm: {
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    service: "Service of interest",
    selectService: "Select a service",
    /** option labels; the submitted values are the stable English names in ContactForm's SERVICES (same keys) */
    services: {
      facadeCleaning: "Facade Cleaning",
      windowCleaning: "Window Cleaning",
      disinfection: "Disinfection",
      inspection: "Building Inspection",
      equipment: "Equipment Purchase",
      training: "Training & Certification",
      franchise: "Franchise Inquiry",
      other: "Other",
    },
    message: "Project details",
    messagePlaceholder: "Building type, height, surface, location, timing. You can also mention photos you can send.",
    /** `{product}` is replaced with the product name from `?product=` */
    prefill: "I am interested in: {product}",
    consent: "By sending this form you agree to the processing of your data as described in our Privacy Policy.",
    submit: "Send message",
    sending: "Sending…",
    sentTitle: "Thank you. Message received.",
    /** `{phone}` is replaced with the office number */
    sentBody: "We respond to all enquiries within 24 hours on business days. For urgent matters, call us at {phone}.",
    sendAnother: "Send another message",
    errorRequired: "Please fill in all required fields.",
    errorEmail: "Please enter a valid email address.",
    errorGeneric: "Something went wrong.",
  },
  /** components/pages/JobList */
  jobList: {
    applyNow: "Apply now",
    /** mailto subject: "<applySubject>: <job title>" */
    applySubject: "Application",
  },
};

const pl: typeof en = {
  contactForm: {
    firstName: "Imię",
    lastName: "Nazwisko",
    email: "E-mail",
    phone: "Telefon",
    company: "Firma",
    service: "Interesująca Cię usługa",
    selectService: "Wybierz usługę",
    services: {
      facadeCleaning: "Mycie elewacji",
      windowCleaning: "Mycie okien",
      disinfection: "Dezynfekcja",
      inspection: "Inspekcja budynku",
      equipment: "Zakup sprzętu",
      training: "Szkolenia i certyfikacja",
      franchise: "Zapytanie o franczyzę",
      other: "Inne",
    },
    message: "Szczegóły projektu",
    messagePlaceholder:
      "Typ budynku, wysokość, rodzaj powierzchni, lokalizacja, termin. Możesz też wspomnieć o zdjęciach, które możesz nam przesłać.",
    prefill: "Interesuje mnie: {product}",
    consent: "Wysyłając ten formularz, zgadzasz się na przetwarzanie swoich danych zgodnie z naszą Polityką prywatności.",
    submit: "Wyślij wiadomość",
    sending: "Wysyłanie…",
    sentTitle: "Dziękujemy. Wiadomość dotarła.",
    sentBody: "Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze. W pilnych sprawach zadzwoń pod numer {phone}.",
    sendAnother: "Wyślij kolejną wiadomość",
    errorRequired: "Wypełnij wszystkie wymagane pola.",
    errorEmail: "Podaj poprawny adres e-mail.",
    errorGeneric: "Coś poszło nie tak. Spróbuj ponownie.",
  },
  jobList: {
    applyNow: "Aplikuj teraz",
    applySubject: "Aplikacja na stanowisko",
  },
};

export const companyArea = { en, pl };
