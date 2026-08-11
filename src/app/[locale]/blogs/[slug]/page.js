import { notFound } from "next/navigation";
import Footer from "@/app/components/(common)/Footer";
import ScopedIntlProvider from "@/app/components/ScopedIntlProvider";
import FloatingWidgets from "@/app/components/FloatingWidgets";
import JsonLd from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getCanonicalUrl, getLanguageAlternates } from "@/lib/seo";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildGraphJsonLd } from "@/lib/jsonLd";

import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blogPosts";

import PostDetail from "./PostDetail";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);

  if (!post) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "BlogPage" });
  const baseUrl = SITE_URL;
  const title = t("detailPageTitle", { title: post.title });
  const description = post.excerpt;
  const imageUrl = `${baseUrl}${post.image.src}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: getCanonicalUrl(locale, `/blogs/${slug}`),
      languages: getLanguageAlternates(`/blogs/${slug}`),
    },
    openGraph: {
      title,
      description,
      url: getCanonicalUrl(locale, `/blogs/${slug}`),
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: post.image.width,
          height: post.image.height,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug, locale, 2);
  const shareUrl = getCanonicalUrl(locale, `/blogs/${slug}`);
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  const postSchema = buildGraphJsonLd([
    buildArticleJsonLd({
      title: post.title,
      description: post.excerpt,
      url: shareUrl,
      image: `${SITE_URL}${post.image.src}`,
      datePublished: post.date,
      authorName: post.author.name,
      articleSection: post.category,
      keywords: post.tags,
      locale,
      timeRequired: `PT${post.readingMinutes}M`,
    }),
    buildBreadcrumbJsonLd([
      { name: SITE_NAME, item: `${SITE_URL}/${locale}` },
      { name: t("pageTitle"), item: getCanonicalUrl(locale, "/blogs") },
      { name: post.title, item: shareUrl },
    ]),
  ]);

  return (
    <>
      <JsonLd data={postSchema} />
      <ScopedIntlProvider locale={locale} namespaces={["Navbar", "BlogPage", "ChatBot"]}>
        <PostDetail post={post} relatedPosts={relatedPosts} locale={locale} shareUrl={shareUrl} />
        <FloatingWidgets />
      </ScopedIntlProvider>
      <Footer />
    </>
  );
}
