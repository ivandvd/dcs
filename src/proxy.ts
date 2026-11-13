import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

const COOKIE = "NEXT_LOCALE";

/** Old Polish URLs from the previous site. */
const LEGACY: Record<string, string> = {
  "/katalog": "/pl/catalog",
  "/kariera": "/pl/career",
  "/aktualnosci": "/pl/news",
};

function preferredLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(COOKIE)?.value;
  if (isLocale(cookie)) return cookie;
  const accept = req.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("pl") ? "pl" : defaultLocale;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (isLocale(first)) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, first, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
    return res;
  }

  const url = req.nextUrl.clone();
  if (LEGACY[pathname]) {
    url.pathname = LEGACY[pathname];
    return NextResponse.redirect(url, 308);
  }
  if (pathname.startsWith("/katalog/")) {
    url.pathname = pathname.replace(/^\/katalog\//, "/pl/catalog/");
    return NextResponse.redirect(url, 308);
  }
  if (pathname.startsWith("/aktualnosci/")) {
    // the article page maps old article slugs (e.g. "targi") to the current ones
    url.pathname = pathname.replace(/^\/aktualnosci\//, "/pl/news/");
    return NextResponse.redirect(url, 308);
  }

  const locale = preferredLocale(req);
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // everything except API routes, Next internals and static files
  matcher: ["/((?!api|_next|models|images|brand|video|favicon|apple-touch-icon|robots\\.txt|sitemap\\.xml|.*\\.[a-zA-Z0-9]+$).*)"],
};
