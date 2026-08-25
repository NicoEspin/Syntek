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

const SPANS = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

// Un acento cromático por ítem — misma paleta que ya usa Services.jsx en el
// resto del sitio, ayuda a escanear las 4 ideas de un vistazo.
const ITEM_ACCENTS = ["#A1E233", "#5B8DEF", "#E8593C", "#9B6DFF"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
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
        <motion.h2
          id="growth-system-heading"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.75, ease }}
          className="max-w-2xl text-display-md font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
        >
          {t.rich("title", { hl: (chunks) => <span className="text-[color:var(--color-accent)]">{chunks}</span> })}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-14 grid gap-4 md:grid-cols-6"
        >
          {items.map((item, index) => {
            const Icon = ICONS[item.icon];
            const accent = ITEM_ACCENTS[index % ITEM_ACCENTS.length];

            return (
              <motion.div
                key={item.number}
                variants={itemVariants}
                whileHover={
                  prefersReduced
                    ? undefined
                    : {
                        y: -4,
                        boxShadow: `0 20px 50px ${accent}29`,
                      }
                }
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-neutral-900 p-8 ${SPANS[index % SPANS.length]}`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-4 font-mono text-8xl font-bold text-white/[0.04]"
                >
                  {item.number}
                </span>

                <div className="relative flex items-center justify-between">
                  <span
                    className="font-mono text-sm font-semibold tracking-widest"
                    style={{ color: accent }}
                  >
                    {item.number}
                  </span>
                  {Icon ? (
                    <span
                      className="flex size-10 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${accent}1F` }}
                    >
                      <Icon aria-hidden className="size-5" style={{ color: accent }} />
                    </span>
                  ) : null}
                </div>

                <div className="relative mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-fg-1)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-base">
                    {item.copy}
                  </p>
                </div>
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
