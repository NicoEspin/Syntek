import Footer from "@/app/components/(common)/Footer";
import Navbar from "@/app/components/(common)/Navbar";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates, getLocalizedPath } from "@/lib/seo";
import {
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildGraphJsonLd,
  buildItemListJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/jsonLd";

import { getBlogPosts } from "@/data/blogPosts";

import BlogsClient from "./BlogsClient";

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
      url: getCanonicalUrl(locale, "/blogs"),
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
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  const path = getLocalizedPath(locale, "/blogs");

  const structuredData = buildGraphJsonLd([
    buildCollectionPageJsonLd({
      name: t("pageTitle"),
      path,
      description: t("pageDescription"),
      items: buildItemListJsonLd(
        posts.map((post) => ({
          url: getCanonicalUrl(locale, `/blogs/${post.slug}`),
          name: post.title,
        })),
      ),
    }),
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: getCanonicalUrl(locale) },
      { name: t("pageTitle"), item: getCanonicalUrl(locale, "/blogs") },
    ]),
    buildOrganizationJsonLd(),
    buildWebsiteJsonLd(locale),
    ...posts.map((post) =>
      buildBlogPostingJsonLd({
        title: post.title,
        description: post.excerpt,
        url: getCanonicalUrl(locale, `/blogs/${post.slug}`),
        image: `${SITE_URL}${post.image.src}`,
        datePublished: post.date,
        authorName: post.author.name,
        locale,
      }),
    ),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar />
      <BlogsClient locale={locale} posts={posts} />
      <FloatingWidgets />
      <Footer />
    </>
  );
}
