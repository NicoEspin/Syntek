"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const ease = [0.16, 1, 0.3, 1];
const DELAYS = [0, 0.15, 0.3];

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
      <div className="relative mx-auto grid max-w-screen-2xl gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.h2
          id="about-philosophy-heading"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.75, ease }}
          className="text-display-sm font-semibold leading-display tracking-display text-[color:var(--color-fg-1)] lg:sticky lg:top-32 lg:self-start"
        >
          {t("title")}
        </motion.h2>

        <div className="flex flex-col">
          {paragraphs.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: prefersReduced ? 0.01 : 0.7, delay: DELAYS[index], ease }}
              className={index > 0 ? "mt-8 border-t border-white/[0.06] pt-8" : ""}
            >
              <p className="text-base font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-lg">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
