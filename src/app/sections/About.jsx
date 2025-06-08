"use client";
import { PenTool, CodeXml } from "lucide-react";
import { useTranslations } from "next-intl";
import nicoImg from "@/app/assets/nico.webp";
import anttoImg from "@/app/assets/antto.webp";
import Image from "next/image";
import TitleSection from "@/app/components/(common)/TitleSection";
import AboutTeamCard from "@/app/components/AboutTeamCard";
import { motion } from "framer-motion";

import SpotlightCard from "@/app/components/SpotlightCard";

const About = () => {
  const t = useTranslations("About");

  const aboutCards = [
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

  // Animaciones
  const cardVariants = {
    offscreenLeft: {
      x: -100,
      opacity: 0,
    },
    offscreenRight: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <section className="py-24 px-4 md:px-5 xl:px-24 lg:px-10 mx-auto overflow-hidden">
      <TitleSection title={t("title-section")} />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mt-6 text-center ">
        {t("title")}
        <span className="text-primary1 lg:block">{t("green-title")}</span>
      </h2>

      {/* Mobile: Cards primero */}
      <div className="flex flex-col lg:hidden mt-12 gap-10">
        <div className="flex flex-col gap-6 order-1">
          {aboutCards.map((card, index) => (
            <SpotlightCard
              spotlightColor="rgba(161, 226, 51, 0.35)"
              key={index}
              className="bg-neutral-900 rounded-3xl border-2 border-white/5 min-h-[380px]"
            >
              <div className="flex flex-col gap-12 items-center p-9 h-full px-4">
                <h3 className="text-4xl font-semibold">{card.title}</h3>
                <p className="max-w-md text-lg  md:text-start text-white/50">
                  {card.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Team cards en mobile */}
        <div className="flex flex-col md:flex-row gap-10 order-2">
          <motion.div
            initial="offscreenLeft"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="w-full"
          >
            <AboutTeamCard
              name="Antonella Catalano"
              role={t("antto-rol")}
              imageSrc={anttoImg}
              icon={<PenTool />}
              paragraphs={[
                t("antto-p1"),
                t("antto-p2"),
                t("antto-p3"),
                t("antto-p4"),
              ]}
            />
          </motion.div>

          <motion.div
            initial="offscreenRight"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="w-full"
          >
            <AboutTeamCard
              name="Nicolás Espin"
              role={t("nico-rol")}
              inverted
              imageSrc={nicoImg}
              icon={<CodeXml />}
              paragraphs={[
                t("nico-p1"),
                t("nico-p2"),
                t("nico-p3"),
                t("nico-p4"),
              ]}
            />
          </motion.div>
        </div>
      </div>

      {/* Desktop: Layout original */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center mt-12 gap-10">
        {/* Anttonella */}
        <motion.div
          initial="offscreenLeft"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className="w-full lg:w-auto"
        >
          <AboutTeamCard
            name="Antonella Catalano"
            role={t("antto-rol")}
            imageSrc={anttoImg}
            icon={<PenTool />}
            paragraphs={[
              t("antto-p1"),
              t("antto-p2"),
              t("antto-p3"),
              t("antto-p4"),
            ]}
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {aboutCards.map((card, index) => (
            <SpotlightCard
              spotlightColor="rgba(161, 226, 51, 0.35)"
              key={index}
              className="bg-neutral-900 rounded-3xl border-2 border-white/5 min-h-[380px]"
            >
              <div className="flex flex-col gap-12 items-center p-9 h-full px-4">
                <h3 className="text-4xl font-semibold">{card.title}</h3>
                <p className="max-w-md text-lg text-center md:text-start text-white/50">
                  {card.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Nicolás */}
        <motion.div
          initial="offscreenRight"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className="w-full lg:w-auto"
        >
          <AboutTeamCard
            name="Nicolás Espin"
            role={t("nico-rol")}
            inverted
            imageSrc={nicoImg}
            icon={<CodeXml />}
            paragraphs={[
              t("nico-p1"),
              t("nico-p2"),
              t("nico-p3"),
              t("nico-p4"),
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
