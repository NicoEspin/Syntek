"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";

// ─── Constantes ───────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// Categorías con su acento cromático
const CATEGORIES = {
  web: { label: "Web & Desarrollo", accent: "#A1E233" },
  auto: { label: "Automatizaciones", accent: "#9B6DFF" },
  proceso: { label: "Proceso & Costos", accent: "#5B8DEF" },
};

// ─── Item de FAQ ──────────────────────────────────────────────────────────────
function FaqItem({ question, answer, index, category, isOpen, onToggle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-6%" });
  const accent = CATEGORIES[category]?.accent ?? "#A1E233";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
      className="group relative border-b border-white/[0.06] last:border-b-0"
    >
      {/* Línea de acento superior al abrir */}
      <motion.div
        animate={{ scaleX: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease }}
        style={{ originX: 0, backgroundColor: accent }}
        className="absolute top-0 left-0 right-0 h-px"
      />

      {/* Trigger */}
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 py-6 text-left group/btn"
        aria-expanded={isOpen}
      >
        {/* Número índice */}
        <span className="shrink-0 text-[10px] font-mono tracking-widest text-white/15 mt-1 w-6 text-right tabular-nums select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Pregunta */}
        <span
          className={`flex-1 text-base md:text-lg font-medium leading-snug tracking-tight transition-colors duration-300 ${
            isOpen
              ? "text-white"
              : "text-white/65 group-hover/btn:text-white/90"
          }`}
        >
          {question}
        </span>

        {/* Ícono de +/× con rotación */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease }}
          style={{ color: isOpen ? accent : undefined }}
          className="shrink-0 mt-0.5 size-5 flex items-center justify-center text-white/25 transition-colors duration-300 group-hover/btn:text-white/50"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line
              x1="7"
              y1="0"
              x2="7"
              y2="14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="7"
              x2="14"
              y2="7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>

      {/* Respuesta expandible */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-11 pr-4 md:pr-8">
              {/* Pill de categoría */}
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.08, ease }}
                className="mb-4 inline-block text-[9px] tracking-[0.2em] uppercase font-semibold border rounded-full px-2.5 py-1"
                style={{
                  color: accent,
                  borderColor: `${accent}30`,
                  backgroundColor: `${accent}08`,
                }}
              >
                {CATEGORIES[category]?.label}
              </motion.span>

              <p className="text-sm md:text-[15px] font-light leading-relaxed text-white/42">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
const Faqs = () => {
  const t = useTranslations("Faqs");
  const [openIndex, setOpenIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  const faqs = [
    { question: t("question1"), answer: t("answer1"), category: "web" },
    { question: t("question2"), answer: t("answer2"), category: "web" },
    { question: t("question3"), answer: t("answer3"), category: "web" },
    { question: t("question4"), answer: t("answer4"), category: "web" },
    { question: t("question5"), answer: t("answer5"), category: "web" },
    { question: t("question6"), answer: t("answer6"), category: "proceso" },
    { question: t("question7"), answer: t("answer7"), category: "proceso" },
    { question: t("question8"), answer: t("answer8"), category: "auto" },
    { question: t("question9"), answer: t("answer9"), category: "auto" },
    { question: t("question10"), answer: t("answer10"), category: "auto" },
  ];

  const filters = [
    { key: "all", label: "Todas" },
    { key: "web", label: CATEGORIES.web.label },
    { key: "auto", label: CATEGORIES.auto.label },
    { key: "proceso", label: CATEGORIES.proceso.label },
  ];

  const filtered =
    activeFilter === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeFilter);

  const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faqs"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      {/* Fondo atmosférico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(161,226,51,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("title-section")} />

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <div ref={headerRef} className="mt-14 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Headline */}
            <div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "105%" }}
                  animate={isHeaderInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.05, ease }}
                  className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  {t("title")}
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "105%" }}
                  animate={isHeaderInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.13, ease }}
                  className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-[#A1E233]"
                >
                  {t("green-title")}
                </motion.h2>
              </div>
            </div>

            {/* Contador */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[10px] tracking-[0.2em] uppercase text-white/18 shrink-0"
            >
              {filtered.length.toString().padStart(2, "0")} preguntas
            </motion.p>
          </div>

          {/* Divisor animado */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            style={{ transformOrigin: "left" }}
            className="mt-8 mb-8 h-px w-full bg-white/[0.06]"
          />

          {/* Filtros de categoría */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="flex flex-wrap gap-2"
          >
            {filters.map(({ key, label }) => {
              const isActive = activeFilter === key;
              const accent =
                key === "all"
                  ? "#A1E233"
                  : (CATEGORIES[key]?.accent ?? "#A1E233");
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveFilter(key);
                    setOpenIndex(null);
                  }}
                  className="relative px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.18em] uppercase border transition-all duration-300"
                  style={
                    isActive
                      ? {
                          color: key === "all" ? "#000" : "#fff",
                          backgroundColor: accent,
                          borderColor: accent,
                        }
                      : {
                          color: "rgba(255,255,255,0.35)",
                          backgroundColor: "transparent",
                          borderColor: "rgba(255,255,255,0.08)",
                        }
                  }
                >
                  {label}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── LISTA DE FAQS ────────────────────────────────────────────────── */}
        <div className="mx-auto max-w-3xl">
          {/* Línea superior */}
          <div className="h-px w-full bg-white/[0.06]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((faq, i) => (
                <FaqItem
                  key={`${faq.question}-${i}`}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mt-16 max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-white/6 bg-neutral-950/50 px-7 py-6"
        >
          <div>
            <p className="text-sm font-medium text-white/70">
              {t("cta-question")}
            </p>
            <p className="text-xs text-white/28 mt-1">{t("cta-detail")}</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease }}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#A1E233] px-6 py-3 text-[11px] font-bold tracking-[0.15em] uppercase text-black hover:bg-[#b6f53d] transition-colors duration-300"
          >
            {t("cta-btn")}
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <path
                d="M1 7L7 1M7 1H2M7 1V6"
                stroke="black"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
