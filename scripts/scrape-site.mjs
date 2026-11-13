// Fetches the live dcs-drone.com pages (server-rendered HTML), saves raw HTML +
// extracted text, follows news/catalog detail links, and downloads catalog images.
import fs from "node:fs";
import path from "node:path";

const OUT = "C:/Users/Ivan/Desktop/dcs-drone/incoming/scrape";
const IMG = "C:/Users/Ivan/Desktop/dcs-drone/incoming/original-site/catalog";
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(IMG, { recursive: true });

const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36" };

const pages = {
  home: "/en",
  about: "/en/about",
  technology: "/en/technology",
  solutions: "/en/solutions",
  catalog: "/en/catalog",
  contact: "/en/contact",
  cleaning: "/en/services/cleaning",
  disinfection: "/en/services/disinfection",
  inspection: "/en/services/inspection",
  training: "/en/services/training",
  franchise: "/en/services/franchise",
  news: "/en/news",
  career: "/en/career",
  privacy: "/en/privacy",
  terms: "/en/terms",
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

const linksOf = (html) =>
  [...html.matchAll(/href="([^"]+)"/g)].map((m) => decode(m[1]));
const imgsOf = (html) =>
  [...html.matchAll(/(?:src|srcSet|data-src)="([^"]+)"/g)]
    .map((m) => decode(m[1]))
    .flatMap((s) => s.split(",").map((p) => p.trim().split(" ")[0]))
    .filter((s) => /^https?:/.test(s));

const summary = {};
const detail = { news: [], catalog: [] };
const images = new Set();

for (const [name, p] of Object.entries(pages)) {
  const url = "https://dcs-drone.com" + p;
  try {
    const html = await fetchHtml(url);
    fs.writeFileSync(path.join(OUT, name + ".html"), html);
    const text = textOf(html);
    fs.writeFileSync(path.join(OUT, name + ".txt"), text);
    for (const l of linksOf(html)) {
      if (/^\/en\/news\/.+/.test(l) || /dcs-drone\.com\/en\/news\/.+/.test(l)) detail.news.push(l);
      if (/^\/en\/catalog\/.+/.test(l) || /dcs-drone\.com\/en\/catalog\/.+/.test(l)) detail.catalog.push(l);
    }
    for (const i of imgsOf(html)) images.add(i);
    summary[name] = { chars: text.length, links: linksOf(html).length };
    console.log("ok", name, text.length);
  } catch (e) {
    summary[name] = { error: String(e) };
    console.log("fail", name, String(e));
  }
}

const uniq = (a) => [...new Set(a)];
detail.news = uniq(detail.news);
detail.catalog = uniq(detail.catalog);

for (const kind of ["news", "catalog"]) {
  for (const l of detail[kind].slice(0, 40)) {
    const url = l.startsWith("http") ? l : "https://dcs-drone.com" + l;
    const slug = url.split("/").filter(Boolean).pop();
    try {
      const html = await fetchHtml(url);
      fs.writeFileSync(path.join(OUT, `${kind}--${slug}.html`), html);
      fs.writeFileSync(path.join(OUT, `${kind}--${slug}.txt`), textOf(html));
      for (const i of imgsOf(html)) images.add(i);
      console.log("ok", kind, slug);
    } catch (e) {
      console.log("fail", kind, slug, String(e));
    }
  }
}

let saved = 0;
for (const u of images) {
  if (!/baselinker|blob\.vercel-storage|dcs-drone\.com\/images|dcs-drone\.com\/_next\/image/.test(u)) continue;
  if (u.includes("/_next/image")) continue;
  try {
    const r = await fetch(u, { headers: UA });
    if (!r.ok) continue;
    const ext = (u.match(/\.(png|jpe?g|webp|gif|svg)(?:\?|$)/i) || [, "jpg"])[1].toLowerCase();
    let name = decodeURIComponent((u.split("/").pop() || "img").split("?")[0]).replace(/[^a-z0-9._-]/gi, "_").slice(-70);
    if (!name.toLowerCase().endsWith("." + ext)) name += "." + ext;
    const file = path.join(IMG, name);
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
      saved++;
    }
  } catch {}
}

fs.writeFileSync(path.join(OUT, "_summary.json"), JSON.stringify({ summary, detail, images: [...images], saved }, null, 1));
console.log("news links", detail.news.length, "catalog links", detail.catalog.length, "images saved", saved);
