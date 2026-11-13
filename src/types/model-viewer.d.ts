import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ModelViewerAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string;
  poster?: string;
  alt?: string;
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: number | string;
  "rotation-per-second"?: string;
  "shadow-intensity"?: number | string;
  "shadow-softness"?: number | string;
  exposure?: number | string;
  "environment-image"?: string;
  "tone-mapping"?: string;
  reveal?: "auto" | "interaction" | "manual";
  loading?: "auto" | "lazy" | "eager";
  "interaction-prompt"?: "auto" | "none";
  "camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "field-of-view"?: string;
  "touch-action"?: string;
  "disable-zoom"?: boolean;
  "disable-pan"?: boolean;
  ar?: boolean;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}
