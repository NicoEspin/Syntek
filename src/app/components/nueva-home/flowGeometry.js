const PATH_POINTS = [
  ["M", 1.065, -90],
  ["C", 1.03, 0.045, 0.99, 0.11, 0.79, 0.18],
  ["S", 0.68, 0.25, 0.59, 0.29],
  ["C", 0.42, 0.36, 0.13, 0.39, 0.12, 0.47],
  ["S", 0.72, 0.58, 0.83, 0.65],
  ["C", 0.91, 0.72, 0.3, 0.76, 0.18, 0.84],
  ["S", 0.51, 0.95, 0.64, 1],
];

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function spreadAt(ratio) {
  if (ratio < 0.12) return 0.66;
  if (ratio < 0.36) return 0.82 + (ratio - 0.12) * 1.05;
  if (ratio < 0.72) return 1.07;
  return 1.07 + (ratio - 0.72) * 0.82;
}

function fiberX(width, ratio, yRatio, offset, variation, variationScale) {
  const irregularity = variation * variationScale;
  return Math.round(width * ratio + offset * spreadAt(yRatio) + irregularity);
}

export function createMasterPath(width, height) {
  const x = (ratio) => Math.round(width * ratio);
  const y = (ratio) => Math.round(height * ratio);

  return [
    `M ${x(PATH_POINTS[0][1])} -90`,
    `C ${x(PATH_POINTS[1][1])} ${y(PATH_POINTS[1][2])}, ${x(PATH_POINTS[1][3])} ${y(PATH_POINTS[1][4])}, ${x(PATH_POINTS[1][5])} ${y(PATH_POINTS[1][6])}`,
    `S ${x(PATH_POINTS[2][1])} ${y(PATH_POINTS[2][2])}, ${x(PATH_POINTS[2][3])} ${y(PATH_POINTS[2][4])}`,
    `C ${x(PATH_POINTS[3][1])} ${y(PATH_POINTS[3][2])}, ${x(PATH_POINTS[3][3])} ${y(PATH_POINTS[3][4])}, ${x(PATH_POINTS[3][5])} ${y(PATH_POINTS[3][6])}`,
    `S ${x(PATH_POINTS[4][1])} ${y(PATH_POINTS[4][2])}, ${x(PATH_POINTS[4][3])} ${y(PATH_POINTS[4][4])}`,
    `C ${x(PATH_POINTS[5][1])} ${y(PATH_POINTS[5][2])}, ${x(PATH_POINTS[5][3])} ${y(PATH_POINTS[5][4])}, ${x(PATH_POINTS[5][5])} ${y(PATH_POINTS[5][6])}`,
    `S ${x(PATH_POINTS[6][1])} ${y(PATH_POINTS[6][2])}, ${x(PATH_POINTS[6][3])} ${height + 120}`,
  ].join(" ");
}

export function createFiberPath(width, height, fiber) {
  const y = (ratio) => Math.round(height * ratio);
  const x = (ratio, yRatio, variationScale = 0) => fiberX(
    width,
    ratio,
    yRatio,
    fiber.offset,
    fiber.variation,
    variationScale,
  );

  return [
    `M ${x(1.065, 0, 0.12)} -90`,
    `C ${x(1.03, 0.045, 0.4)} ${y(0.045)}, ${x(0.99, 0.11, -0.25)} ${y(0.11)}, ${x(0.79, 0.18, 0.08)} ${y(0.18)}`,
    `S ${x(0.68, 0.25, 1)} ${y(0.25)}, ${x(0.59, 0.29, -0.12)} ${y(0.29)}`,
    `C ${x(0.42, 0.36, -1)} ${y(0.36)}, ${x(0.13, 0.39, 0.45)} ${y(0.39)}, ${x(0.12, 0.47, -0.08)} ${y(0.47)}`,
    `S ${x(0.72, 0.58, -0.5)} ${y(0.58)}, ${x(0.83, 0.65, 0.14)} ${y(0.65)}`,
    `C ${x(0.91, 0.72, 0.35)} ${y(0.72)}, ${x(0.3, 0.76, -1)} ${y(0.76)}, ${x(0.18, 0.84, 0.1)} ${y(0.84)}`,
    `S ${x(0.51, 0.95, 0.5)} ${y(0.95)}, ${x(0.64, 1, -0.16)} ${height + 120}`,
  ].join(" ");
}

function makeFiberGroup(count, spread, seed, layer) {
  const random = seededRandom(seed);
  const fibers = new Array(count);

  for (let index = 0; index < count; index += 1) {
    const centered = count === 1 ? 0 : (index / (count - 1)) * 2 - 1;
    const jitter = (random() - 0.5) * spread * 0.18;
    const variation = (random() - 0.5) * 30;
    const opacity = layer === "core" ? 0.34 + random() * 0.42 : 0.12 + random() * 0.26;
    const width = layer === "core" ? 0.62 + random() * 0.58 : 0.4 + random() * 0.42;
    fibers[index] = {
      id: `${layer}-${index}`,
      layer,
      offset: centered * spread + jitter,
      variation,
      opacity,
      width,
      softness: layer === "core" ? (index % 5 === 0 ? "soft" : "sharp") : (index % 3 === 0 ? "very-soft" : "soft"),
    };
  }

  return fibers;
}

export const CORE_FIBERS = makeFiberGroup(14, 126, 0x91ac32, "core");
export const SECONDARY_FIBERS = makeFiberGroup(20, 178, 0x4f62bd, "secondary");
export const ACCENT_FIBERS = makeFiberGroup(4, 144, 0x72c8bc, "accent").map((fiber) => ({
  ...fiber,
  opacity: 0.3 + fiber.opacity * 0.65,
  width: Math.min(1.2, fiber.width + 0.24),
}));
