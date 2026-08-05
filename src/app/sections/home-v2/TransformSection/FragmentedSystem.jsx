"use client";

import { cn } from "@/lib/utils";
import { FRAGMENTED_MODULES } from "./constants";

// capa "presencia improvisada" — en el canvas de desktop/tablet son módulos
// dispersos y desalineados a propósito (posiciones absolutas, ver constants);
// en mobile es una lista vertical simple de las mismas herramientas.
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
          {modules.map(({ Icon }, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 rounded-full border border-dashed border-white/15 bg-white/[0.02] px-3 py-2"
            >
              <Icon size={13} strokeWidth={2} aria-hidden className="shrink-0 text-white/40" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                {copy.moduleLabels[i]}
              </span>
            </span>
          ))}
        </div>
        <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
          {copy.connectionLabel}
        </span>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {/* ruido técnico de fondo — nodos apagados, textura de "actividad sin estructura" */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
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

      <span className="absolute right-[5%] top-[8%] rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
        {copy.connectionLabel}
      </span>

      {/* líneas incompletas — puramente decorativas, no conectan nada a propósito */}
      <svg aria-hidden className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <line x1="8%" y1="34%" x2="22%" y2="30%" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 6" />
        <line x1="48%" y1="20%" x2="60%" y2="26%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 6" />
        <line x1="70%" y1="66%" x2="82%" y2="60%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 6" />
      </svg>

      {modules.map(({ Icon, top, left, rotate }, i) => (
        <div
          key={i}
          className={cn(
            "absolute flex items-center gap-2 whitespace-nowrap rounded-xl border border-dashed border-white/15 bg-white/[0.025] px-3 py-2",
            // en tablet se muestran menos módulos — el canvas es menos panorámico ahí
            i >= 4 && "hidden lg:flex",
          )}
          style={{ top: `${top}%`, left: `${left}%`, transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
        >
          <Icon size={13} strokeWidth={2} aria-hidden className="shrink-0 text-white/40" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-white/45">{copy.moduleLabels[i]}</span>
        </div>
      ))}
    </div>
  );
}
