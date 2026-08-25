"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import anttoPhoto from "@/app/assets/antto.webp";
import nicoPhoto from "@/app/assets/nico.webp";

const ease = [0.16, 1, 0.3, 1];

const AboutHero = () => {
  const t = useTranslations("AboutPage");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef(null);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-40, 40], [6, -6]);
  const rotateY = useTransform(tiltX, [-40, 40], [-6, 6]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePanelMove = (e) => {
    if (prefersReduced || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    tiltX.set(e.clientX - rect.left - rect.width / 2);
    tiltY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handlePanelLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-x-clip px-4 pb-20 pt-20 md:px-5 md:pt-24 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(161,226,51,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
        <div>
          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24, filter: prefersReduced ? "none" : "blur(6px)" }}
            animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: prefersReduced ? 0.01 : 0.9, ease }}
            className="whitespace-pre-line text-display-lg font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
          >
            {t.rich("hero.headline", { hl: (chunks) => <span className="text-[color:var(--color-accent)]">{chunks}</span> })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: prefersReduced ? 0.01 : 0.75, delay: 0.25, ease }}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-[color:var(--color-fg-2)] lg:text-lg"
          >
            {t("hero.paragraph")}
          </motion.p>
        </div>

        <motion.div
          ref={panelRef}
          onMouseMove={handlePanelMove}
          onMouseLeave={handlePanelLeave}
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReduced ? 0.01 : 0.85, delay: 0.35, ease }}
          style={{
            rotateX: prefersReduced ? 0 : rotateX,
            rotateY: prefersReduced ? 0 : rotateY,
            transformPerspective: 900,
          }}
          className="relative w-full shrink-0 rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 lg:w-72"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2rem]"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 30% 0%, rgba(134,79,254,0.14) 0%, transparent 70%)",
            }}
          />
          <div className="relative rounded-[calc(2rem-0.5rem)] bg-neutral-900 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="block text-[11px] font-medium uppercase tracking-[var(--tracking-eyebrow)] text-[color:var(--color-fg-3)]">
              {t("hero.eyebrow")}
            </span>

            <div className="mt-8 flex items-center -space-x-3">
              <span
                className="relative size-12 overflow-hidden rounded-full border-2 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                style={{ borderColor: "#0c0c0c", backgroundColor: "#A1E23314" }}
              >
                <Image src={nicoPhoto} alt="" fill sizes="48px" className="object-contain p-0.5" />
              </span>
              <span
                className="relative size-12 overflow-hidden rounded-full border-2 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
                style={{ borderColor: "#0c0c0c", backgroundColor: "#9B6DFF14" }}
              >
                <Image src={anttoPhoto} alt="" fill sizes="48px" className="object-contain p-0.5" />
              </span>
            </div>

            <p className="mt-4 text-sm font-light leading-snug text-[color:var(--color-fg-2)]">
              {t.rich("team.title", { hl: (chunks) => <span className="text-[color:var(--color-accent)]">{chunks}</span> })}
            </p>

            <div className="mt-6 h-px w-full bg-white/[0.08]" />

            <p className="mt-6 text-xs font-medium text-[color:var(--color-fg-3)]">
              {t("breadcrumbCurrent")}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: prefersReduced ? 0.01 : 0.8, delay: 0.5, ease }}
        style={{ transformOrigin: "left" }}
        className="relative mx-auto mt-16 h-px w-full max-w-screen-2xl bg-white/[0.06] md:mt-20"
      />
    </section>
  );
};

export default AboutHero;
