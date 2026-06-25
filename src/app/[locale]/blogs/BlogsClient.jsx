"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import BlogPostCard from "@/app/components/BlogPostCard";
import BlogFilterBar from "@/app/components/BlogFilterBar";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";

export default function BlogsClient({ posts, locale }) {
  const t = useTranslations("BlogPage");
  const [activeCategory, setActiveCategory] = useState("all");
  const [subscribed, setSubscribed] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" });

  const categories = useMemo(
    () => [...new Set(posts.map((post) => post.category))],
    [posts],
  );

  const featuredPost = useMemo(() => posts.find((post) => post.featured), [posts]);

  const gridPosts = useMemo(() => {
    if (activeCategory === "all") {
      return posts.filter((post) => post.slug !== featuredPost?.slug);
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts, featuredPost]);

  const sectionHeading =
    activeCategory === "all" ? t("latestLabel") : t(`categories.${activeCategory}`);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] pb-24 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,226,51,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(134,79,254,0.06),transparent_26%)]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/35 transition-colors duration-300 hover:text-primary1"
          >
            <span>{"<-"}</span>
            <span>{t("backHome")}</span>
          </Link>
        </motion.div>

        <div ref={headerRef} className="mb-14 border-b border-white/10 pb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 block text-[11px] uppercase tracking-[0.3em] text-primary1"
          >
            {t("eyebrow")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-display-lg font-black leading-display tracking-display text-white"
          >
            {t("headingLine1")} <span className="text-primary1">{t("headingAccent")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-white/45 md:text-base"
          >
            {t("intro")}
          </motion.p>
        </div>

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <BlogFilterBar
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {activeCategory === "all" && featuredPost ? (
          <div className="mb-12">
            <BlogPostCard post={featuredPost} variant="featured" locale={locale} />
          </div>
        ) : null}

        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold tracking-tight text-white/72">{sectionHeading}</h2>
          <span className="font-mono text-[11px] text-white/28">
            {gridPosts.length.toString().padStart(2, "0")} {t("articlesCountLabel")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {gridPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} locale={locale} />
            ))}
          </motion.div>
        </AnimatePresence>

        {gridPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/8 bg-neutral-900/50 px-6 py-12 text-center"
          >
            <h2 className="text-xl font-semibold text-white">{t("emptyTitle")}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/45">{t("emptyDescription")}</p>
          </motion.div>
        ) : null}

        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/8 bg-neutral-900 p-8 md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 120% at 100% 50%, rgba(134,79,254,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 120% at 0% 50%, rgba(161,226,51,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-md">
              <span className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-primary1">
                <span className="h-px w-6 bg-primary1" />
                {t("newsletter.eyebrow")}
              </span>
              <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.05] tracking-tight text-white">
                {t("newsletter.title")}
              </h3>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-white/45">
                {t("newsletter.description")}
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex max-w-[420px] flex-1 flex-wrap gap-3"
              style={{ minWidth: 280 }}
            >
              <Input
                type="email"
                required
                placeholder={t("newsletter.placeholder")}
                className="min-w-[180px] flex-1 rounded-full"
              />
              <Button type="submit" variant="primary" arrow>
                {subscribed ? t("newsletter.success") : t("newsletter.button")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
