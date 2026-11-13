// Fetches the Polish pages of dcs-drone.com (server-rendered HTML) and saves raw HTML + text.
import fs from "node:fs";
import path from "node:path";

const OUT = "C:/Users/Ivan/Desktop/dcs-drone/incoming/scrape/pl";
fs.mkdirSync(OUT, { recursive: true });

const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36" };

const pages = {
  home: "/",
  about: "/about",
  technology: "/technology",
  solutions: "/solutions",
  catalog: "/katalog",
  contact: "/contact",
  cleaning: "/services/cleaning",
  disinfection: "/services/disinfection",
  inspection: "/services/inspection",
  training: "/services/training",
  franchise: "/services/franchise",
  news: "/aktualnosci",
  career: "/kariera",
  privacy: "/privacy",
  terms: "/terms",
};

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

const detail = { news: [], catalog: [] };
for (const [name, p] of Object.entries(pages)) {
  const url = "https://dcs-drone.com" + p;
  try {
    const html = await fetchHtml(url);
    fs.writeFileSync(path.join(OUT, name + ".html"), html);
    const text = textOf(html);
    fs.writeFileSync(path.join(OUT, name + ".txt"), text);
    for (const l of linksOf(html)) {
      if (/^\/pl\/news\/.+/.test(l)) detail.news.push(l);
      if (/^\/pl\/catalog\/.+/.test(l)) detail.catalog.push(l);
    }
    console.log("ok", name, text.length);
  } catch (e) {
    console.log("fail", name, String(e));
  }
}
for (const kind of ["news", "catalog"]) {
  for (const l of [...new Set(detail[kind])].slice(0, 40)) {
    const url = "https://dcs-drone.com" + l;
    const slug = url.split("/").filter(Boolean).pop();
    try {
      const html = await fetchHtml(url);
      fs.writeFileSync(path.join(OUT, `${kind}--${slug}.html`), html);
      fs.writeFileSync(path.join(OUT, `${kind}--${slug}.txt`), textOf(html));
      console.log("ok", kind, slug);
    } catch (e) {
      console.log("fail", kind, slug, String(e));
    }
  }
}
console.log("done", detail.news.length, detail.catalog.length);
