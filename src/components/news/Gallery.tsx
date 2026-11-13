import Image from "next/image";
import { Stagger, Item } from "@/components/motion/Reveal";
import type { GalleryImage } from "@/lib/content/news";

/** One group = six grid cells: two rows of three on desktop, three rows of two on mobile. */
const CELLS_PER_GROUP = 6;

const cells = (img: GalleryImage) => (img.span === "wide" ? 2 : 1);

type Numbered = { img: GalleryImage; n: number };

/** Split the gallery into six-cell groups so each group reveals as it scrolls into view. */
function group(images: GalleryImage[]): Numbered[][] {
  const groups: Numbered[][] = [];
  let current: Numbered[] = [];
  let used = 0;
  images.forEach((img, i) => {
    current.push({ img, n: i + 1 });
    used += cells(img);
    if (used >= CELLS_PER_GROUP) {
      groups.push(current);
      current = [];
      used = 0;
    }
  });
  if (current.length) groups.push(current);
  return groups;
}

/** Mosaic photo grid: 2 columns on mobile, 3 on desktop, captions on hover. */
export function Gallery({ images }: { images: GalleryImage[] }) {
  const total = images.length;

  return (
    <div className="space-y-3 lg:space-y-4">
      {group(images).map((items, g) => (
        <Stagger
          key={g}
          as="ul"
          stagger={0.07}
          amount={0.15}
          className="grid grid-flow-dense grid-cols-2 auto-rows-[38vw] gap-3 sm:auto-rows-[30vw] lg:grid-cols-3 lg:auto-rows-[clamp(220px,21vw,300px)] lg:gap-4"
        >
          {items.map(({ img, n }) => (
            <Item
              as="li"
              key={img.src}
              className={`group relative overflow-hidden rounded-[20px] bg-ink-2 ${
                img.span === "wide" ? "col-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.span === "wide" ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 30vw, 50vw"}
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-4 text-white opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100"
              >
                <span className="text-[13px] leading-[1.4]">{img.alt}</span>
                <span className="shrink-0 font-mono text-[11px] tabular-nums text-white/70">
                  {String(n).padStart(2, "0")} / {total}
                </span>
              </div>
            </Item>
          ))}
        </Stagger>
      ))}
    </div>
  );
}
