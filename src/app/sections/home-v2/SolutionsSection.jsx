"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import SplitHeadline from "@/app/components/SplitHeadline";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// acento + imagen por solución (imágenes generadas con IA →
// /public/nueva-home/soluciones). Mientras no existan, el gradiente del panel
// deja la card presentable igual.
const SOLUTIONS_META = [
  { accent: "#A1E233", img: "/nueva-home/soluciones/consultas.webp" },
  { accent: "#5B8DEF", img: "/nueva-home/soluciones/ventas.webp" },
  { accent: "#FFB547", img: "/nueva-home/soluciones/automatizacion.webp" },
  { accent: "#E8593C", img: "/nueva-home/soluciones/procesos.webp" },
  { accent: "#9B6DFF", img: "/nueva-home/soluciones/agente-ia.webp" },
];

// ─── Contenido visual de una solución — sin lógica de scroll, reusado tanto
// por la versión sticky (scroll-driven) como por el fallback estático de
// prefers-reduced-motion. `imgY` es opcional: sólo la variante sticky pasa un
// MotionValue de parallax.
function SolutionCardBody({ card, index, accent, img, ctaLabel, href, imgY }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)]">
      <div className="grid h-full md:grid-cols-[0.42fr_0.58fr]">
        {/* Panel de imagen (con fallback de gradiente) */}
        <div
          className="relative h-44 overflow-hidden sm:h-64 md:h-full"
          style={{ background: `radial-gradient(120% 100% at 20% 0%, ${accent}2e, transparent 55%), #0d0d0d` }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center text-[6rem] font-black leading-none md:text-[9rem]"
            style={{ color: `${accent}1a` }}
          >
            ✸
          </span>
          {imgY ? (
            <motion.div style={{ y: imgY }} className="relative h-full w-full">
              <Image
                src={img}
                alt={card.title}
                fill
                className="scale-110 object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.16]"
                sizes="(max-width: 768px) 100vw, 45vw"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
            </motion.div>
          ) : (
            <Image
              src={img}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 45vw"
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-neutral-900/70" />
        </div>

        {/* Contenido */}
        <div className="relative flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-14">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-10 select-none text-[9rem] font-black leading-none tabular-nums md:text-[11rem]"
            style={{ color: `${accent}0d` }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className="w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}12` }}
          >
            {card.tag}
          </span>

          <h3 className="text-display-sm leading-display tracking-display relative mt-5 font-black text-white sm:mt-6">
            {card.title}
          </h3>
          <p className="relative mt-3 max-w-lg text-sm font-light leading-relaxed text-white/55 sm:mt-4 md:text-base lg:text-[17px]">
            {card.description}
          </p>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-3 transition-transform duration-300 ease-premium hover:translate-x-1 sm:mt-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
              {ctaLabel}
            </span>
            <span
              aria-hidden
              className="flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
              style={{ borderColor: `${accent}40`, color: accent }}
            >
              <svg width="11" height="11" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1 7L7 1M7 1H2M7 1V6"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Card scroll-driven — cada una ocupa 1/total del progreso del contenedor
// sticky. Crossfade + scale-in + parallax de imagen (desktop, sin reduced-motion).
function SolutionCard({ card, index, total, accent, img, progress, ctaLabel, href, parallaxEnabled }) {
  const start = index / total;
  const end = (index + 1) / total;
  const pad = Math.min(0.1, 0.6 / total);

  const opacity = useTransform(
    progress,
    [Math.max(0, start - pad), start + pad, Math.max(start + pad, end - pad), end],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0],
  );
  const scale = useTransform(progress, [Math.max(0, start - pad), start + pad], [0.94, 1]);
  const y = useTransform(progress, [Math.max(0, start - pad), start + pad], [40, 0]);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? "auto" : "none"));
  const imgY = useTransform(progress, [start, end], parallaxEnabled ? ["-6%", "6%"] : ["0%", "0%"]);

  return (
    <motion.div
      style={{ opacity, scale, y, pointerEvents }}
      className="absolute inset-0 flex items-center justify-center px-1"
    >
      <div className="relative h-full w-full">
        <SolutionCardBody card={card} index={index} accent={accent} img={img} ctaLabel={ctaLabel} href={href} imgY={imgY} />
      </div>
    </motion.div>
  );
}

const SolutionsSection = () => {
  const t = useTranslations("HomeV2.solutions");
  const waHref = getWhatsAppUrl(useTranslations("HomeV2")("waMessage"));
  const cards = t.raw("cards");
  const total = cards.length;
  const [line1, line2] = t("title").split(". ");
  const prefersReduced = useReducedMotion();

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(total - 1, Math.max(0, Math.round(v * (total - 1))));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  const cardHeightClass = "h-[580px] sm:h-[560px] md:h-[500px] lg:h-[560px] xl:h-[610px]";
  const activeAccent = SOLUTIONS_META[activeIndex % SOLUTIONS_META.length].accent;

  return (
    <section
      id="soluciones"
      aria-labelledby="solutions-heading"
      className="relative px-4 pb-24 pt-16 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 45% at 80% 30%, rgba(161,226,51,0.03) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <TitleSection title={t("sectionLabel")} />
          <h2
            id="solutions-heading"
            aria-label={t("title")}
            className="mt-5 text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[1.02] tracking-tight text-white"
          >
            <SplitHeadline as="span" text={`${line1}.`} ariaHidden className="inline" />{" "}
            <span className="text-[#A1E233]">
              <SplitHeadline as="span" text={line2} ariaHidden delay={(line1.split(" ").length + 1) * 0.055} className="inline" />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>

      {prefersReduced ? (
        // Sin scroll-jacking ni parallax: lista estática, cada card entra con un
        // fade simple al entrar en viewport.
        <div className="relative mx-auto mt-14 flex max-w-screen-2xl flex-col gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4 }}
              className={cardHeightClass}
            >
              <SolutionCardBody
                card={card}
                index={i}
                accent={SOLUTIONS_META[i % SOLUTIONS_META.length].accent}
                img={SOLUTIONS_META[i % SOLUTIONS_META.length].img}
                ctaLabel={t("rowCta")}
                href={waHref}
                imgY={null}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        // stackRef alto = escenario sticky que se mantiene fijo mientras scrolleás
        <div ref={containerRef} className="relative" style={{ height: `${total * 100}vh` }}>
          {/* pt-20/24 = despeje del navbar flotante fixed */}
          <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pt-20 md:pt-24">
            {/* halo ambiental de fondo: muta de color según la solución activa */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div
                className="absolute left-1/2 top-[38%] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[130px] transition-colors duration-700 ease-premium md:size-[560px]"
                style={{ backgroundColor: activeAccent }}
              />
            </div>

            <div className="relative mx-auto w-full max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24">
              <div className={`relative ${cardHeightClass}`}>
                {cards.map((card, i) => (
                  <SolutionCard
                    key={card.title}
                    card={card}
                    index={i}
                    total={total}
                    accent={SOLUTIONS_META[i % SOLUTIONS_META.length].accent}
                    img={SOLUTIONS_META[i % SOLUTIONS_META.length].img}
                    progress={scrollYProgress}
                    ctaLabel={t("rowCta")}
                    href={waHref}
                    parallaxEnabled={!isMobile}
                  />
                ))}

                {/* indicador de progreso — índice + rail */}
                <div className="pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex xl:right-4">
                  {cards.map((c, i) => (
                    <div key={c.title} className="flex items-center gap-2.5">
                      <span
                        className="font-mono text-[11px] font-semibold tabular-nums transition-[color,transform] duration-500 ease-out"
                        style={{
                          color: i === activeIndex ? "#A1E233" : "rgba(255,255,255,0.28)",
                          transform: i === activeIndex ? "scale(1.15)" : "scale(1)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="w-[3px] rounded-full transition-[height,background-color] duration-500 ease-out"
                        style={{
                          height: i === activeIndex ? "26px" : "8px",
                          backgroundColor: i <= activeIndex ? "#A1E233" : "rgba(255,255,255,0.16)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsSection;
