/**
 * UI strings for the "home" area. `en` is the source of truth; `pl` must have the same shape.
 * Page copy (headlines, paragraphs, product data) does NOT belong here: it lives in src/lib/content as Localized<T>.
 */
const en = {
  hero: {
    consultation: "Get a Free Consultation",
    explore: "Explore Solutions",
    videoTitle: "DCS drone cleaning a building facade",
    cardAlt: "DCS drone washing a glass facade",
    /** Stat tile labels: two lines each, rendered with a line break between them. */
    heightLabel: ["Working height", "up to"] as [string, string],
    glassLabel: ["Glass cleaned", "per day"] as [string, string],
    durationLabel: ["Typical project", "duration"] as [string, string],
    days: "days",
    trust: ["Operating across Europe", "from Gdynia, Poland"] as [string, string],
  },
  ticker: {
    label: "What we do",
  },
  whyDrone: {
    sideBySide: "Side by side",
    clipTitle: "DCS drones at work",
    inTheField: "In the field",
    ecoSolution: "Eco-solution",
    lessWater: "Less water usage",
    traditional: "Traditional",
  },
  services: {
    scroll: "Scroll",
  },
  facilities: {
    allSolutions: "All solutions",
  },
  startBusiness: {
    imageAlt: "DCS drone washing windows of an apartment building",
    becomePartner: "Become a partner",
    viewSystems: "View systems",
  },
};

const pl: typeof en = {
  hero: {
    consultation: "Bezpłatna konsultacja",
    explore: "Poznaj rozwiązania",
    videoTitle: "Dron DCS myjący elewację budynku",
    cardAlt: "Dron DCS myjący szklaną elewację",
    heightLabel: ["Wysokość pracy", "do"],
    glassLabel: ["Mytego szkła", "dziennie"],
    durationLabel: ["Typowy czas", "realizacji"],
    days: "dni",
    trust: ["Działamy w całej Europie", "z Gdyni"],
  },
  ticker: {
    label: "Czym się zajmujemy",
  },
  whyDrone: {
    sideBySide: "Porównanie",
    clipTitle: "Drony DCS przy pracy",
    inTheField: "W terenie",
    ecoSolution: "Eko-rozwiązanie",
    lessWater: "Mniejsze zużycie wody",
    traditional: "Tradycyjnie",
  },
  services: {
    scroll: "Przewiń",
  },
  facilities: {
    allSolutions: "Wszystkie rozwiązania",
  },
  startBusiness: {
    imageAlt: "Dron DCS myjący okna budynku mieszkalnego",
    becomePartner: "Zostań partnerem",
    viewSystems: "Zobacz systemy",
  },
};

export const homeArea = { en, pl };
