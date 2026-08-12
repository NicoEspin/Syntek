"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
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
          {t("title")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="mt-14 grid gap-4 md:grid-cols-2"
        >
          {members.map((member) => (
            <motion.article
              key={member.name}
              variants={cardVariants}
              className="rounded-3xl border border-white/8 bg-neutral-900 p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-[color:var(--color-fg-1)]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[color:var(--color-accent)]">
                {member.role}
              </p>
              <p className="mt-5 text-sm font-light leading-relaxed text-[color:var(--color-fg-2)] md:text-base">
                {member.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
