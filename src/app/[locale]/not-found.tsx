import type { Metadata } from "next";
import { NotFoundContent } from "@/components/site/NotFoundContent";

export const metadata: Metadata = { title: "404" };

export default function NotFound() {
  return <NotFoundContent />;
}
