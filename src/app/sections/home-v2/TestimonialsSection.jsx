"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimate, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import { GOOGLE_MAPS_URL } from "@/lib/business";
import { cn } from "@/lib/utils";
import fernandoPhoto from "@/app/assets/testimonials/fernando.webp";

const ease = [0.16, 1, 0.3, 1];
const CAROUSEL_DURATION = 34;

// Un acento por testimonio — mismo mecanismo que ya usan las secciones de About.
const AUTHOR_ACCENTS = ["#A1E233", "#5B8DEF", "#E8593C"];

// Autores con foto real de perfil. El resto cae automáticamente al avatar con inicial.
const AUTHOR_PHOTOS = {
  "Fernando Catalano": fernandoPhoto,
};

function Avatar({ author, accent }) {
  const photo = AUTHOR_PHOTOS[author];
  const initial = author.trim().charAt(0).toUpperCase();

  if (photo) {
    return (
      <span className="relative size-10 shrink-0 overflow-hidden rounded-full border border-white/10">
        <Image src={photo} alt="" fill sizes="40px" className="object-cover" />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
      style={{ backgroundColor: `${accent}1F`, color: accent }}
    >
      {initial}
    </span>
  );
}

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

function TestimonialCardBody({ item, ratingLabel, googleBadge, accent, featured = false }) {
  return (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <Stars label={ratingLabel} />
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white/45">
            {googleBadge}
          </span>
        </div>
        <blockquote
          className={cn(
            "font-light leading-relaxed text-white/72",
            featured ? "text-base md:text-lg md:max-w-xl" : "text-sm md:text-base",
          )}
        >
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar author={item.author} accent={accent} />
        <span className="text-sm font-medium text-white">{item.author}</span>
      </figcaption>
    </>
  );
}

// Carrousel infinito, solo mobile (< sm) — mismo mecanismo de marquee que ya usa
// CtaFinalV2 (useAnimate + loop lineal), pero solo corre mientras el viewport es
// mobile para no gastar ciclos de animación con el track oculto en desktop. Con
// prefers-reduced-motion cae a una fila con scroll manual (sin loop ni duplicado).
function TestimonialsMobileCarousel({ items, ratingLabel, googleBadge }) {
  const [scope, animate] = useAnimate();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !scope.current) return undefined;

    const mediaQuery = window.matchMedia("(max-width: 639px)");
    let controls;

    const sync = () => {
      controls?.stop();
      controls = mediaQuery.matches
        ? animate(scope.current, { x: "-50%" }, { duration: CAROUSEL_DURATION, ease: "linear", repeat: Infinity })
        : null;
    };

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => {
      mediaQuery.removeEventListener("change", sync);
      controls?.stop();
    };
  }, [animate, scope, prefersReduced]);

  const loopItems = prefersReduced ? items : [...items, ...items];

  return (
    <div
      className="relative -mx-4 mt-14 sm:hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        ref={scope}
        className={cn(
          "flex gap-4 px-4",
          prefersReduced ? "snap-x snap-mandatory overflow-x-auto pb-2" : "w-max",
        )}
      >
        {loopItems.map((item, i) => (
          <figure
            key={`${item.author}-${i}`}
            className="w-[82vw] shrink-0 snap-start rounded-2xl border border-white/8 bg-neutral-900 p-7"
          >
            <TestimonialCardBody
              item={item}
              ratingLabel={ratingLabel}
              googleBadge={googleBadge}
              accent={AUTHOR_ACCENTS[i % items.length % AUTHOR_ACCENTS.length]}
            />
          </figure>
        ))}
      </div>
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

  const ratingLabel = t("ratingLabel");
  const googleBadge = t("googleBadge");

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
            {t.rich("title", { hl: (chunks) => <span className="text-[#A1E233]">{chunks}</span> })}
          </motion.h2>
        </div>

        <TestimonialsMobileCarousel items={items} ratingLabel={ratingLabel} googleBadge={googleBadge} />

        <div className="mx-auto mt-14 hidden max-w-4xl gap-5 sm:grid sm:grid-cols-2">
          {items.map((item, i) => {
            const featured = i === 0;
            return (
              <motion.figure
                key={item.author}
                variants={variants}
                custom={0.2 + i * 0.12}
                initial="hidden"
                animate={mounted ? "visible" : "hidden"}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border border-white/8 bg-neutral-900 p-7 transition-colors duration-300 hover:border-white/16",
                  featured && "sm:col-span-2 sm:p-9",
                )}
              >
                <TestimonialCardBody
                  item={item}
                  ratingLabel={ratingLabel}
                  googleBadge={googleBadge}
                  accent={AUTHOR_ACCENTS[i % AUTHOR_ACCENTS.length]}
                  featured={featured}
                />
              </motion.figure>
            );
          })}
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
