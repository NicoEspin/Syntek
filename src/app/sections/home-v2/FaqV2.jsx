"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// ─── Item de FAQ ──────────────────────────────────────────────────────────────
function FaqItem({ question, answer, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-6%" });
  const accent = "#A1E233";
  const panelId = `faq-v2-panel-${index}`;
  const triggerId = `faq-v2-trigger-${index}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
      className="group relative border-b border-white/[0.06] last:border-b-0"
    >
      <motion.div
        animate={{ scaleX: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        style={{ originX: 0, backgroundColor: accent }}
        className="absolute left-0 right-0 top-0 h-px"
      />

      <button
        onClick={onToggle}
        className="group/btn flex w-full items-start gap-5 py-6 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={triggerId}
      >
        <span className="mt-1 w-6 shrink-0 select-none text-right font-mono text-[10px] tracking-widest text-white/15 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 text-base font-medium leading-snug tracking-tight transition-colors duration-300 md:text-lg ${
            isOpen ? "text-white" : "text-white/65 group-hover/btn:text-white/90"
          }`}
        >
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease }}
          style={{ color: isOpen ? accent : undefined }}
          className="mt-0.5 flex size-5 shrink-0 items-center justify-center text-white/25 transition-colors duration-300 group-hover/btn:text-white/50"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-11 pr-4 md:pr-8">
              <p className="text-sm font-light leading-relaxed text-white/42 md:text-[15px]">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const FaqV2 = () => {
  const t = useTranslations("HomeV2.faq");
  const waHref = getWhatsAppUrl(useTranslations("HomeV2")("waMessage"));
  const items = t.raw("items");
  const [openIndex, setOpenIndex] = useState(null);

  const words = t("title").split(" ");
  const lastWord = words.pop();

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  return (
    <section
      aria-labelledby="faq-v2-heading"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(161,226,51,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("sectionLabel")} />

        <div ref={headerRef} className="mb-12 mt-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="overflow-hidden">
              <motion.h2
                id="faq-v2-heading"
                initial={{ y: "105%" }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.05, ease }}
                className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white"
              >
                {words.join(" ")} <span className="text-[#A1E233]">{lastWord}</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-white/18"
            >
              {items.length.toString().padStart(2, "0")} {t("questionsCount")}
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            style={{ transformOrigin: "left" }}
            className="mt-8 h-px w-full bg-white/[0.06]"
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="h-px w-full bg-white/[0.06]" />
          {items.map((item, i) => (
            <FaqItem
              key={item.question}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-start justify-between gap-6 rounded-2xl border border-white/6 bg-neutral-950/50 px-7 py-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-medium text-white/70">{t("askMore")}</p>
            <p className="mt-1 text-xs text-white/28">{t("askMoreDetail")}</p>
          </div>
          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#A1E233] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-[#b6f53d]"
          >
            {t("ctaBtn")}
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqV2;
