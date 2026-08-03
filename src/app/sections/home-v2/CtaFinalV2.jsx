"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import RevealBlock from "@/app/components/RevealBlock";
import MagneticButton from "@/app/components/MagneticButton";
import { getWhatsAppUrl } from "@/lib/business";
import { getLocalizedPath } from "@/lib/seo";

const ease = [0.16, 1, 0.3, 1];

const CtaFinalV2 = () => {
  const locale = useLocale();
  const t = useTranslations("HomeV2");
  const waHref = getWhatsAppUrl(t("waMessage"));
  const marquee = t.raw("ctaFinal.marquee");

  // marquee infinito que desacelera al hover — mismo mecanismo que CallToAction
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(scope.current, { x: "-50%" }, { duration: 30, ease: "linear", repeat: Infinity });
  }, []);
  useEffect(() => {
    if (animation.current) animation.current.speed = isHovered ? 0.5 : 1;
  }, [isHovered]);

  return (
    <section aria-labelledby="cta-final-heading" className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(161,226,51,0.05) 0%, transparent 65%)",
        }}
      />

      {/* Marquee de marca */}
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group flex flex-none gap-12 pr-12 text-6xl font-medium md:text-7xl"
        >
          {Array.from({ length: 4 }).map((_, block) => (
            <div key={block} className="flex flex-none items-center gap-12">
              {marquee.map((word) => (
                <div key={`${block}-${word}`} className="flex flex-none items-center gap-12">
                  <span className="text-primary1">&#10040;</span>
                  <span className="whitespace-nowrap transition-colors group-hover:text-primary1">
                    {word}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bloque CTA */}
      <RevealBlock className="relative mx-auto mt-16 max-w-3xl px-4 text-center">
        <h2
          id="cta-final-heading"
          className="text-[clamp(2rem,4.5vw,3.6rem)] font-black leading-[1.03] tracking-tight text-white"
        >
          {t.rich("ctaFinal.title", { hl: (chunks) => <span className="text-primary1">{chunks}</span> })}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-white/42">
          {t("ctaFinal.subtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton
            as="a"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            hoverScale={1.03}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#A1E233] px-7 py-3.5 text-sm font-bold tracking-wide text-black"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            {t("ctaFinal.ctaPrimary")}
            <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <motion.a
            href={getLocalizedPath(locale, "/contacto")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
          >
            {t("ctaFinal.ctaSecondary")}
          </motion.a>
        </div>
      </RevealBlock>
    </section>
  );
};

export default CtaFinalV2;
