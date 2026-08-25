"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import anttoPhoto from "@/app/assets/antto.webp";
import nicoPhoto from "@/app/assets/nico.webp";

const ease = [0.16, 1, 0.3, 1];

const MEMBER_VISUALS = [
  { photo: nicoPhoto, accent: "#A1E233" },
  { photo: anttoPhoto, accent: "#9B6DFF" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const AboutTeam = () => {
  const t = useTranslations("AboutPage.team");
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const members = t.raw("members");

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      aria-labelledby="about-team-heading"
      className="relative border-t border-white/[0.06] px-4 py-24 md:px-5 lg:px-10 xl:px-24"
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
          id="about-team-heading"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: prefersReduced ? 0.01 : 0.75, delay: 0.1, ease }}
          className="mt-5 text-display-md font-semibold leading-display tracking-display text-[color:var(--color-fg-1)]"
        >
          {t.rich("title", { hl: (chunks) => <span className="text-[color:var(--color-accent)]">{chunks}</span> })}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {members.map((member, index) => {
            const { photo, accent } = MEMBER_VISUALS[index % MEMBER_VISUALS.length];

            return (
              <motion.article
                key={member.name}
                variants={panelVariants}
                whileHover={prefersReduced ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 p-6 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full blur-3xl"
                  style={{ backgroundColor: `${accent}1A` }}
                />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div
                    className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-[1.5rem] border sm:w-32"
                    style={{ backgroundColor: `${accent}14`, borderColor: `${accent}33` }}
                  >
                    <Image
                      src={photo}
                      alt={`Avatar ilustrado de ${member.name}, ${member.role}`}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-fg-1)]">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-base">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-widest text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
