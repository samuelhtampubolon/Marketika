import { DomainViolation } from "../validate/domain";

export interface PriceResponse {
  price: number;
  tooCheap: number;
  cheap: number;
  expensive: number;
  tooExpensive: number;
}

export interface CurvePoint {
  price: number;
  value: number;
}

export interface VwCurve {
  name: "too_cheap" | "cheap" | "expensive" | "too_expensive";
  points: CurvePoint[];
}

export interface VwResult {
  opp: number | null;
  ipp: number | null;
  pmc: number | null;
  pme: number | null;
  curves: VwCurve[];
}

function cumulative(
  prices: number[],
  counts: number[],
  total: number,
  descending: boolean,
): CurvePoint[] {
  const n = prices.length;
  const points: CurvePoint[] = [];
  if (descending) {
    let acc = 0;
    for (let k = n - 1; k >= 0; k--) {
      acc += (counts[k] ?? 0) / total;
      const price = prices[k];
      if (price !== undefined) points.unshift({ price, value: acc });
    }
  } else {
    let acc = 0;
    for (let i = 0; i < n; i++) {
      acc += (counts[i] ?? 0) / total;
      const price = prices[i];
      if (price !== undefined) points.push({ price, value: acc });
    }
  }
  return points;
}

function crossing(a: CurvePoint[], b: CurvePoint[]): number | null {
  for (let i = 0; i + 1 < a.length; i++) {
    const pa = a[i];
    const pb = a[i + 1];
    const qa = b[i];
    const qb = b[i + 1];
    if (!pa || !pb || !qa || !qb) continue;
    const d0 = pa.value - qa.value;
    const d1 = pb.value - qb.value;
    if (d0 === 0) return pa.price;
    if (d0 * d1 < 0) {
      const f = d0 / (d0 - d1);
      return pa.price + f * (pb.price - pa.price);
    }
  }
  return null;
}

export function vwIntersection(responses: PriceResponse[]): VwResult {
  if (responses.length < 2) {
    throw new DomainViolation("vw_grid", "vwIntersection: at least two price points required");
  }
  const sorted = [...responses].sort((x, y) => x.price - y.price);
  const total = sorted.reduce(
    (acc, r) => acc + r.tooCheap + r.cheap + r.expensive + r.tooExpensive,
    0,
  );
  if (total <= 0) {
    throw new DomainViolation("vw_total", "vwIntersection: total responses must be > 0");
  }
  const prices = sorted.map((r) => r.price);
  const curves: VwCurve[] = [
    {
      name: "too_cheap",
      points: cumulative(
        prices,
        sorted.map((r) => r.tooCheap),
        total,
        true,
      ),
    },
    {
      name: "cheap",
      points: cumulative(
        prices,
        sorted.map((r) => r.cheap),
        total,
        false,
      ),
    },
    {
      name: "expensive",
      points: cumulative(
        prices,
        sorted.map((r) => r.expensive),
        total,
        true,
      ),
    },
    {
      name: "too_expensive",
      points: cumulative(
        prices,
        sorted.map((r) => r.tooExpensive),
        total,
        false,
      ),
    },
  ];
  const [tc, cp, ex, te] = curves.map((c) => c.points);
  if (!tc || !cp || !ex || !te) throw new Error("vwIntersection: internal curve build failure");
  return {
    opp: crossing(te, tc),
    ipp: crossing(ex, cp),
    pmc: crossing(tc, cp),
    pme: crossing(te, ex),
    curves,
  };
}
