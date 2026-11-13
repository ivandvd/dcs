import { homeArea } from "./areas/home";
import { pagesArea } from "./areas/pages";
import { catalogArea } from "./areas/catalog";
import { companyArea } from "./areas/company";
import { newsArea } from "./areas/news";

export const en = {
  locale: { short: "EN", long: "English", switchTo: "Polski", switchLabel: "Zmień język na polski", label: "Language" },
  contacts: {
    office: "Office",
    sales: "Sales department",
    examiner: "Examiner",
    phone: "Phone",
    email: "E-mail",
    hours: "Mon–Fri 8:00–18:00",
    callOrText: "Call or text",
  },
  home: homeArea.en,
  pages: pagesArea.en,
  catalog: catalogArea.en,
  company: companyArea.en,
  news: newsArea.en,
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Solutions",
        href: "/solutions",
        children: [
          { label: "Facade Cleaning", href: "/services/cleaning", blurb: "Glass, concrete and composite facades" },
          { label: "Disinfection", href: "/services/disinfection", blurb: "Large-scale aerial disinfection" },
          { label: "Inspection", href: "/services/inspection", blurb: "HD imaging and documentation" },
          { label: "Training Courses", href: "/services/training", blurb: "STS-01 and STS-02 certification" },
          { label: "Franchise", href: "/services/franchise", blurb: "Bring drone cleaning to your market" },
        ],
      },
      { label: "Technology", href: "/technology" },
      { label: "Catalog", href: "/catalog" },
      {
        label: "Resources",
        href: "/news",
        children: [
          { label: "News", href: "/news", blurb: "Updates, events and trade fairs" },
          { label: "Career", href: "/career", blurb: "Join the DCS team" },
        ],
      },
    ] as NavItem[],
    getQuote: "Get a Quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "DCS – home",
    main: "Main",
  },
  footer: {
    eyebrow: "Get in touch",
    title: "Ready to revolutionize building maintenance?",
    lede: "Send us photos, basic dimensions and information about the surface. We will select the right configuration and propose a way to carry out the work.",
    contact: "Contact Us",
    catalog: "View Catalog",
    blurb:
      "Innovative drone cleaning solutions for buildings, facades and industrial facilities. Transforming building maintenance with cutting-edge UAV technology.",
    solutions: "Solutions",
    company: "Company",
    contactCol: "Contact",
    office: "Office",
    sales: "Sales department",
    address: "Address",
    mailing: "Mailing address",
    officeAddress: "ul. Pucka 35, 81-036 Gdynia, Poland",
    mailingAddress: "ul. Kwidzyńska 15, 81-306 Gdynia, Poland",
    rights: "© 2026 DCS – Drone Cleaning Solutions. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    solutionLinks: [
      { label: "Drone Cleaning", href: "/services/cleaning" },
      { label: "Disinfection", href: "/services/disinfection" },
      { label: "Drone Inspection", href: "/services/inspection" },
      { label: "Training Courses", href: "/services/training" },
      { label: "Franchise", href: "/services/franchise" },
    ],
    companyLinks: [
      { label: "About Us", href: "/about" },
      { label: "Technology", href: "/technology" },
      { label: "Solutions", href: "/solutions" },
      { label: "Catalog", href: "/catalog" },
      { label: "News", href: "/news" },
      { label: "Career", href: "/career" },
      { label: "Contact", href: "/contact" },
    ],
  },
  cookie: {
    title: "We respect your privacy",
    body: "Necessary cookies keep the site working. With your consent we also use analytics cookies to understand traffic and improve the site. Details in our",
    privacy: "Privacy Policy",
    acceptAll: "Accept all",
    necessary: "Necessary only",
  },
  notFound: {
    eyebrow: "Error 404",
    title: "This page took off without us.",
    lede: "The page you are looking for does not exist or has moved. Let's get you back on the ground.",
    home: "Back to home",
    contact: "Contact us",
  },
  common: {
    back: "Back",
    next: "Next",
    readMore: "Read more",
    learnMore: "Learn more",
    callUs: "Call us",
    sendEmail: "Send email",
    loadModel: "Load 3D model",
    loading: "Loading",
    dragHint: "Drag to rotate · scroll to zoom",
    photos: "Photos",
    model3d: "3D model",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export type Dictionary = typeof en;
