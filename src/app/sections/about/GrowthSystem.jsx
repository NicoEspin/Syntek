"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Bot, LayoutGrid, Sparkles, TrendingUp } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const ICONS = {
  TrendingUp,
  LayoutGrid,
  Bot,
  Sparkles,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const GrowthSystem = () => {
  const t = useTranslations("AboutPage.growthSystem");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const items = t.raw("items");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="growth-system-heading"
      className="relative px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="relative mx-auto max-w-screen-2xl">
        <motion.span
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, ease }}
          className="block text-[11px] font-medium uppercase tracking-[var(--tracking-eyebrow)] text-[color:var(--color-accent)]"
        >
          {t("eyebrow")}
        </motion.span>

        <motion.h2
          id="growth-system-heading"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.75, delay: 0.1, ease }}
          className="mt-5 max-w-2xl text-display-md font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {items.map((item) => {
            const Icon = ICONS[item.icon];

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={prefersReduced ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease }}
                className="relative overflow-hidden rounded-3xl border border-white/8 bg-neutral-900 p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold tracking-widest text-[color:var(--color-accent)]">
                    {item.number}
                  </span>
                  {Icon ? (
                    <Icon
                      aria-hidden
                      className="size-5 text-[color:var(--color-fg-3)]"
                    />
                  ) : null}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-[color:var(--color-fg-1)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-base">
                  {item.copy}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.6, delay: 0.15, ease }}
          className="mt-14 text-center text-base font-light leading-relaxed text-[color:var(--color-fg-2)]"
        >
          {t("closing")}
        </motion.p>
      </div>
    </section>
  );
};

export default GrowthSystem;
