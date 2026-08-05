import { ChartBar, Clock, Globe, MessageCircle, Table, Workflow } from "lucide-react";
import { CircleCheck, ListFilter, Megaphone, MessageSquare, TrendingUp } from "lucide-react";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1];
export const EASE_SUBTLE = [0.4, 0, 0.2, 1];

export const PULSE_THRESHOLD = 80;
export const FEATHER = 7; // ancho de la zona de degradado entre capas, en % del canvas

// umbrales de "fase" semántica usados para aria-valuetext, aria-live y el pulso del sistema
export const PHASE_BREAKPOINTS = { fragmented: 30, transitioning: 70 };

// módulos dispersos — capa "presencia improvisada". Posiciones en % dentro del
// canvas, deliberadamente desalineadas (nunca una grilla perfecta).
export const FRAGMENTED_MODULES = [
  { Icon: MessageCircle, top: 20, left: 62, rotate: -3 },
  { Icon: Table, top: 60, left: 55, rotate: 2 },
  { Icon: Globe, top: 16, left: 84, rotate: 3 },
  { Icon: Clock, top: 72, left: 78, rotate: -2 },
  { Icon: Workflow, top: 42, left: 91, rotate: 4 },
  { Icon: ChartBar, top: 82, left: 62, rotate: -4 },
];

// nodos del flujo comercial — capa "sistema activo". x/y en % dentro del
// canvas, con una leve curva panorámica (no una línea recta plana).
export const FLOW_NODES = [
  { Icon: Megaphone, left: 10, top: 58 },
  { Icon: MessageSquare, left: 26, top: 38 },
  { Icon: ListFilter, left: 42, top: 30 },
  { Icon: CircleCheck, left: 58, top: 38 },
  { Icon: TrendingUp, left: 74, top: 58 },
];
