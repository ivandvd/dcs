import type { Metadata, Viewport } from "next";
import { Geist_Mono, Onest } from "next/font/google";
import { notFound } from "next/navigation";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import "../globals.css";

const onest = Onest({
  subsets: ["latin", "latin-ext"],
  variable: "--font-onest",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const BASE = "https://dcs-drone.com";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const pl = locale === "pl";
  return {
    metadataBase: new URL(BASE),
    title: {
      default: pl
        ? "DCS – Profesjonalne mycie i inspekcje dronem"
        : "DCS – Professional Drone Cleaning & Inspection Services",
      template: pl ? "%s | DCS – Drone Cleaning Solutions" : "%s | DCS – Drone Cleaning Solutions",
    },
    description: pl
      ? "Rewolucyjna technologia mycia dronem budynków i obiektów. Bezpieczne, wydajne i ekologiczne rozwiązania."
      : "Revolutionary drone cleaning technology for buildings and facilities. Safe, efficient, eco-friendly solutions.",
    openGraph: {
      type: "website",
      locale: pl ? "pl_PL" : "en_GB",
      siteName: "DCS – Global AeroCleaning Solutions",
      images: [{ url: "/images/hero-poster.jpg", width: 1920, height: 1224, alt: "DCS drone cleaning a building facade" }],
    },
    icons: {
      icon: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f3f5ee",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const current: Locale = locale;

  return (
    <html lang={current} className={`${onest.variable} ${geistMono.variable}`}>
      <body>
        <I18nProvider locale={current}>
          <MotionProvider>
            <FloatingNav />
            {children}
            <Footer locale={current} />
            <CookieBanner />
          </MotionProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
