export const EASE = [0.16, 1, 0.3, 1];
export const TOTAL_STEPS = 4;

// pad = ancho de la zona de crossfade entre escenas, como % del progreso total
export const SCENE_PAD = Math.min(0.1, 0.6 / TOTAL_STEPS);

// rango [start, end] (0–1) que ocupa cada paso dentro del scroll total
export function sceneRange(index) {
  return { start: index / TOTAL_STEPS, end: (index + 1) / TOTAL_STEPS };
}

// puntos "asentados" de cada escena (progress 0–1) — usados para congelar el
// motor visual en mobile/compact, elegidos para caer DESPUÉS de que todas las
// transiciones de esa escena ya terminaron (no a mitad de una animación)
export const SETTLED_POINTS = [0.15, 0.45, 0.72, 0.95];
