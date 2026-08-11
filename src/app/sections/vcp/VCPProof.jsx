"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import { getProjectById } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1];

// TODO: reemplazar la métrica destacada (proof.metricValue en messages/es.json
// y messages/en.json) con un dato real de Cari Turismo cuando esté disponible.
const VCPProof = () => {
  const locale = useLocale();
  const t = useTranslations("VCP.proof");
  const tProjects = useTranslations("Projects");
  const project = getProjectById("cari-turismo", locale);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  if (!project) return null;

  return (
    <section
      aria-labelledby="vcp-proof-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <ProjectCursor label={tProjects("viewProject")} />

      <div className="pointer-events-none absolute inset-0">
        <div
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(161,226,51,0.04) 0%, transparent 70%)",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl">
        <div ref={ref} className="mb-12">
          <TitleSection title={t("eyebrow")} />

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="overflow-hidden">
              <motion.h2
                id="vcp-proof-heading"
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.05, ease }}
                className="max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-black leading-[1.05] tracking-tight text-white"
              >
                {t.rich("title", { hl: (chunks) => <span className="text-[#A1E233]">{chunks}</span> })}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="flex max-w-xs flex-col gap-4 md:items-end md:text-right"
            >
              <p className="text-sm font-light leading-relaxed text-white/40">{t("description")}</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black tracking-tight text-[#A1E233]">
                  <AnimatedCounter
                    target={t.raw("metricValue")}
                    prefix={t("metricPrefix")}
                    suffix={t("metricSuffix")}
                  />
                </span>
                <span className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {t("metricLabel")}
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.35, ease }}
            style={{ transformOrigin: "left" }}
            className="mt-10 h-px w-full bg-white/[0.06]"
          />
        </div>

        <ProjectCard
          project={project}
          variant="featured"
          index={0}
          locale={locale}
          titleClassName="text-[#A1E233]"
        />
      </div>
    </section>
  );
};

export default VCPProof;
