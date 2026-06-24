import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import ChatBot from "@/app/components/ChatBot";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";

import { getBlogPosts } from "@/data/blogPosts";

import BlogsClient from "./BlogsClient";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  const title = t("pageTitle");
  const description = t("pageDescription");
  const baseUrl = SITE_URL;
  const socialImage = `${baseUrl}/android-chrome-512x512.png`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, "/blogs"),
      languages: getLanguageAlternates("/blogs"),
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/blogs`,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [
        {
          url: socialImage,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function BlogsPage({ params }) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);

  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <BlogsClient locale={locale} posts={posts} />
      <ChatBot />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
