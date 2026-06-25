"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";

import Navbar from "@/app/components/(common)/Navbar";
import BlogPostCard from "@/app/components/BlogPostCard";
import { CodeBlock, ColorSwatches } from "@/app/components/blog/BlogContentBlocks";
import { cn, formatBlogDate } from "@/lib/utils";
import { premiumEase } from "@/lib/animations";

function ArticleHeading({ text, id }) {
  return (
    <h2
      id={id}
      className="mb-4.5 scroll-mt-28 border-l-2 border-primary1 pl-3.5 text-2xl font-bold tracking-tight text-white"
    >
      {text}
    </h2>
  );
}

function ArticleSubheading({ text }) {
  return (
    <h3 className="mb-3.5 mt-7 text-lg font-semibold tracking-tight text-white">{text}</h3>
  );
}

function ArticleQuote({ text }) {
  return (
    <blockquote className="my-9 border-y border-white/6 py-7">
      <p className="text-[26px] font-light leading-[1.45] tracking-tight text-primary1">
        &ldquo;{text}&rdquo;
      </p>
    </blockquote>
  );
}

function ArticleCallout({ eyebrow, title, text }) {
  return (
    <div className="mb-5 flex items-center gap-7 rounded-2xl border border-white/6 bg-neutral-900 p-5.5">
      <div className="flex size-[72px] shrink-0 items-center justify-center rounded-[10px] border border-white/8 bg-[#0a0a0a]">
        <span className="text-primary1">&#10040;</span>
      </div>
      <div>
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary1">
          {eyebrow}
        </div>
        <div className="mb-1.5 text-sm font-semibold text-white">{title}</div>
        <div className="text-[13px] leading-relaxed text-white/50">{text}</div>
      </div>
    </div>
  );
}

function renderBody(body, postTitle) {
  let headingIndex = -1;

  return body.map((block, index) => {
    switch (block.type) {
      case "heading":
        headingIndex += 1;
        return <ArticleHeading key={index} id={`sec-${headingIndex}`} text={block.text} />;
      case "subheading":
        return <ArticleSubheading key={index} text={block.text} />;
      case "paragraph":
        return (
          <p key={index} className="mb-4.5 text-base font-light leading-[1.72] text-white/70">
            {block.text}
          </p>
        );
      case "quote":
        return <ArticleQuote key={index} text={block.text} />;
      case "code":
        return <CodeBlock key={index} code={block.code} className="mb-7" />;
      case "callout":
        return (
          <ArticleCallout key={index} eyebrow={block.eyebrow} title={block.title} text={block.text} />
        );
      case "colorSwatches":
        return <ColorSwatches key={index} items={block.items} className="mb-7" />;
      case "image":
        return (
          <figure key={index} className="mb-7">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={block.src}
                alt={block.alt || block.caption || postTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-cover"
              />
            </div>
            {block.caption ? (
              <figcaption className="mt-2.5 text-[11px] tracking-wide text-white/35">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      default:
        return null;
    }
  });
}

function renderTitle(title, accent) {
  if (!accent) return title;

  const parts = title.split(accent);
  if (parts.length < 2) return title;

  return (
    <>
      {parts[0]}
      <span className="text-primary1">{accent}</span>
      {parts.slice(1).join(accent)}
    </>
  );
}

export default function PostDetail({ post, relatedPosts, locale }) {
  const t = useTranslations("BlogPage");
  const articleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });

  const headings = post.body.filter((block) => block.type === "heading");
  const [activeHeading, setActiveHeading] = useState(0);

  useEffect(() => {
    const headingEls = headings
      .map((_, index) => document.getElementById(`sec-${index}`))
      .filter(Boolean);

    if (!headingEls.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headingEls.indexOf(entry.target);
            if (index !== -1) setActiveHeading(index);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings.length]);

  const authorRole = post.authorRoleOverride || post.author.role;

  const handleScrollToHeading = (event, index) => {
    event.preventDefault();
    document.getElementById(`sec-${index}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleShare = async () => {
    const shareData = { title: post.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user dismissed the native share sheet — nothing to do
      }
      return;
    }
    navigator.clipboard?.writeText(shareData.url);
  };

  return (
    <>
      <Navbar floating />
      <main className="bg-[#0a0a0a] pb-24 pt-28 md:pt-32">
        <article ref={articleRef} className="mx-auto max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
          <header className="pb-11">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="mb-7 flex flex-wrap items-center gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary1">
                {t(`categories.${post.category}`)}
              </span>
              <span className="text-[8px] text-primary1/40">&#10040;</span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/40">
                {t("readingTimeLabel", { minutes: post.readingMinutes })}
              </span>
              <span className="text-[8px] text-white/18">&#10040;</span>
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/40">
                {formatBlogDate(post.date, locale)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: premiumEase }}
              className="mb-6 max-w-4xl text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-[0.95] tracking-display text-white"
            >
              {renderTitle(post.title, post.titleAccent)}
            </motion.h1>

            {post.dek ? (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
                className="mb-9 max-w-2xl text-lg font-light leading-relaxed text-white/70"
              >
                {post.dek}
              </motion.p>
            ) : null}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center gap-3.5 border-t border-white/6 pt-6"
            >
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={38}
                height={38}
                className="rounded-full border border-white/10 object-cover"
              />
              <div>
                <div className="text-sm font-medium text-white">{post.author.name}</div>
                <div className="mt-0.5 font-mono text-[11px] tracking-wide text-white/40">
                  {authorRole}
                </div>
              </div>
              <div className="flex-1" />
              <button
                type="button"
                onClick={handleShare}
                aria-label={t("shareLabel")}
                className="inline-flex size-[34px] items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 hover:border-primary1/30 hover:text-primary1"
              >
                <svg width="14" height="14" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                  <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          </header>

          <div className="relative mb-12 h-[280px] overflow-hidden rounded-3xl md:h-[360px]">
            <Image src={post.image} alt={post.title} fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="flex flex-col gap-11 lg:flex-row">
            {headings.length > 0 ? (
              <aside className="hidden w-[236px] shrink-0 lg:block">
                <div className="sticky top-32">
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.26em] text-white/25">
                    {t("tocLabel")}
                  </p>
                  <nav className="flex flex-col gap-0.5">
                    {headings.map((blockHeading, index) => (
                      <a
                        key={index}
                        href={`#sec-${index}`}
                        onClick={(event) => handleScrollToHeading(event, index)}
                        className={cn(
                          "rounded-md border-l-2 px-3 py-2 text-[13px] leading-snug transition-all duration-200",
                          activeHeading === index
                            ? "border-primary1 bg-primary1/6 font-medium text-primary1"
                            : "border-transparent text-white/45 hover:text-white/70",
                        )}
                      >
                        {blockHeading.text}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-7 border-t border-white/6 pt-5.5">
                    <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {t("readingProgressLabel")}
                    </p>
                    <div className="h-0.5 overflow-hidden rounded-full bg-white/6">
                      <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        className="h-full bg-primary1"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            ) : null}

            <div className="min-w-0 flex-1">
              {renderBody(post.body, post.title)}

              <div className="mt-14 border-t border-white/6 pt-9">
                {post.tags.length > 0 ? (
                  <div className="mb-12 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-white/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                {relatedPosts.length > 0 ? (
                  <>
                    <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.26em] text-white/25">
                      {t("relatedLabel")}
                    </p>
                    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                      {relatedPosts.map((relatedPost, index) => (
                        <BlogPostCard key={relatedPost.slug} post={relatedPost} index={index} locale={locale} />
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
