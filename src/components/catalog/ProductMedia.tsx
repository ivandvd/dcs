"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ProductGallery } from "@/components/catalog/ProductGallery";
import { ModelViewer } from "@/components/catalog/ModelViewer";
import { useT } from "@/components/i18n/I18nProvider";

type Props = {
  images: string[];
  alt: string;
  name: string;
  model?: { src: string; poster?: string; size: string };
};

/** Photos by default; a "3D" tab when the product has a model. */
export function ProductMedia({ images, alt, name, model }: Props) {
  const t = useT().common;
  const [tab, setTab] = useState<"photos" | "3d">("photos");
  if (!model) return <ProductGallery images={images} alt={alt} name={name} />;

  return (
    <div>
      <div className="mb-4 inline-flex rounded-full border border-ink/10 bg-white p-1">
        {(["photos", "3d"] as const).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
              tab === id ? "text-white" : "text-ink-2 hover:text-ink"
            }`}
          >
            {tab === id && (
              <motion.span layoutId="product-media-tab" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
            )}
            <span className="relative">{id === "photos" ? t.photos : t.model3d}</span>
          </button>
        ))}
      </div>
      {tab === "photos" ? (
        <ProductGallery images={images} alt={alt} name={name} />
      ) : (
        <ModelViewer src={model.src} poster={model.poster} alt={`${name} – ${t.model3d}`} size={model.size} className="aspect-square w-full" />
      )}
    </div>
  );
}
