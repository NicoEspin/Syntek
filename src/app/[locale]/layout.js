import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import { SITE_NAME, SITE_URL } from "@/lib/site";

import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/app/components/SmoothScroll";
import CustomCursor from "@/app/components/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTM_ID = "GTM-57R9P9LF";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  manifest: "/manifest.webmanifest",
  applicationName: SITE_NAME,

  title: {
    default: "Synttek | Web, Software, Diseño e IA",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Agencia digital de Córdoba especializada en desarrollo web, software a medida, diseño y soluciones con inteligencia artificial.",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",

    title: "Synttek | Web, Software, Diseño e IA",

    description:
      "Creamos soluciones digitales que hacen crecer tu negocio: desarrollo web, software a medida, diseño e inteligencia artificial.",

    images: [
      {
        url: "/og-synttek.jpg",
        width: 1200,
        height: 630,
        alt: "Synttek — Web, Software, Diseño e Inteligencia Artificial",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Synttek | Web, Software, Diseño e IA",

    description: "Creamos soluciones digitales que hacen crecer tu negocio.",

    images: [
      {
        url: "/og-synttek.jpg",
        alt: "Synttek — Web, Software, Diseño e Inteligencia Artificial",
      },
    ],
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider locale={locale} messages={null}>
          <SmoothScroll>{children}</SmoothScroll>
        </NextIntlClientProvider>
        <CustomCursor />
      </body>
    </html>
  );
}
