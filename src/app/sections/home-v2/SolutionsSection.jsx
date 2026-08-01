"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TitleSection from "@/app/components/(common)/TitleSection";
import { getWhatsAppUrl } from "@/lib/business";

const ease = [0.16, 1, 0.3, 1];

// tuning del apilado — deck abanicado: ~2-3 capas visibles a la vez, con leve
// rotación alternada por card (look "mazo de cartas", no un stack genérico).
const CARD_LIFT = 20; // px que retrocede (hacia arriba) cada card apilada
const CARD_SCALE_STEP = 0.04; // achique por cada card encima
const CARD_ROTATE_STEP = 1.15; // grados de abanico por cada card de profundidad
const DEPTH_CAP = 3; // cuántas cards como máx participan del apilado visible
const SMOOTH_TAU = 0.055; // constante de tiempo del suavizado (s) — scrub ajustado
const TILT_MAX = 5; // grados máx de parallax 3D al mover el cursor
const HOLD_VH = 55; // scroll extra al principio donde la 1ª card se queda quieta, sin apilar todavía

// acento + imagen por solución (imágenes generadas con IA →
// /public/nueva-home/soluciones). Mientras no existan, el gradiente del panel
// deja la card presentable igual.
const SOLUTIONS_META = [
  { accent: "#A1E233", img: "/nueva-home/soluciones/consultas.webp" },
  { accent: "#5B8DEF", img: "/nueva-home/soluciones/ventas.webp" },
  { accent: "#FFB547", img: "/nueva-home/soluciones/automatizacion.webp" },
  { accent: "#E8593C", img: "/nueva-home/soluciones/procesos.webp" },
  { accent: "#9B6DFF", img: "/nueva-home/soluciones/agente-ia.webp" },
];

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// estado visual de una card según el progreso suavizado sp (0→1) del stack.
// raw < 0 → entrando desde abajo · raw ≈ 0 → activa/centrada · raw > 0 → apilada detrás.
function cardStyle(sp, index, total) {
  // card i queda centrada/activa en sp = i/(total-1): la 1ª en sp=0, la última en sp=1
  const raw = sp * (total - 1) - index;
  const fan = index % 2 === 0 ? -1 : 1; // alterna el sentido del abanico

  if (raw <= 0) {
    // entrando desde abajo — sutil, con ease-out, gira levemente hasta alinearse
    const e = easeOutCubic(clamp(raw + 1, 0, 1)); // 0 en raw=-1 → 1 en raw=0
    return {
      y: (1 - e) * 70,
      scale: 0.94 + e * 0.06,
      rot: fan * 2.6 * (1 - e),
      opacity: clamp((raw + 1) / 0.45, 0, 1),
      active: clamp(1 - Math.abs(raw), 0, 1),
    };
  }

  // apilada detrás — retrocede, se abanica y se atenúa; las profundas se desvanecen
  const d = Math.min(raw, DEPTH_CAP);
  return {
    y: -d * CARD_LIFT,
    scale: 1 - d * CARD_SCALE_STEP,
    rot: fan * d * CARD_ROTATE_STEP,
    opacity: clamp(1 - (raw - 1) / 1.3, 0, 1), // activa+1 nítida, luego fade → deck de 2-3 capas
    active: clamp(1 - Math.abs(raw), 0, 1),
  };
}

function applyStyle(el, glowEl, s) {
  el.style.transform = `translate3d(0, ${s.y.toFixed(2)}px, 0) rotate(${s.rot.toFixed(2)}deg) scale(${s.scale.toFixed(4)})`;
  el.style.opacity = s.opacity.toFixed(3);
  if (glowEl) glowEl.style.opacity = (s.active * 0.4).toFixed(3);
}

function StackCard({ card, index, total, accent, img, cardRef, glowRef, ctaLabel, href }) {
  const initial = cardStyle(0, index, total);
  return (
    <div className="absolute inset-0 flex items-center justify-center px-1" style={{ zIndex: index + 1 }}>
      <div className="relative w-full">
        {/* halo ambiental — se enciende sólo cuando esta card es la activa */}
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[48px] blur-3xl"
          style={{ backgroundColor: accent, opacity: 0 }}
        />
        <div
          ref={cardRef}
          style={{
            transform: `translate3d(0, ${initial.y}px, 0) rotate(${initial.rot}deg) scale(${initial.scale})`,
            opacity: initial.opacity,
            willChange: "transform, opacity",
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)]"
        >
          <div className="grid md:grid-cols-[0.42fr_0.58fr] md:h-[500px] lg:h-[560px] xl:h-[610px]">
            {/* Panel de imagen (con fallback de gradiente) */}
            <div
              className="relative h-56 overflow-hidden sm:h-64 md:h-full"
              style={{ background: `radial-gradient(120% 100% at 20% 0%, ${accent}2e, transparent 55%), #0d0d0d` }}
            >
              {/* placeholder decorativo detrás de la imagen (visible sólo si aún no hay imagen) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center text-[6rem] font-black leading-none md:text-[9rem]"
                style={{ color: `${accent}1a` }}
              >
                ✸
              </span>
              <Image
                src={img}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 45vw"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0";
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-neutral-900/70" />
         
            </div>

            {/* Contenido */}
            <div className="relative flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-14">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-10 select-none text-[9rem] font-black leading-none tabular-nums md:text-[11rem]"
                style={{ color: `${accent}0d` }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}12` }}
              >
                {card.tag}
              </span>

              <h3 className="text-display-sm leading-display tracking-display relative mt-6 font-black text-white">
                {card.title}
              </h3>
              <p className="relative mt-4 max-w-lg text-sm font-light leading-relaxed text-white/55 md:text-base lg:text-[17px]">
                {card.description}
              </p>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-3 transition-transform duration-300 ease-premium hover:translate-x-1"
              >
                <span
                  className="text-xs font-semibold uppercase tracking-[0.14em]"
                  style={{ color: accent }}
                >
                  {ctaLabel}
                </span>
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
                  style={{ borderColor: `${accent}40`, color: accent }}
                >
                  <svg width="11" height="11" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1 7L7 1M7 1H2M7 1V6"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SolutionsSection = () => {
  const t = useTranslations("HomeV2.solutions");
  const waHref = getWhatsAppUrl(useTranslations("HomeV2")("waMessage"));
  const cards = t.raw("cards");
  const total = cards.length;
  const [line1, line2] = t("title").split(". ");

  const stackRef = useRef(null);
  const stageWrapRef = useRef(null);
  const tiltRef = useRef(null);
  const cardRefs = useRef([]);
  const glowRefs = useRef([]);
  const dotRefs = useRef([]);
  const numRefs = useRef([]);
  const activeTagRef = useRef(null);
  const ambientGlowRef = useRef(null);

  useEffect(() => {
    const section = stackRef.current;
    if (!section) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let sp = 0; // progreso suavizado
    let raf = null;
    let running = false;
    let last = performance.now();
    let activeDot = -1;

    // fracción del scroll total reservada para que la 1ª card se quede quieta
    // antes de que arranque cualquier transición del apilado
    const holdFraction = HOLD_VH / (total * 85 + HOLD_VH);

    const readProgress = () => {
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const p = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0;
      return p <= holdFraction ? 0 : (p - holdFraction) / (1 - holdFraction);
    };

    const render = () => {
      for (let i = 0; i < total; i++) {
        const el = cardRefs.current[i];
        if (el) applyStyle(el, glowRefs.current[i], cardStyle(sp, i, total));
      }
      // indicador de progreso + estado activo (rail, HUD, glow ambiental, foco)
      const idx = clamp(Math.round(sp * (total - 1)), 0, total - 1);
      if (idx !== activeDot) {
        activeDot = idx;
        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          dot.style.height = i === idx ? "26px" : "8px";
          dot.style.backgroundColor = i <= idx ? "#A1E233" : "rgba(255,255,255,0.16)";
        });
        numRefs.current.forEach((num, i) => {
          if (!num) return;
          num.style.color = i === idx ? "#A1E233" : "rgba(255,255,255,0.28)";
          num.style.transform = i === idx ? "scale(1.15)" : "scale(1)";
        });
        cardRefs.current.forEach((el, i) => {
          if (el) el.style.pointerEvents = i === idx ? "auto" : "none";
        });
        if (activeTagRef.current) activeTagRef.current.textContent = cards[idx]?.tag ?? "";
        if (ambientGlowRef.current) {
          ambientGlowRef.current.style.backgroundColor = SOLUTIONS_META[idx % SOLUTIONS_META.length].accent;
        }
      }
    };

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const p = readProgress();
      // suavizado exponencial independiente del framerate
      sp += (p - sp) * (reduce ? 1 : 1 - Math.exp(-dt / SMOOTH_TAU));
      render();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    // el loop sólo corre cuando la sección está cerca del viewport
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { rootMargin: "300px 0px" },
    );
    io.observe(section);

    return () => {
      stop();
      io.disconnect();
    };
  }, [total, cards]);

  // parallax 3D sutil del deck según la posición del cursor (sólo desktop, sin reduced-motion)
  useEffect(() => {
    const wrap = stageWrapRef.current;
    const tilt = tiltRef.current;
    if (!wrap || !tilt) return;

    const fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = `rotateX(${(-py * TILT_MAX).toFixed(2)}deg) rotateY(${(px * TILT_MAX).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      id="soluciones"
      aria-labelledby="solutions-heading"
      className="relative px-4 pb-24 pt-16 md:px-5 lg:px-10 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 45% at 80% 30%, rgba(161,226,51,0.03) 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <TitleSection title={t("sectionLabel")} />
          <h2
            id="solutions-heading"
            className="mt-5 text-[clamp(1.9rem,3.8vw,3.2rem)] font-black leading-[1.02] tracking-tight text-white"
          >
            {line1}. <span className="text-[#A1E233]">{line2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            {t("subtitle")}
          </p>
        
        </motion.div>
      </div>

      {/* stackRef alto = escenario sticky que se mantiene fijo mientras scrolleás */}
      <div ref={stackRef} className="relative" style={{ height: `${total * 85 + HOLD_VH}vh` }}>
        {/* pt-20/24 = despeje del navbar flotante fixed; justify-center centra el
            stack en el espacio restante, no en el viewport completo */}
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center pt-20 md:pt-24">
          <div
            ref={stageWrapRef}
            className="relative mx-auto w-full max-w-screen-2xl px-4 md:px-5 lg:px-10 xl:px-24"
            style={{ perspective: "1800px" }}
          >
            {/* halo ambiental de fondo: muta de color según la solución activa.
                Clip propio (no en el <section>, que es ancestro del sticky y
                rompería position:sticky si tuviera overflow-hidden). */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div
                ref={ambientGlowRef}
                className="absolute left-1/2 top-[38%] size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[130px] transition-colors duration-700 ease-premium md:size-[560px]"
                style={{ backgroundColor: "#A1E233" }}
              />
            </div>

            {/* HUD: solución activa + contador */}
            <div className="mb-5 hidden items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 sm:flex lg:mb-7">
    
            </div>

            <div
              ref={tiltRef}
              className="relative h-[440px] transition-transform duration-500 ease-out sm:h-[480px] md:h-[500px] lg:h-[560px] xl:h-[610px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cards.map((card, i) => (
                <StackCard
                  key={card.title}
                  card={card}
                  index={i}
                  total={total}
                  accent={SOLUTIONS_META[i % SOLUTIONS_META.length].accent}
                  img={SOLUTIONS_META[i % SOLUTIONS_META.length].img}
                  cardRef={(el) => (cardRefs.current[i] = el)}
                  glowRef={(el) => (glowRefs.current[i] = el)}
                  ctaLabel={t("rowCta")}
                  href={waHref}
                />
              ))}

              {/* indicador de progreso del stack — índice + rail */}
              <div className="pointer-events-none absolute right-1 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex xl:right-4">
                {cards.map((c, i) => (
                  <div key={c.title} className="flex items-center gap-2.5">
                    <span
                      ref={(el) => (numRefs.current[i] = el)}
                      className="font-mono text-[11px] font-semibold tabular-nums text-white/28 transition-[color,transform] duration-500 ease-out"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      ref={(el) => (dotRefs.current[i] = el)}
                      className="w-[3px] rounded-full transition-[height,background-color] duration-500 ease-out"
                      style={{ height: i === 0 ? "26px" : "8px", backgroundColor: i === 0 ? "#A1E233" : "rgba(255,255,255,0.16)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
