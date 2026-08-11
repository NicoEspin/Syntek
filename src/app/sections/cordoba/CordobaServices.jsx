"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Globe, MapPin, Zap, BotMessageSquare } from "lucide-react";
import TitleSection from "@/app/components/(common)/TitleSection";
import SplitHeadline from "@/app/components/SplitHeadline";

const EASE_PREMIUM = [0.16, 1, 0.3, 1];

const ICONS = {
  globe: Globe,
  "map-pin": MapPin,
  zap: Zap,
  bot: BotMessageSquare,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function ServiceCard({ item, prefersReduced }) {
  const Icon = ICONS[item.icon] ?? Globe;
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReduced ? 0.01 : 0.6, ease: EASE_PREMIUM } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-neutral-900 p-7 transition-colors duration-300 hover:border-[#A1E233]/25"
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-[#A1E233]/20 bg-[#A1E233]/8 text-[#A1E233]">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{item.title}</h3>
      <p className="mt-2.5 text-sm font-light leading-relaxed text-white/50">{item.description}</p>
    </motion.div>
  );
}

const CordobaServices = () => {
  const t = useTranslations("Cordoba.services");
  const items = t.raw("items");
  const prefersReduced = useReducedMotion();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      aria-labelledby="cordoba-services-heading"
      className="relative px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <TitleSection title={t("sectionLabel")} />
          <h2
            id="cordoba-services-heading"
            aria-label={t("title")}
            className="mt-5 text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[1.02] tracking-tight text-white"
          >
            <SplitHeadline
              as="span"
              text={t("title")}
              ariaHidden
              className="inline"
              highlightWords={t.raw("titleHighlight")}
              highlightClassName="text-[#A1E233]"
            />
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            {t("subtitle")}
          </p>
        </div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <ServiceCard key={item.title} item={item} prefersReduced={prefersReduced} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CordobaServices;
