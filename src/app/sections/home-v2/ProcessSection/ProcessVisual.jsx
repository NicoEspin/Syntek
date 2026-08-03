"use client";

import { useId } from "react";
import { motion, useTransform } from "framer-motion";
import {
  Activity,
  Clock,
  Code2,
  FileText,
  Globe,
  LayoutGrid,
  Link2,
  MessageCircle,
  Palette,
  Smartphone,
  Sparkles,
  Table,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

// ── motor visual — hub central persistente + 6 nodos que pasan de dispersos
// (fricción) a alineados en órbita (estrategia) → se desvanecen mientras un
// panel de construcción se arma con chrome tipo browser (diseño y desarrollo)
// → se consolida con métricas sobrias y una línea de tendencia (lanzamiento y
// mejora). Todo mapeado sobre un único `progress` (0–1, MotionValue) para que
// se sienta como UNA transformación continua, no cuatro escenas
// independientes.
//
// Arquitectura híbrida: el SVG resuelve líneas/formas/precisión geométrica;
// las etiquetas (ícono + texto) son HTML superpuesto posicionado en % sobre
// las mismas coordenadas, para tipografía nítida y reutilizar el lenguaje de
// "pill" del resto del sitio.
//
// `progress` puede ser un valor animado por scroll (desktop) o un
// useMotionValue estático/animado una vez (mobile/compact) — el mismo cálculo
// aplica en ambos casos.

const VB = 480;
const pct = (v) => `${(v / VB) * 100}%`;

const HUB = { x: 240, y: 220, r: 34 };

const NODES = [
  { scattered: { x: 150, y: 40 }, aligned: { x: 240, y: 70 } },
  { scattered: { x: 410, y: 90 }, aligned: { x: 370, y: 145 } },
  { scattered: { x: 430, y: 260 }, aligned: { x: 370, y: 295 } },
  { scattered: { x: 300, y: 430 }, aligned: { x: 240, y: 370 } },
  { scattered: { x: 60, y: 380 }, aligned: { x: 110, y: 295 } },
  { scattered: { x: 40, y: 180 }, aligned: { x: 110, y: 145 } },
];
const NODE_ICONS = [MessageCircle, Smartphone, FileText, Globe, Clock, Table];
const PRIORITY_INDEX = 0;
const DISCONNECTED_INDICES = [2, 4];

const FRAME = { x: 115, y: 75, width: 250, height: 300, rx: 18 };
const CHROME_H = 26;
const LAYER_INNER_X = 135;
const LAYER_WIDTH = 210;
const LAYER_HEIGHT = 30;
const LAYER_GAP = 11;
const LAYER_START_Y = FRAME.y + CHROME_H + 16;
const LAYER_ICONS = [LayoutGrid, Palette, FileText, Code2, Link2];

const METRIC_BASELINE = 430;
const METRIC_HEIGHTS = [34, 46, 26, 52]; // alturas relativas, decorativas — sin datos reales
const METRIC_X = [145, 205, 265, 325];
const METRIC_ICONS = [MessageCircle, TrendingUp, Zap, Sparkles];
const SPARK_PATH =
  "M145,384 C175,378 175,372 205,372 C230,372 240,392 265,392 C290,392 300,366 325,366";

function useNodeMotion(progress, node, disconnected) {
  const x = useTransform(progress, [0.25, 0.42], [node.scattered.x, node.aligned.x]);
  const y = useTransform(progress, [0.25, 0.42], [node.scattered.y, node.aligned.y]);
  const left = useTransform(x, pct);
  const top = useTransform(y, pct);
  const opacity = useTransform(progress, [0, 0.6, 0.7], [1, 1, 0]);
  const lineOpacityConnected = useTransform(progress, [0, 0.3, 0.6, 0.7], [0.16, 0.45, 0.45, 0]);
  const lineOpacityDisconnected = useTransform(progress, [0.25, 0.35, 0.6, 0.7], [0, 0.5, 0.5, 0]);
  const priorityColor = useTransform(progress, [0.3, 0.4], ["rgba(237,237,237,0.75)", "#A1E233"]);
  const priorityWidth = useTransform(progress, [0.3, 0.4], [1, 2]);
  return {
    x,
    y,
    left,
    top,
    opacity,
    lineOpacity: disconnected ? lineOpacityDisconnected : lineOpacityConnected,
    priorityColor,
    priorityWidth,
  };
}

function useLayerMotion(progress, index) {
  const start = 0.5 + index * 0.025;
  const end = start + 0.06;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);
  return { opacity, y };
}

function useMetricMotion(progress, index, height) {
  const start = 0.75 + index * 0.025;
  const end = start + 0.08;
  const grow = useTransform(progress, [start, end], [0, 1]);
  const barHeight = useTransform(grow, (v) => v * height);
  const barY = useTransform(barHeight, (v) => METRIC_BASELINE - v);
  return { opacity: grow, barHeight, barY };
}

function NodeLabel({ Icon, label, style, accentColor }) {
  return (
    <motion.div style={style} className="absolute flex flex-col items-center gap-1">
      <motion.span
        style={{ color: accentColor, borderColor: accentColor }}
        className="flex size-5 items-center justify-center rounded-full border bg-black/50"
      >
        <Icon size={11} strokeWidth={2} />
      </motion.span>
      <span className="whitespace-nowrap font-mono text-[7px] uppercase tracking-wider text-white/45">{label}</span>
    </motion.div>
  );
}

function Pill({ Icon, label, style, pulse, className }) {
  return (
    <motion.div
      style={style}
      className={`absolute flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#A1E233]/35 bg-[#A1E233]/10 px-2.5 py-1 ${className ?? ""}`}
    >
      {pulse ? (
        <span className="relative flex size-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A1E233] opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-[#A1E233]" />
        </span>
      ) : (
        <Icon size={10} strokeWidth={2.25} className="shrink-0 text-[#A1E233]" />
      )}
      <span className="font-mono text-[7.5px] font-semibold uppercase tracking-wider text-[#A1E233]">{label}</span>
    </motion.div>
  );
}

export default function ProcessVisual({ progress, labels, animated = true, className }) {
  const gridId = useId();
  const { frictionNodes, strategyLabel, buildLayers, growthLabel, growthMetrics } = labels;

  // nodos — hooks unrolled (rules-of-hooks: nada de useTransform en loops)
  const node0 = useNodeMotion(progress, NODES[0], DISCONNECTED_INDICES.includes(0));
  const node1 = useNodeMotion(progress, NODES[1], DISCONNECTED_INDICES.includes(1));
  const node2 = useNodeMotion(progress, NODES[2], DISCONNECTED_INDICES.includes(2));
  const node3 = useNodeMotion(progress, NODES[3], DISCONNECTED_INDICES.includes(3));
  const node4 = useNodeMotion(progress, NODES[4], DISCONNECTED_INDICES.includes(4));
  const node5 = useNodeMotion(progress, NODES[5], DISCONNECTED_INDICES.includes(5));
  const nodeMotions = [node0, node1, node2, node3, node4, node5];

  const layer0 = useLayerMotion(progress, 0);
  const layer1 = useLayerMotion(progress, 1);
  const layer2 = useLayerMotion(progress, 2);
  const layer3 = useLayerMotion(progress, 3);
  const layer4 = useLayerMotion(progress, 4);
  const layerMotions = [layer0, layer1, layer2, layer3, layer4];

  const metric0 = useMetricMotion(progress, 0, METRIC_HEIGHTS[0]);
  const metric1 = useMetricMotion(progress, 1, METRIC_HEIGHTS[1]);
  const metric2 = useMetricMotion(progress, 2, METRIC_HEIGHTS[2]);
  const metric3 = useMetricMotion(progress, 3, METRIC_HEIGHTS[3]);
  const metricMotions = [metric0, metric1, metric2, metric3];

  const priorityTagOpacity = useTransform(progress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
  const dashedFrameOpacity = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const solidFrameOpacity = useTransform(progress, [0.75, 0.87], [0, 1]);
  const panelChromeOpacity = useTransform(progress, [0.5, 0.6], [0, 1]);
  const growthLabelOpacity = useTransform(progress, [0.75, 0.82], [0, 1]);
  const sparklineLength = useTransform(progress, [0.78, 0.95], [0, 1]);
  const hubFillOpacity = useTransform(progress, [0, 1], [0.05, 0.16]);
  const hubRingScale = useTransform(progress, [0, 1], [1, 1.06]);
  // el hub es el "núcleo" mientras el sistema se arma — una vez que el panel
  // queda sólido (crecimiento) ya no hace falta: se apaga para no quedar
  // flotando en el medio de la interfaz terminada.
  const hubOpacity = useTransform(progress, [0.68, 0.8], [1, 0]);

  const priorityLabelStyle = {
    left: pct(NODES[PRIORITY_INDEX].aligned.x),
    top: pct(NODES[PRIORITY_INDEX].aligned.y),
    opacity: priorityTagOpacity,
    transform: "translate(-50%, calc(-100% - 20px))",
  };
  const growthLabelStyle = {
    left: pct(122),
    top: pct(392),
    opacity: growthLabelOpacity,
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className={className} aria-hidden="true">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(circle at 50% 46%, rgba(161,226,51,0.06) 0%, transparent 62%)" }}
      />
      {/* halo del hub — mismo lenguaje de glow que el resto del sitio */}
      <motion.div
        className="pointer-events-none absolute size-24 rounded-full bg-[#A1E233]/10 blur-2xl"
        style={{ left: pct(HUB.x), top: pct(HUB.y), transform: "translate(-50%,-50%)", opacity: hubOpacity }}
      />

      <svg viewBox={`0 0 ${VB} ${VB}`} className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <pattern id={`process-grid-${gridId}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
          <linearGradient id={`metric-grad-${gridId}`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#A1E233" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#A1E233" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={VB} height={VB} fill={`url(#process-grid-${gridId})`} opacity="0.5" />

        {/* marco técnico — esquinas tipo visor, puramente estructural */}
        <g stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M18,42 V18 H42" />
          <path d="M438,18 H462 V42" />
          <path d="M462,438 V462 H438" />
          <path d="M42,462 H18 V438" />
        </g>

        {/* ── hub central — presente mientras el sistema se arma, se apaga al llegar a "crecimiento" (panel ya sólido) ── */}
        <motion.g style={{ opacity: hubOpacity }}>
          <motion.circle
            cx={HUB.x}
            cy={HUB.y}
            r={HUB.r}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
            style={{ scale: hubRingScale, transformOrigin: `${HUB.x}px ${HUB.y}px` }}
          />
          {animated && (
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r={HUB.r + 12}
              stroke="rgba(161,226,51,0.3)"
              strokeWidth="1"
              strokeDasharray="2 7"
              strokeLinecap="round"
              className="syn-orbit"
              style={{ transformOrigin: `${HUB.x}px ${HUB.y}px`, animation: "syn-orbit-spin 16s linear infinite" }}
            />
          )}
          <motion.circle cx={HUB.x} cy={HUB.y} r={HUB.r - 10} fill="#A1E233" style={{ opacity: hubFillOpacity }} />
          {animated && (
            <motion.circle
              cx={HUB.x}
              cy={HUB.y}
              r={5}
              fill="#A1E233"
              animate={{ scale: [1, 1.5, 1], opacity: [0.9, 0.25, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {!animated && <circle cx={HUB.x} cy={HUB.y} r={5} fill="#A1E233" opacity="0.7" />}
        </motion.g>

        {/* ── escena 1→2: nodos dispersos que se alinean en órbita ── */}
        {nodeMotions.map((n, i) => (
          <motion.line
            key={`line-${i}`}
            x1={HUB.x}
            y1={HUB.y}
            x2={n.x}
            y2={n.y}
            stroke={i === PRIORITY_INDEX ? n.priorityColor : "rgba(237,237,237,0.55)"}
            strokeWidth={i === PRIORITY_INDEX ? n.priorityWidth : 1}
            strokeDasharray={i === PRIORITY_INDEX ? undefined : "2 5"}
            strokeLinecap="round"
            style={{ opacity: n.lineOpacity }}
          />
        ))}
        {nodeMotions.map((n, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={n.x}
            cy={n.y}
            r={4}
            fill={i === PRIORITY_INDEX ? n.priorityColor : "#ededed"}
            style={{ opacity: n.opacity }}
          />
        ))}

        {/* ── escena 3: panel de construcción (wireframe → sólido, chrome tipo browser) ── */}
        <motion.rect
          {...FRAME}
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          style={{ opacity: dashedFrameOpacity }}
        />
        <motion.rect
          {...FRAME}
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(161,226,51,0.35)"
          strokeWidth="1.5"
          style={{ opacity: solidFrameOpacity }}
        />
        <motion.g style={{ opacity: panelChromeOpacity }}>
          <rect x={FRAME.x} y={FRAME.y} width={FRAME.width} height={CHROME_H} rx="12" fill="rgba(255,255,255,0.03)" />
          <circle cx={FRAME.x + 18} cy={FRAME.y + CHROME_H / 2} r="3" fill="#ff5f57" opacity="0.75" />
          <circle cx={FRAME.x + 30} cy={FRAME.y + CHROME_H / 2} r="3" fill="#ffbd2e" opacity="0.75" />
          <circle cx={FRAME.x + 42} cy={FRAME.y + CHROME_H / 2} r="3" fill="#28c840" opacity="0.75" />
          <line
            x1={FRAME.x}
            y1={FRAME.y + CHROME_H}
            x2={FRAME.x + FRAME.width}
            y2={FRAME.y + CHROME_H}
            stroke="rgba(255,255,255,0.08)"
          />
        </motion.g>
        {layerMotions.map((l, i) => {
          const barY = LAYER_START_Y + i * (LAYER_HEIGHT + LAYER_GAP);
          return (
            <motion.g key={`layer-${i}`} style={{ opacity: l.opacity, y: l.y }}>
              <rect
                x={LAYER_INNER_X}
                y={barY}
                width={LAYER_WIDTH}
                height={LAYER_HEIGHT}
                rx="8"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.1)"
              />
              <rect x={LAYER_INNER_X} y={barY} width="3" height={LAYER_HEIGHT} rx="1.5" fill="#A1E233" opacity="0.6" />
            </motion.g>
          );
        })}

        {/* ── escena 4: métricas sobrias + línea de tendencia, sin valores inventados ── */}
        <motion.path
          d={SPARK_PATH}
          fill="none"
          stroke="#A1E233"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ opacity: growthLabelOpacity, pathLength: sparklineLength }}
        />
        {metricMotions.map((m, i) => (
          <motion.g key={`metric-${i}`} style={{ opacity: m.opacity }}>
            <line
              x1={METRIC_X[i]}
              y1={METRIC_BASELINE}
              x2={METRIC_X[i]}
              y2={METRIC_BASELINE + 2}
              stroke="rgba(255,255,255,0.15)"
            />
            <motion.rect
              x={METRIC_X[i] - 9}
              y={m.barY}
              width="18"
              height={m.barHeight}
              rx="4"
              fill={`url(#metric-grad-${gridId})`}
              stroke="rgba(161,226,51,0.4)"
              strokeWidth="1"
            />
            <motion.rect x={METRIC_X[i] - 9} y={m.barY} width="18" height="2.5" rx="1.25" fill="#A1E233" />
          </motion.g>
        ))}
      </svg>

      {/* ── etiquetas HTML superpuestas — tipografía nítida + lenguaje "pill" del sitio ── */}
      <div className="pointer-events-none absolute inset-0">
        {nodeMotions.map((n, i) => (
          <NodeLabel
            key={`node-label-${i}`}
            Icon={NODE_ICONS[i]}
            label={frictionNodes[i]}
            accentColor={i === PRIORITY_INDEX ? n.priorityColor : "rgba(237,237,237,0.55)"}
            style={{ left: n.left, top: n.top, opacity: n.opacity, transform: "translate(-50%, 12px)" }}
          />
        ))}

        <Pill Icon={Target} label={strategyLabel} style={priorityLabelStyle} />
        <Pill Icon={Activity} label={growthLabel} pulse style={growthLabelStyle} />

        {layerMotions.map((l, i) => {
          const barY = LAYER_START_Y + i * (LAYER_HEIGHT + LAYER_GAP);
          const Icon = LAYER_ICONS[i];
          return (
            <motion.div
              key={`layer-label-${i}`}
              style={{
                left: pct(LAYER_INNER_X + 16),
                top: pct(barY + LAYER_HEIGHT / 2),
                opacity: l.opacity,
                transform: "translate(0, -50%)",
              }}
              className="absolute flex items-center gap-2"
            >
              <Icon size={12} strokeWidth={2} className="shrink-0 text-white/60" />
              <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-white/65">
                {buildLayers[i]}
              </span>
            </motion.div>
          );
        })}

        {metricMotions.map((m, i) => {
          const Icon = METRIC_ICONS[i];
          return (
            <motion.div
              key={`metric-label-${i}`}
              style={{
                left: pct(METRIC_X[i]),
                top: pct(METRIC_BASELINE + 12),
                width: pct(48), // < separación entre métricas (60 viewBox units) — deja margen a cada lado sin invadir la vecina
                opacity: m.opacity,
                transform: "translate(-50%, 0)",
              }}
              className="absolute flex flex-col items-center gap-1"
            >
              <Icon size={10} strokeWidth={2} className="shrink-0 text-white/40" />
              {/* el label de texto sólo entra en el render grande de desktop — en
                  mobile/tablet el contenedor es demasiado angosto para 4 palabras
                  sin que se pisen entre sí (aria-hidden, es puramente decorativo) */}
              <span className="hidden text-center font-mono text-[7px] uppercase leading-[1.15] tracking-wider text-white/40 lg:block">
                {growthMetrics[i]}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
