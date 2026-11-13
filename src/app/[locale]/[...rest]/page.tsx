import { notFound } from "next/navigation";

/**
 * Unknown URLs inside a locale (e.g. /pl/foo) land here and render [locale]/not-found.tsx,
 * so visitors get the translated 404 with the site's navigation instead of Next's default page.
 */
export default function CatchAll() {
  notFound();
}
