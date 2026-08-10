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

// umbrales de cambio entre pasos narrativos. En vez de dividir el scroll en 4
// cortes rígidos, usamos los puntos medios entre estados visuales "asentados"
// para que el texto cambie cuando la ilustración ya está llegando limpia a la
// siguiente escena, evitando tirones al final del proceso.
export const STEP_THRESHOLDS = [
  (SETTLED_POINTS[0] + SETTLED_POINTS[1]) / 2,
  (SETTLED_POINTS[1] + SETTLED_POINTS[2]) / 2,
  (SETTLED_POINTS[2] + SETTLED_POINTS[3]) / 2,
];

export function getStepIndexFromProgress(progress) {
  if (progress < STEP_THRESHOLDS[0]) return 0;
  if (progress < STEP_THRESHOLDS[1]) return 1;
  if (progress < STEP_THRESHOLDS[2]) return 2;
  return TOTAL_STEPS - 1;
}

// En el último tramo del proceso, la narrativa ya habla de "lanzamiento y
// mejora" mientras la ilustración todavía está resolviendo microtransiciones.
// Para que la escena final llegue limpia sin meter un salto, aceleramos de
// forma suave sólo el último segmento con un ease-out continuo.
export function getVisualProgress(progress) {
  const lastStepStart = STEP_THRESHOLDS[2];

  if (progress <= lastStepStart) {
    return progress;
  }

  const segmentProgress = (progress - lastStepStart) / (1 - lastStepStart);
  const eased = 1 - (1 - segmentProgress) ** 2;

  return lastStepStart + eased * (1 - lastStepStart);
}
