"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";

import { cn, formatBlogDate } from "@/lib/utils";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

const CATEGORY_TINT = {
  Estrategia: "accent",
  Diseño: "accent",
  Branding: "accent",
  Automatización: "violet",
  Performance: "violet",
  Desarrollo: "violet",
};

const tintClasses = {
  accent: { border: "border-primary1/25", text: "text-primary1" },
  violet: { border: "border-violet/25", text: "text-violet" },
};

function MetaRow({ post, locale, size = "sm" }) {
  const avatarSize = size === "lg" ? 40 : 28;

  return (
    <div className="flex items-center gap-3">
      <Image
        src={post.author.image}
        alt={post.author.name}
        width={avatarSize}
        height={avatarSize}
        className="rounded-full border border-white/10 object-cover"
        style={{ width: avatarSize, height: avatarSize }}
      />
      <div className="flex flex-col gap-0.5">
        <span className={cn("font-semibold text-white/72", size === "lg" ? "text-[13px]" : "text-xs")}>
          {post.author.name}
        </span>
        <span className="font-mono text-[10px] tracking-wide text-white/28">
          {formatBlogDate(post.date, locale)} · {post.readingMinutes} {post.readingTimeSuffix}
        </span>
      </div>
    </div>
  );
}

export default function BlogPostCard({ post, variant = "grid", index = 0, locale: localeProp }) {
  const ref = useRef(null);
  const locale = localeProp || useLocale();
  const t = useTranslations("BlogPage");
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const href = `/${locale}/blogs/${post.slug}`;
  const categoryLabel = t(`categories.${post.category}`);
  const tint = tintClasses[CATEGORY_TINT[post.category]] ?? tintClasses.accent;
  const postWithSuffix = { ...post, readingTimeSuffix: t("readingTimeSuffix") };

  if (variant === "featured") {
    return (
      <Link href={href} aria-label={`${post.title} - ${t("viewPost")}`} className="group block">
        <motion.article
          ref={ref}
          initial={{ opacity: 0, y: 48 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={transition}
          className="flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-neutral-900/70 backdrop-blur-sm transition-colors duration-500 hover:border-primary1/30 md:flex-row md:min-h-[22rem]"
        >
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[22rem] md:w-[55%] md:shrink-0">
            <motion.div className="h-full w-full" whileHover={{ scale: 1.035 }} transition={transition}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-5 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
              <span className="text-primary1">&#10040;</span>
              <span className="font-semibold text-primary1">{t("featuredBadge")}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className={cn("font-semibold", tint.text)}>{categoryLabel}</span>
            </div>

            <h2 className="max-w-lg text-[clamp(1.7rem,2.6vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              {post.title}
            </h2>
            <p className="max-w-md text-[15px] font-light leading-relaxed text-white/45">
              {post.excerpt}
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
              <MetaRow post={postWithSuffix} locale={locale} size="lg" />
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 group-hover:text-primary1">
                {t("viewPost")}
                <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={href} aria-label={`${post.title} - ${t("viewPost")}`} className="group block">
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ ...transition, delay: index * 0.06 }}
        className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/8 bg-neutral-900/60 backdrop-blur-sm transition-colors duration-500 hover:border-primary1/25"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div className="h-full w-full" whileHover={{ scale: 1.05 }} transition={transition}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <span
            className={cn(
              "absolute left-4 top-4 rounded-full border bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm",
              tint.border,
              tint.text,
            )}
          >
            {categoryLabel}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-primary1">
            {post.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-white/45">{post.excerpt}</p>
          <div className="border-t border-white/6 pt-4">
            <MetaRow post={postWithSuffix} locale={locale} />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
