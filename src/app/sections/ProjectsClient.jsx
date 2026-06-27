"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import TitleSection from "@/app/components/(common)/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectCursor from "@/app/components/ProjectCursor";

const ease = [0.16, 1, 0.3, 1];

export default function ProjectsClient({ featuredProjects, locale, copy }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative overflow-hidden py-24 px-4 md:px-5 lg:px-10 xl:px-24">
      <ProjectCursor label={copy.viewProject} />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        <div
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(161,226,51,0.04) 0%, transparent 70%)",
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl">
        <div ref={ref} className="mb-16">
          <TitleSection title={copy.sectionLabel} />

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  id="projects-heading"
                  initial={{ y: "105%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.05, ease }}
                  className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  <span className="block">{copy.headlineLine1}</span>
                  <span className="block text-[#A1E233]">{copy.headlineLine2}</span>
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="flex max-w-xs flex-col gap-5 md:items-end md:text-right"
            >
              <p className="text-sm font-light leading-relaxed text-white/40">
                {copy.sectionSubtitle}
              </p>
              <Link
                href={`/${locale}/projects`}
                className="group inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white/50 transition-all duration-300 hover:border-[#A1E233]/40 hover:text-[#A1E233] md:self-end"
              >
                <span>{copy.viewAll}</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
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

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
