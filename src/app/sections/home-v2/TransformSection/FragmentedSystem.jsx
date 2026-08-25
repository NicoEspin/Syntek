"use client";

import { cn } from "@/lib/utils";
import { FRAGMENTED_MODULES } from "./constants";

const SIZE_STYLES = {
  sm: "px-2.5 py-1.5",
  md: "px-3 py-2",
};

// capa "presencia improvisada" — herramientas activas pero desconectadas,
// tratadas como notas físicas sueltas (tamaño y rotación variables, sombra
// con profundidad real) en vez de chips idénticos flotando en el vacío; en
// mobile es una lista vertical simple de las mismas herramientas.
export default function FragmentedSystem({ copy, compact = false, moduleLimit = 6 }) {
  const modules = FRAGMENTED_MODULES.slice(0, moduleLimit);

  if (compact) {
    return (
      <div className="flex flex-col gap-5 p-6 pb-16">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span aria-hidden className="size-1.5 rounded-full bg-white/25" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">{copy.label}</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{copy.status}</span>
        </div>
        <p className="text-sm leading-relaxed text-white/50">{copy.description}</p>
        <div className="flex flex-wrap gap-2">
          {modules.map(({ Icon, size = "md" }, i) => (
            <span
              key={i}
              className={cn(
                "flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.7)]",
                SIZE_STYLES[size],
              )}
            >
              <Icon size={13} strokeWidth={2} aria-hidden className="shrink-0 text-white/40" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                {copy.moduleLabels[i]}
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {/* ruido técnico de fondo — nodos apagados, textura de "actividad sin estructura" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="absolute left-[6%] top-[8%] flex items-center gap-2">
        <span aria-hidden className="size-1.5 rounded-full bg-white/25" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">{copy.label}</span>
      </div>
      <p className="absolute left-[6%] top-[15%] max-w-[220px] text-[13px] leading-snug text-white/40">
        {copy.description}
      </p>

      {modules.map(({ Icon, top, left, rotate, size = "md" }, i) => (
        <div
          key={i}
          className={cn(
            "absolute flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.75)]",
            SIZE_STYLES[size],
            // en tablet se muestran menos módulos — el canvas es menos panorámico ahí
            i >= 4 && "hidden lg:flex",
          )}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            zIndex: i + 1,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          <Icon size={13} strokeWidth={2} aria-hidden className="shrink-0 text-white/40" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/45">{copy.moduleLabels[i]}</span>
        </div>
      ))}
    </div>
  );
}
