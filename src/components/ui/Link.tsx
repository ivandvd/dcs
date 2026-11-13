"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/i18n/I18nProvider";
import { localizeHref } from "@/lib/i18n/config";

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href: string };

/** next/link that prefixes internal hrefs with the current locale ("/about" -> "/pl/about"). */
export function Link({ href, ...rest }: Props) {
  const locale = useLocale();
  return <NextLink href={localizeHref(href, locale)} {...rest} />;
}
