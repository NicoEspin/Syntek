"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import img from "@/app/assets/3D.webp";
import TitleSection from "@/app/components/(common)/TitleSection";

// ─── Constantes ───────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// Acento cromático único por servicio — dentro de la paleta oscura de Synttek
const SERVICE_ACCENTS = [
  "#A1E233", // lima — Desarrollo Web (primario de marca)
  "#5B8DEF", // azul eléctrico — UX/UI
  "#A1E233", // lima — Ecommerce
  "#E8593C", // coral — Branding
  "#9B6DFF", // violeta — Diseño Gráfico
  "#FFB547", // ámbar — Automatizaciones
];

// ─── Ítem expandible de servicio ─────────────────────────────────────────────
function ServiceRow({
  number,
  title,
  description,
  tags,
  accent,
  index,
  isActive,
  onEnter,
  onLeave,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.07, ease }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative border-b border-white/[0.06] last:border-b-0"
    >
      {/* Línea de acento que se expande al hover */}
      <motion.div
        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.45, ease }}
        style={{ originX: 0, backgroundColor: accent }}
        className="absolute top-0 left-0 right-0 h-px"
      />

      {/* Fila principal — siempre visible */}
      <div className="flex items-center gap-6 py-6 pr-4 cursor-default">
        {/* Número índice */}
        <span className="shrink-0 text-[11px] font-mono tracking-widest text-white/18 w-7 text-right tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Título con indicador de acento en hover */}
        <div className="flex-1 flex items-center gap-4 min-w-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white/80 transition-colors duration-400 group-hover:text-white leading-tight truncate">
            {title}
          </h3>

          {/* Dot de color del servicio */}
          <motion.span
            animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ backgroundColor: accent }}
            className="shrink-0 size-2 rounded-full"
          />
        </div>

        {/* Tags a la derecha — solo desktop */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.18em] uppercase border border-white/8 text-white/25 px-2.5 py-1 rounded-full transition-colors duration-300 group-hover:border-white/14 group-hover:text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Flecha indicadora */}
        <motion.span
          animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 1 : 0.2 }}
          transition={{ duration: 0.3, ease }}
          style={{ color: isActive ? accent : undefined }}
          className="shrink-0 text-lg font-light leading-none transition-colors duration-300"
        >
          ↗
        </motion.span>
      </div>

      {/* Descripción expandible con clip reveal */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-[52px] pr-4">
              {/* Número fantasma de fondo */}
              <span
                aria-hidden
                className="absolute right-6 bottom-3 text-[6rem] font-black leading-none select-none pointer-events-none tabular-nums"
                style={{ color: `${accent}08` }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-sm md:text-base font-light leading-relaxed text-white/45 max-w-2xl relative z-10">
                {description}
              </p>

              {/* Tags mobile */}
              <div className="flex md:hidden flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.18em] uppercase border border-white/10 text-white/30 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA inline */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.15, ease }}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors duration-300"
                style={{ color: accent }}
              >
                Empezar este servicio
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
const Services = () => {
  const t = useTranslations("Services");
  const [activeIndex, setActiveIndex] = useState(0); // primer servicio activo por defecto

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-5%" });

  const services = [
    {
      titleKey: "web-development",
      descKey: "web-development-description",
      tags: ["Next.js", "React", "Node.js", "TypeScript"],
    },
    {
      titleKey: "uxui",
      descKey: "uxui-description",
      tags: ["Figma", "Prototipado", "Research"],
    },
    {
      titleKey: "ecommerce",
      descKey: "ecommerce-description",
      tags: ["Shopify", "WooCommerce", "Conversión"],
    },
    {
      titleKey: "branding",
      descKey: "branding-description",
      tags: ["Identidad", "Logotipo", "Guidelines"],
    },
    {
      titleKey: "graphic-design",
      descKey: "graphic-design-description",
      tags: ["Illustrator", "Motion", "Fotografía"],
    },
    {
      titleKey: "automations",
      descKey: "automations-description",
      tags: ["AI/ML", "n8n", "API", "Workflows"],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-24 md:px-5 lg:px-10 xl:px-24"
    >
      {/* Gradiente radial de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 80% 50%, rgba(161,226,51,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <TitleSection title={t("title-section")} />

        {/* ── LAYOUT: sticky left + lista derecha ────────────────────────── */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16 xl:gap-24 lg:items-start">
          {/* ── COLUMNA IZQUIERDA — sticky ──────────────────────────────── */}
          <div className="lg:sticky lg:top-32">
            {/* Headline */}
            <div ref={headerRef} className="mb-10">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "105%" }}
                  animate={isHeaderInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.05, ease }}
                  className="text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[0.95] tracking-tight text-white"
                >
                  {t("title")}
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "105%" }}
                  animate={isHeaderInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.13, ease }}
                  className="text-[clamp(2.2rem,4.5vw,4rem)] font-black leading-[0.95] tracking-tight text-[#A1E233]"
                >
                  {t("green-title")}
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease }}
                className="mt-5 text-sm font-light leading-relaxed text-white/38 max-w-xs"
              >
                {t("subtitle")}
              </motion.p>
            </div>

            {/* Imagen 3D como elemento decorativo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.45, ease }}
              className="relative"
            >
              {/* Halo de color activo */}
              <motion.div
                animate={{
                  backgroundColor: `${SERVICE_ACCENTS[activeIndex]}18`,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-3xl blur-2xl scale-90"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/6 bg-neutral-950/60 aspect-square max-w-[280px]">
                <Image
                  src={img}
                  alt="Synttek services"
                  fill
                  className="object-cover opacity-80"
                  sizes="280px"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent" />

                {/* Badge del servicio activo */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <span
                        className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-1 block"
                        style={{ color: SERVICE_ACCENTS[activeIndex] }}
                      >
                        {String(activeIndex + 1).padStart(2, "0")} · Servicio
                        activo
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {t(services[activeIndex].titleKey)}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Contador de servicios */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-[10px] tracking-[0.2em] uppercase text-white/18"
            >
              {services.length.toString().padStart(2, "0")} servicios
              disponibles
            </motion.p>
          </div>

          {/* ── COLUMNA DERECHA — lista de servicios ────────────────────── */}
          <div className="divide-y-0">
            {/* Línea superior */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              style={{ transformOrigin: "left" }}
              className="mb-0 h-px w-full bg-white/[0.06]"
            />

            {services.map((service, i) => (
              <ServiceRow
                key={service.titleKey}
                number={String(i + 1).padStart(2, "0")}
                index={i}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                tags={service.tags}
                accent={SERVICE_ACCENTS[i]}
                isActive={activeIndex === i}
                onEnter={() => setActiveIndex(i)}
                onLeave={() => {}} // mantiene el último activo al salir
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
