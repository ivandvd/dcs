// Fetches the Polish news index of dcs-drone.com (/aktualnosci), follows every article link found on it
// and saves each article as raw HTML + plain text next to the other Polish scrapes:
//   incoming/scrape/pl/news--<slug>.html
//   incoming/scrape/pl/news--<slug>.txt
// Run: node scripts/scrape-news-pl.mjs
// The fetch/textOf helpers are the ones from scripts/scrape-site-pl.mjs.
import fs from "node:fs";
import path from "node:path";

const BASE = "https://dcs-drone.com";
const INDEX = "/aktualnosci";
const OUT = "C:/Users/Ivan/Desktop/dcs-drone/incoming/scrape/pl";
fs.mkdirSync(OUT, { recursive: true });

const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36" };

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
  s = s.replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/section|\/tr|\/article|\/header|\/footer)[^>]*>/gi, "\n");
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

const linksOf = (html) => [...html.matchAll(/href="([^"]+)"/g)].map((m) => decode(m[1]));

// Article links on the Polish index: /aktualnosci/<slug> (old site) or /pl/news/<slug>.
const isArticle = (href) => /^\/(aktualnosci|pl\/news)\/[^/?#]+\/?$/.test(href);

const index = await fetchHtml(BASE + INDEX);
const links = [...new Set(linksOf(index).filter(isArticle))];
console.log("index ok, article links:", links);

for (const href of links) {
  const slug = href.split("/").filter(Boolean).pop();
  const url = BASE + href;
  try {
    const html = await fetchHtml(url);
    const text = textOf(html);
    fs.writeFileSync(path.join(OUT, `news--${slug}.html`), html);
    fs.writeFileSync(path.join(OUT, `news--${slug}.txt`), text);
    console.log("ok", slug, text.length, "chars");
  } catch (e) {
    console.log("fail", slug, String(e));
  }
}
console.log("done", links.length, "article(s)");
