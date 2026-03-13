"use client";
import { motion, useReducedMotion } from "framer-motion";
import { CodeXml, PenTool } from "lucide-react";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import anttoImg from "@/app/assets/antto.webp";
import nicoImg from "@/app/assets/nico.webp";
import TitleSection from "@/app/components/(common)/TitleSection";
import AboutTeamCard from "@/app/components/AboutTeamCard";
import SpotlightCard from "@/app/components/SpotlightCard";
import {
  getFadeUp,
  getStaggerChildren,
  premiumEase,
  subtleEase,
} from "@/lib/animations";

const About = () => {
  const t = useTranslations("About");
  const shouldReduceMotion = useReducedMotion();

  const introVariants = useMemo(
    () => getStaggerChildren(shouldReduceMotion, { delayChildren: 0.08, staggerChildren: 0.12 }),
    [shouldReduceMotion]
  );
  const principleVariants = useMemo(
    () => getStaggerChildren(shouldReduceMotion, { delayChildren: 0.1, staggerChildren: 0.1 }),
    [shouldReduceMotion]
  );
  const teamVariants = useMemo(
    () => getStaggerChildren(shouldReduceMotion, { delayChildren: 0.12, staggerChildren: 0.14 }),
    [shouldReduceMotion]
  );
  const introItemVariants = useMemo(
    () => getFadeUp(shouldReduceMotion, { distance: 44, duration: 0.9, scale: 0.98 }),
    [shouldReduceMotion]
  );
  const principleItemVariants = useMemo(
    () => getFadeUp(shouldReduceMotion, { distance: 32, duration: 0.82, scale: 0.985 }),
    [shouldReduceMotion]
  );
  const eyebrowVariants = useMemo(
    () => getFadeUp(shouldReduceMotion, { distance: 20, duration: 0.7 }),
    [shouldReduceMotion]
  );
  const titleVariants = useMemo(
    () => getFadeUp(shouldReduceMotion, { distance: 46, duration: 0.95 }),
    [shouldReduceMotion]
  );
  const founderReveal = useMemo(
    () => ({
      hidden: (index) => ({
        opacity: 0,
        x: shouldReduceMotion ? 0 : index % 2 === 0 ? -28 : 28,
        y: shouldReduceMotion ? 0 : 24,
      }),
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.24 : 0.88,
          ease: shouldReduceMotion ? subtleEase : premiumEase,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const principles = [
    {
      title: t("card1"),
      description: t("card1-description"),
    },
    {
      title: t("card2"),
      description: t("card2-description"),
    },
    {
      title: t("card3"),
      description: t("card3-description"),
    },
  ];

  const team = [
    {
      name: "Antonella Catalano",
      role: t("antto-rol"),
      imageSrc: anttoImg,
      icon: <PenTool className="size-5" />,
      summary: t("antto-summary"),
      highlights: [t("antto-highlight-1"), t("antto-highlight-2")],
      quote: t("antto-quote"),
    },
    {
      name: "Nicolás Espin",
      role: t("nico-rol"),
      imageSrc: nicoImg,
      icon: <CodeXml className="size-5" />,
      summary: t("nico-summary"),
      highlights: [t("nico-highlight-1"), t("nico-highlight-2")],
      quote: t("nico-quote"),
      inverted: true,
    },
  ];

  return (
    <section
      id="about"
      className="overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div className="mx-auto max-w-screen-2xl">
        <TitleSection title={t("title-section")} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={introVariants}
          className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end"
        >
          <motion.div variants={introItemVariants}>
            <motion.p
              variants={eyebrowVariants}
              className="text-[11px] uppercase tracking-[0.24em] text-primary1/80"
            >
              {t("eyebrow")}
            </motion.p>
            <motion.h2
              variants={titleVariants}
              className="mt-4 max-w-4xl text-4xl font-medium text-white md:text-5xl lg:text-6xl"
            >
              {t("title")} <span className="text-primary1">{t("green-title")}</span>
            </motion.h2>
          </motion.div>

          <motion.div variants={introItemVariants}>
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, borderColor: "rgba(255,255,255,0.12)" }
              }
              transition={{ duration: 0.36, ease: subtleEase }}
              className="rounded-[32px] border border-white/8 bg-[#0c0c0c] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-8"
            >
              <p className="max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                {t("intro")}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/48 md:text-[15px]">
                {t("supporting")}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={principleVariants}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={principleItemVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.38, ease: subtleEase, delay: shouldReduceMotion ? 0 : index * 0.02 }}
            >
              <SpotlightCard
                spotlightColor="rgba(161, 226, 51, 0.14)"
                className="h-full rounded-[28px] border border-white/8 bg-[#0c0c0c] p-0"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : "hover"}
                  initial="rest"
                  animate="rest"
                  className="flex h-full flex-col gap-5 p-6 md:p-7"
                >
                  <motion.p
                    variants={{ rest: { opacity: 0.62 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                    className="text-[11px] uppercase tracking-[0.22em] text-white/35"
                  >
                    {t("card-label")}
                  </motion.p>
                  <motion.h3
                    variants={{ rest: { y: 0 }, hover: { y: -2 } }}
                    transition={{ duration: 0.32, ease: premiumEase }}
                    className="text-2xl font-semibold text-white md:text-[28px]"
                  >
                    {principle.title}
                  </motion.h3>
                  <p className="text-sm leading-relaxed text-white/62 md:text-[15px]">
                    {principle.description}
                  </p>
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={teamVariants}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {team.map((member, index) => (
            <motion.div key={member.name} custom={index} variants={founderReveal}>
              <AboutTeamCard
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                icon={member.icon}
                summary={member.summary}
                highlights={member.highlights}
                quote={member.quote}
                highlightsLabel={t("highlights-label")}
                quoteLabel={t("quote-label")}
                inverted={member.inverted}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
