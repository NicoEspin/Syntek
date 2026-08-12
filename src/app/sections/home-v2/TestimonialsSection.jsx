"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import { GOOGLE_MAPS_URL } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

function Stars({ label }) {
  return (
    <div role="img" aria-label={label} className="flex gap-0.5 text-[#A1E233]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 6.9L12 17l-6.3 3.8 1.7-6.9L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const TestimonialsSection = () => {
  const t = useTranslations("HomeV2.testimonials");
  const prefersReduced = useReducedMotion();
  const items = t.raw("items");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 28 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0.01 : 0.7, delay: prefersReduced ? 0 : delay, ease },
    }),
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 55% 45% at 50% 20%, rgba(161,226,51,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center text-center">
          <TitleSection title={t("sectionLabel")} />
          <motion.h2
            id="testimonials-heading"
            variants={variants}
            custom={0.1}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-display-sm leading-display tracking-display mt-6 max-w-2xl font-black text-white"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.figure
              key={item.author}
              variants={variants}
              custom={0.2 + i * 0.12}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="flex flex-col justify-between rounded-2xl border border-white/8 bg-neutral-900 p-7"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Stars label={t("ratingLabel")} />
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white/45">
                    {t("googleBadge")}
                  </span>
                </div>
                <blockquote className="text-sm font-light leading-relaxed text-white/72 md:text-base">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 text-sm font-medium text-white">{item.author}</figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/45">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-white/70"
          >
            {t("footerText")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
