// Fetches the Polish product pages of the client's live catalog (https://dcs-drone.com/katalog/<slug>)
// and saves raw HTML + plain text to incoming/scrape/pl/catalog--<slug>.txt|html.
// Run: node scripts/scrape-catalog-pl.mjs
// The fetch/text helpers are the same as in scripts/scrape-site-pl.mjs (that script runs on import, so they are copied here).
import fs from "node:fs";
import path from "node:path";

const OUT = "C:/Users/Ivan/Desktop/dcs-drone/incoming/scrape/pl";
fs.mkdirSync(OUT, { recursive: true });

const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36" };

/** The client's Polish product slugs (the English pages live at /catalog/<same slug>). */
const slugs = [
  "akumulator-pro-tb100-dji-matrice-400",
  "akumulator-tb65-do-dji-matrice-350-rtk",
  "dcs-mostfoam-zero-one-killer-10l",
  "dcs-mostofoam-zero-one-killer-25l",
  "dcs-x1-maxi",
  "dcs-x1-mini",
  "dcs-x1-pro",
  "dji-matrice-350-rtk",
  "dji-matrice-400",
  "oslony-przednich-rotorow-dji-350",
  "oslony-przednich-rotorow-dji-400",
  "szkolenie-sts-01",
  "szkolenie-sts-02",
  "zbiornik-450l",
  "zbiornik-60l",
  "zestaw-dysz",
  "zwijak-z-wezem-120m-zwijak-120m",
  "zwijak-z-wezem-60m",
];

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const textOf = (html) => {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");
  s = s.replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/section|\/tr|\/article|\/header|\/footer|\/dt|\/dd)[^>]*>/gi, "\n");
  s = s.replace(/<[^>]+>/g, "");
  return decode(s)
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
};

const fetchHtml = async (url) => {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
};

let ok = 0;
for (const slug of slugs) {
  const url = `https://dcs-drone.com/katalog/${slug}`;
  try {
    const html = await fetchHtml(url);
    fs.writeFileSync(path.join(OUT, `catalog--${slug}.html`), html);
    const text = textOf(html);
    fs.writeFileSync(path.join(OUT, `catalog--${slug}.txt`), text);
    ok++;
    console.log("ok", slug, text.length);
  } catch (e) {
    console.log("fail", slug, String(e));
  }
}
console.log(`done ${ok}/${slugs.length}`);
