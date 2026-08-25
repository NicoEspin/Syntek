"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Handshake, Layers, Search } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];
const NUMERALS = ["01", "02", "03"];
const ICONS = [Search, Layers, Handshake];
const ACCENTS = ["#A1E233", "#5B8DEF", "#9B6DFF"];

const AboutPhilosophy = () => {
  const t = useTranslations("AboutPage.philosophy");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const paragraphs = t.raw("paragraphs");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="about-philosophy-heading"
      className="relative border-t border-white/[0.06] px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="relative mx-auto max-w-screen-2xl">
        <motion.h2
          id="about-philosophy-heading"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.75, ease }}
          className="max-w-3xl text-display-sm font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
        >
          {t.rich("title", { hl: (chunks) => <span className="text-[color:var(--color-accent)]">{chunks}</span> })}
        </motion.h2>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-6 right-6 top-6 hidden h-px bg-white/[0.08] md:block"
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {paragraphs.map((paragraph, index) => {
              const Icon = ICONS[index];
              const accent = ACCENTS[index];

              return (
                <motion.div
                  key={paragraph}
                  initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: index * 0.15, ease }}
                  className="relative"
                >
                  <span
                    className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900"
                    style={{ boxShadow: `inset 0 0 0 1px ${accent}22` }}
                  >
                    <Icon aria-hidden className="size-5" style={{ color: accent }} />
                  </span>

                  <span
                    className="mt-4 block font-mono text-xs font-semibold tracking-widest"
                    style={{ color: accent }}
                  >
                    {NUMERALS[index]}
                  </span>
                  <p className="mt-3 text-base font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-lg">
                    {paragraph}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
