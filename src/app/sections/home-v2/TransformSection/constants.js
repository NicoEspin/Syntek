import {
  BellRing,
  Camera,
  ClipboardList,
  Files,
  Globe,
  ListChecks,
  MessageCircle,
  Sheet,
  UserCheck,
} from "lucide-react";

export const EASE_PREMIUM = [0.16, 1, 0.3, 1];
export const EASE_SUBTLE = [0.4, 0, 0.2, 1];

export const FEATHER = 7; // ancho de la zona de degradado entre capas, en % del canvas

// Umbrales semánticos para anunciar el avance sin actualizar estado en cada frame.
export const PHASE_BREAKPOINTS = { fragmented: 30, transitioning: 70 };

// módulos dispersos — capa "presencia improvisada". Posiciones en % dentro del
// canvas, deliberadamente desalineadas (nunca una grilla perfecta). `size`
// alterna el tamaño de cada tarjeta para que la pila se sienta como notas
// físicas sueltas, no como iconos idénticos flotando en el vacío.
export const FRAGMENTED_MODULES = [
  { Icon: Camera, top: 26, left: 56, rotate: -2, size: "md" },
  { Icon: MessageCircle, top: 24, left: 82, rotate: 2, size: "md" },
  { Icon: Globe, top: 54, left: 68, rotate: -1, size: "md" },
  { Icon: Sheet, top: 76, left: 52, rotate: 2, size: "md" },
  { Icon: BellRing, top: 75, left: 78, rotate: -2, size: "md" },
  { Icon: ClipboardList, top: 52, left: 91, rotate: 2, size: "md" },
];

// nodos del flujo comercial — capa "sistema activo". x/y en % dentro del
// canvas, con una leve curva panorámica (no una línea recta plana).
export const FLOW_NODES = [
  { Icon: MessageCircle, left: 12, top: 64 },
  { Icon: Files, left: 31, top: 44 },
  { Icon: UserCheck, left: 50, top: 36 },
  { Icon: BellRing, left: 69, top: 44 },
  { Icon: ListChecks, left: 88, top: 64 },
];
