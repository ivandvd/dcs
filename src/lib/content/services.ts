import { type Locale, type Localized, pick } from "@/lib/i18n/config";

export type ServiceSlug = "cleaning" | "disinfection" | "inspection" | "training" | "franchise";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  blurb: string;
  href: string;
  image: string;
  alt: string;
};

type ServiceText = Pick<Service, "title" | "short" | "blurb" | "alt">;

/** Shared, language-independent part (order = display order). */
const base: Pick<Service, "slug" | "href" | "image">[] = [
  { slug: "cleaning", href: "/services/cleaning", image: "/images/services/cleaning.jpg" },
  { slug: "disinfection", href: "/services/disinfection", image: "/images/services/disinfection.jpg" },
  { slug: "inspection", href: "/services/inspection", image: "/images/services/inspection.jpg" },
  { slug: "training", href: "/services/training", image: "/images/services/training.jpg" },
  { slug: "franchise", href: "/services/franchise", image: "/images/services/franchise.jpg" },
];

const text: Localized<Record<ServiceSlug, ServiceText>> = {
  en: {
    cleaning: {
      title: "Facade Cleaning",
      short: "Drone Cleaning",
      blurb: "Professional drone cleaning of glass, concrete and composite facades.",
      alt: "DCS drone washing a facade mid-clean",
    },
    disinfection: {
      title: "Disinfection",
      short: "Disinfection",
      blurb: "Large-scale aerial disinfection for public spaces and facilities.",
      alt: "Drone disinfecting a building exterior",
    },
    inspection: {
      title: "Inspection",
      short: "Drone Inspection",
      blurb: "Detailed aerial inspections with HD imaging and documentation.",
      alt: "Drone hovering at the windows of a building, seen from above",
    },
    training: {
      title: "Training Courses",
      short: "Training Courses",
      blurb: "STS-01 and STS-02 drone training for professional operators.",
      alt: "DCS operator preparing a drone",
    },
    franchise: {
      title: "Franchise",
      short: "Franchise",
      blurb: "Become our partner and introduce drone cleaning to your market.",
      alt: "DCS drone presented at a trade fair",
    },
  },
  pl: {
    cleaning: {
      title: "Mycie fasad",
      short: "Mycie dronem",
      blurb: "Profesjonalne czyszczenie dronem fasad szklanych, betonowych i kompozytowych.",
      alt: "Dron DCS myjący elewację w trakcie pracy",
    },
    disinfection: {
      title: "Dezynfekcja",
      short: "Dezynfekcja",
      blurb: "Wielkoskalowa dezynfekcja z powietrza dla przestrzeni publicznych i obiektów.",
      alt: "Dron dezynfekujący elewację budynku",
    },
    inspection: {
      title: "Inspekcja",
      short: "Nadzór dronem",
      blurb: "Szczegółowe inspekcje z powietrza z obrazowaniem HD i dokumentacją.",
      alt: "Dron zawieszony przy oknach budynku, widok z góry",
    },
    training: {
      title: "Kursy i szkolenia",
      short: "Kursy i szkolenia",
      blurb: "Szkolenia dronowe STS-01 i STS-02 dla profesjonalnych operatorów.",
      alt: "Operator DCS przygotowujący drona",
    },
    franchise: {
      title: "Franczyza",
      short: "Franczyza",
      blurb: "Zostań naszym partnerem i wprowadź usługi czyszczenia dronem na swój rynek.",
      alt: "Dron DCS prezentowany na targach",
    },
  },
};

export function getServices(locale: Locale): Service[] {
  const t = pick(text, locale);
  return base.map((b) => ({ ...b, ...t[b.slug] }));
}

export function getService(slug: string, locale: Locale): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}

/** English list – slugs, hrefs and images are shared, so this is enough for sitemaps and static params. */
export const services: Service[] = getServices("en");
