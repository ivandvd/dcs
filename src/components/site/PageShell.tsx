"use client";

import { ViewTransition } from "react";
import { usePathname } from "next/navigation";

/**
 * Wraps a route's content so navigations animate: the old page recedes while
 * the new one rises in as a rounded sheet (see view-transition rules in globals.css).
 * Keyed by pathname so React treats the old and new page as an exit/enter pair.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
      {/* opaque background so the page snapshot does not show the previous page through gaps */}
      <div className="relative bg-paper">{children}</div>
    </ViewTransition>
  );
}
