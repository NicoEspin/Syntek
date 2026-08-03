"use client";

import { useId } from "react";
import { FLOW_NODES } from "./constants";

const VB_W = 1000;
const VB_H = 400;
const pct = (v, total) => `${(v / total) * 100}%`;

function flowPath() {
  const pts = FLOW_NODES.map((n) => [(n.left / 100) * VB_W, (n.top / 100) * VB_H]);
  return pts.reduce((acc, [x, y], i) => (i === 0 ? `M${x},${y}` : `${acc} L${x},${y}`), "");
}

// capa "sistema activo" — en desktop/tablet es el flujo comercial completo
// (ATRAER → MEDIR) sobre un canvas panorámico; en mobile es la misma
// secuencia presentada como lista vertical conectada.
export default function ActiveSystem({ copy, systemFlow, nodeStatus, compact = false, nodeLimit = 5, reduceMotion = false }) {
  const gridId = useId();
  const nodes = FLOW_NODES.slice(0, nodeLimit);

  if (compact) {
    return (
      <div className="flex flex-col gap-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-1.5">
              <span aria-hidden className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-60" />
              <span aria-hidden className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A1E233]">{copy.label}</span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">{copy.status}</span>
        </div>
        <p className="text-sm leading-relaxed text-white/70">{copy.description}</p>
        <div className="flex flex-col">
          {systemFlow.slice(0, nodeLimit).map((step, i) => {
            const Icon = nodes[i]?.Icon;
            const isLast = i === Math.min(systemFlow.length, nodeLimit) - 1;
            return (
              <div key={step} className="relative flex items-start gap-3 pb-5 pl-1 last:pb-0">
                {!isLast && <span aria-hidden className="absolute left-[15px] top-6 h-full w-px bg-[#A1E233]/25" />}
                <span className="relative z-[1] flex size-8 shrink-0 items-center justify-center rounded-full border border-[#A1E233]/40 bg-black text-[#A1E233]">
                  {Icon && <Icon size={14} strokeWidth={2} aria-hidden />}
                </span>
                <div className="pt-1">
                  <span className="block text-sm font-semibold uppercase tracking-wide text-white">{step}</span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#A1E233]/70">
                    {nodeStatus[i]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 40% 45%, rgba(161,226,51,0.07) 0%, transparent 65%)" }}
      />

      <div className="absolute left-[6%] top-[8%] flex items-center gap-2">
        <span className="relative flex size-1.5">
          <span aria-hidden className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-60" />
          <span aria-hidden className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A1E233]">{copy.label}</span>
      </div>
      <p className="absolute left-[6%] top-[15%] max-w-[220px] text-[13px] leading-snug text-white/70">
        {copy.description}
      </p>

      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`flow-grad-${gridId}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A1E233" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#A1E233" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        <path d={flowPath()} stroke={`url(#flow-grad-${gridId})`} strokeWidth="2" strokeLinecap="round" />
        {!reduceMotion && (
          <circle r="3.5" fill="#A1E233">
            <animateMotion dur="3.2s" repeatCount="indefinite" path={flowPath()} />
          </circle>
        )}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={(n.left / 100) * VB_W}
            cy={(n.top / 100) * VB_H}
            r="6"
            fill="#0a0a0a"
            stroke="#A1E233"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {nodes.map((n, i) => {
          const Icon = n.Icon;
          return (
            <div
              key={i}
              className="absolute flex -translate-x-1/2 flex-col items-center gap-1.5"
              style={{ left: pct(n.left, 100), top: pct(n.top, 100), transform: "translate(-50%, calc(-100% - 14px))" }}
            >
              <span className="flex size-6 items-center justify-center rounded-full border border-[#A1E233]/50 bg-black/60 text-[#A1E233]">
                <Icon size={12} strokeWidth={2} aria-hidden />
              </span>
              <span className="whitespace-nowrap font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
                {systemFlow[i]}
              </span>
              <span className="whitespace-nowrap font-mono text-[7.5px] uppercase tracking-wider text-[#A1E233]/70">
                {nodeStatus[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
