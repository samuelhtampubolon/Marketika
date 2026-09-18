const P = 0.2316419;
const B1 = 0.31938153;
const B2 = -0.356563782;
const B3 = 1.781477937;
const B4 = -1.821255978;
const B5 = 1.330274429;

export function phi(z: number): number {
  if (z < 0) return 1 - phi(-z);
  const t = 1 / (1 + P * z);
  const t2 = t * t;
  const poly = B1 * t + B2 * t2 + B3 * t2 * t + B4 * t2 * t2 + B5 * t2 * t2 * t;
  return 1 - (Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI)) * poly;
}
