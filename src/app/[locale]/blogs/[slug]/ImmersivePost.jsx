"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";

import { CodeBlock, ColorSwatches } from "@/app/components/blog/BlogContentBlocks";
import { formatBlogDate } from "@/lib/utils";
import { premiumEase } from "@/lib/animations";

const WIDE_TYPES = new Set(["quote", "image"]);

function groupBlocks(body) {
  const groups = [];
  let buffer = [];

  body.forEach((block) => {
    if (WIDE_TYPES.has(block.type)) {
      if (buffer.length) {
        groups.push({ width: "narrow", blocks: buffer });
        buffer = [];
      }
      groups.push({ width: "wide", blocks: [block] });
    } else {
      buffer.push(block);
    }
  });

  if (buffer.length) {
    groups.push({ width: "narrow", blocks: buffer });
  }

  return groups;
}

function NarrowBlock({ block, index, counters }) {
  switch (block.type) {
    case "heading": {
      counters.headingIndex += 1;
      counters.hasHeading = true;
      const sectionId = `sec-${counters.headingIndex}`;
      return (
        <div key={index}>
          <div className="mb-7 mt-12 flex items-center gap-3.5 first:mt-0">
            <span className="font-mono text-[10px] tracking-[0.2em] text-primary1">
              &#10022; {String(counters.headingIndex + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-white/6" />
          </div>
          <h2 id={sectionId} className="mb-4.5 scroll-mt-24 text-[26px] font-bold leading-[1.2] tracking-tight text-white">
            {block.text}
          </h2>
        </div>
      );
    }
    case "paragraph": {
      const isLead = !counters.hasHeading && !counters.hasLead;
      if (isLead) counters.hasLead = true;
      return (
        <p
          key={index}
          className={
            isLead
              ? "mb-5.5 text-xl font-light leading-[1.68] tracking-tight text-white/82"
              : "mb-5 text-base font-light leading-[1.72] text-white/62"
          }
        >
          {block.text}
        </p>
      );
    }
    case "code":
      return <CodeBlock key={index} code={block.code} className="mb-6" />;
    case "callout":
      return (
        <div key={index} className="mb-6 rounded-2xl border border-white/6 bg-neutral-900 p-6">
          <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary1">
            {block.eyebrow}
          </div>
          <div className="mb-1.5 text-sm font-semibold text-white">{block.title}</div>
          <div className="text-[13px] leading-relaxed text-white/50">{block.text}</div>
        </div>
      );
    case "colorSwatches":
      return <ColorSwatches key={index} items={block.items} className="mb-6" />;
    default:
      return null;
  }
}

function WideBlock({ block, index }) {
  if (block.type === "quote") {
    return (
      <div key={index} className="my-10 px-6 md:px-10">
        <div className="rounded-[20px] border border-primary1/12 bg-neutral-900 px-8 py-10 text-center md:px-12">
          <p className="mx-auto max-w-xl text-[28px] font-light leading-[1.45] tracking-tight text-white">
            &ldquo;{block.text}&rdquo;
          </p>
        </div>
      </div>
    );
  }

  if (block.type === "image") {
    return (
      <div key={index} className="my-10 px-6 md:px-10">
        <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
          <Image src={block.src} alt={block.caption || ""} fill sizes="100vw" className="object-cover" />
        </div>
        {block.caption ? (
          <p className="mt-2.5 px-1 text-[11px] tracking-wide text-white/35">{block.caption}</p>
        ) : null}
      </div>
    );
  }

  return null;
}

export default function ImmersivePost({ post, locale }) {
  const t = useTranslations("BlogPage");
  const articleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });

  const groups = groupBlocks(post.body);
  const counters = { headingIndex: -1, hasHeading: false, hasLead: false };
  const authorRole = post.authorRoleOverride || post.author.role;

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
    <main className="bg-[#0a0a0a]">
      <div className="sticky top-0 z-50 h-[3px] bg-white/5">
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          className="h-full bg-primary1"
        />
      </div>

      <div className="sticky top-[3px] z-40 flex h-[52px] items-center justify-between bg-[#060606]/85 px-5 backdrop-blur-md md:px-10">
        <Link
          href={`/${locale}/blogs`}
          className="inline-flex items-center gap-2.5 text-white/40 transition-colors duration-300 hover:text-primary1"
        >
          <span className="text-lg font-light leading-none">&larr;</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{t("backToBlog")}</span>
        </Link>
        <span className="text-base font-black tracking-tight text-white">SYNTTEK</span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.14em] text-white/30">
            {t("readingTimeLabel", { minutes: post.readingMinutes })}
          </span>
          <button
            type="button"
            onClick={handleShare}
            aria-label={t("shareLabel")}
            className="inline-flex size-[30px] items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 hover:border-primary1/30 hover:text-primary1"
          >
            <svg width="12" height="12" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <article ref={articleRef}>
        <div className="relative overflow-hidden px-6 pb-14 pt-16 md:px-10 md:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-16 size-[480px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(161,226,51,0.05) 0%, transparent 68%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-16 size-[380px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(134,79,254,0.04) 0%, transparent 65%)" }}
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="rounded-full border border-primary1/18 bg-primary1/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary1">
                {t(`categories.${post.category}`)}
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-white/30">
                {formatBlogDate(post.date, locale)}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.06, ease: premiumEase }}
              className="mb-9 max-w-3xl text-[clamp(2.6rem,7vw,4.75rem)] font-black leading-[0.93] tracking-display text-white"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={34}
                height={34}
                className="rounded-full border border-white/10 object-cover"
              />
              <span className="text-sm text-white/55">{post.author.name}</span>
              <span className="text-white/18">&middot;</span>
              <span className="text-sm font-light text-white/35">{authorRole}</span>
            </motion.div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/6" />
              <span className="text-[9px] text-primary1">&#10040;</span>
              <div className="h-px flex-1 bg-white/6" />
            </div>
          </div>
        </div>

        {groups.map((group, groupIndex) =>
          group.width === "wide" ? (
            <WideBlock key={groupIndex} block={group.blocks[0]} index={groupIndex} />
          ) : (
            <div key={groupIndex} className="mx-auto max-w-2xl px-6 md:px-8">
              {group.blocks.map((block, blockIndex) => (
                <NarrowBlock key={blockIndex} block={block} index={blockIndex} counters={counters} />
              ))}
            </div>
          ),
        )}

        <div className="mx-auto max-w-2xl px-6 pb-20 md:px-8">
          <div className="mb-9 flex items-start gap-4.5 rounded-[18px] border border-white/6 bg-neutral-900 p-6.5">
            <Image
              src={post.author.image}
              alt={post.author.name}
              width={48}
              height={48}
              className="shrink-0 rounded-full border border-white/10 object-cover"
            />
            <div>
              <div className="mb-1 text-sm font-semibold text-white">{post.author.name}</div>
              <div className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary1">
                {authorRole}
              </div>
              <p className="text-[13px] leading-relaxed text-white/50">{post.author.bio}</p>
            </div>
          </div>

          {post.tags.length > 0 ? (
            <div className="mb-9 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/8 px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <Link
            href={`/${locale}/blogs`}
            className="inline-flex items-center gap-2.5 text-primary1 transition-opacity duration-300 hover:opacity-75"
          >
            <span>&larr;</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">{t("exploreMore")}</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
