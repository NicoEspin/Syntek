"use client";

import { cn } from "@/lib/utils";
import { FRAGMENTED_MODULES } from "./constants";

const SIZE_STYLES = { sm: "px-2.5 py-2", md: "px-3 py-2.5" };

// capa "presencia improvisada" — herramientas activas pero desconectadas,
// tratadas como notas físicas sueltas (tamaño y rotación variables, sombra
// con profundidad real) en vez de chips idénticos flotando en el vacío; en
// mobile es una lista vertical simple de las mismas herramientas.
export default function FragmentedSystem({ copy, compact = false, moduleLimit = 6 }) {
  const modules = FRAGMENTED_MODULES.slice(0, moduleLimit);

  if (compact) {
    return (
      <div className="flex flex-col gap-5 p-6 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span aria-hidden className="size-1.5 rounded-full bg-white/25" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">{copy.label}</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">{copy.status}</span>
        </div>
        <p className="text-sm leading-relaxed text-white/50">{copy.description}</p>
        <div className="grid gap-2">
          {modules.map(({ Icon, size = "md" }, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025]",
                SIZE_STYLES[size],
              )}
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                <Icon size={14} strokeWidth={1.7} aria-hidden className="text-white/45" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-white/55">{copy.moduleLabels[i]}</span>
                <span className="mt-0.5 block text-xs text-white/35">{copy.painStates[i]}</span>
              </span>
            </div>
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
            "absolute flex min-w-[132px] items-center gap-2 rounded-xl border border-white/10 bg-neutral-900/95",
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
          <Icon size={14} strokeWidth={1.7} aria-hidden className="shrink-0 text-white/45" />
          <span>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-white/60">{copy.moduleLabels[i]}</span>
            <span className="mt-0.5 block max-w-[112px] text-[9px] leading-tight text-white/35">{copy.painStates[i]}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
