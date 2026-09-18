import type { Relation, Env, CalcResult } from "../relation";
import { checkInputs, checkOutputRange } from "../validate/sanity";
import { labelFor } from "../variables/registry";
import { message } from "../validate/messages";
import type { LocaleCode } from "../variables/types";
import type {
  Value,
  DerivationStep,
  BlockedStep,
  Conflict,
  PropagationOptions,
  PropagationResult,
} from "./types";

const REL_TOL = 1e-6;
const ABS_MONEY_TOL = 0.005;

function envFrom(derived: Map<string, Value>): Env {
  const snapshot = new Map(derived);
  return {
    num: (name) => {
      const v = snapshot.get(name);
      if (v === undefined) throw new Error(`propagate env: missing '${name}'`);
      if (typeof v.magnitude !== "number") throw new Error(`propagate env: '${name}' not scalar`);
      return v.magnitude;
    },
    vec: (name) => {
      const v = snapshot.get(name);
      if (v === undefined || !Array.isArray(v.magnitude) || typeof v.magnitude[0] !== "number")
        throw new Error(`propagate env: '${name}' not vector`);
      return v.magnitude as number[];
    },
    mat: (name) => {
      const v = snapshot.get(name);
      if (v === undefined || !Array.isArray(v.magnitude))
        throw new Error(`propagate env: '${name}' not matrix`);
      return v.magnitude as number[][];
    },
  };
}

function envFromFlat(values: Record<string, number | number[] | number[][]>): Env {
  return {
    num: (name) => {
      const v = values[name];
      if (typeof v !== "number") throw new Error(`missing scalar '${name}'`);
      return v;
    },
    vec: (name) => {
      const v = values[name];
      if (!Array.isArray(v)) throw new Error(`missing vector '${name}'`);
      return v as number[];
    },
    mat: (name) => {
      const v = values[name];
      if (!Array.isArray(v)) throw new Error(`missing matrix '${name}'`);
      return v as number[][];
    },
  };
}

function isScalarResult(r: CalcResult): r is number {
  return typeof r === "number" && Number.isFinite(r);
}

function periodBlockReason(
  derived: Map<string, Value>,
  ids: readonly string[],
  locale: LocaleCode,
): string | null {
  let firstId = "";
  let firstPeriod: string | undefined;
  for (const id of ids) {
    const p = derived.get(id)?.period;
    if (p === undefined) continue;
    if (firstPeriod === undefined) {
      firstPeriod = p;
      firstId = id;
    } else if (p !== firstPeriod) {
      return message("period_mismatch", locale, {
        a: labelFor(firstId, locale),
        pa: firstPeriod,
        b: labelFor(id, locale),
        pb: p,
      });
    }
  }
  return null;
}

export function propagate(
  known: Map<string, Value>,
  relations: readonly Relation[],
  opts: PropagationOptions,
): PropagationResult {
  const derived = new Map(known);
  const trail: DerivationStep[] = [];
  const blocked: BlockedStep[] = [];
  const conflicts: Conflict[] = [];

  const withinTolerance = (rel: Relation, target: string, derivedVal: number): boolean => {
    const prior = known.get(target);
    if (prior === undefined || typeof prior.magnitude !== "number") return true;
    const diff = Math.abs(derivedVal - prior.magnitude);
    return rel.structuralClass === "C2" || rel.structuralClass === "C5"
      ? diff <= ABS_MONEY_TOL
      : diff <= REL_TOL * Math.max(1, Math.abs(prior.magnitude));
  };

  for (const rel of relations) {
    if (rel.output === null) continue;
    const out = derived.get(rel.output);
    if (out === undefined || out.origin !== "user") continue;
    if (!rel.inputs.every((v) => derived.has(v))) continue;
    const guard = checkInputs(rel, envFrom(derived), opts.locale);
    if (!guard.ok) continue;
    let computed: CalcResult;
    try {
      computed = rel.forward(envFrom(derived));
    } catch {
      continue;
    }
    if (isScalarResult(computed) && !withinTolerance(rel, rel.output, computed)) {
      conflicts.push({
        variableId: rel.output,
        userValue: out.magnitude as number,
        derivedValue: computed,
        derivedBy: rel.formulaId,
        derivedFrom: [...rel.inputs],
      });
    }
  }
  let generation = 0;

  const record = (
    target: string,
    magnitude: number,
    rel: Relation,
    used: readonly string[],
    direction: "forward" | "inverse",
  ): void => {
    const prior = known.get(target);
    if (prior !== undefined && prior.origin === "user") {
      const priorNum = prior.magnitude as number;
      const mismatch =
        rel.structuralClass === "C2" || rel.structuralClass === "C5"
          ? Math.abs(magnitude - priorNum) > ABS_MONEY_TOL
          : Math.abs(magnitude - priorNum) > REL_TOL * Math.max(1, Math.abs(priorNum));
      if (mismatch) {
        conflicts.push({
          variableId: target,
          userValue: priorNum,
          derivedValue: magnitude,
          derivedBy: rel.formulaId,
          derivedFrom: [...used],
        });
      }
      return;
    }
    derived.set(target, {
      variableId: target,
      magnitude,
      unitClass: prior?.unitClass ?? opts.unitClassOf?.(target) ?? "unknown",
      origin: "derived",
      derivedBy: rel.formulaId,
      derivedFrom: [...used],
      confidence: "exact",
      timestamp: new Date().toISOString(),
      depth: generation + 1,
    });
    trail.push({
      formulaId: rel.formulaId,
      direction,
      target,
      inputsUsed: [...used],
      generation: generation + 1,
    });
  };

  while (generation < opts.maxGenerations) {
    let produced = 0;
    for (const rel of relations) {
      // Leaf formulas (output not published to the graph) are still COMPUTED
      // and shown under the formula id; publishes_to_graph only controls
      // whether the result re-enters the graph to unlock further chains.
      const target = rel.output ?? rel.formulaId;
      if (!derived.has(target) && rel.inputs.every((v) => derived.has(v))) {
        const period = periodBlockReason(derived, rel.inputs, opts.locale);
        if (period !== null) {
          blocked.push({ formulaId: rel.formulaId, reason: "guard", detail: period });
          continue;
        }
        const guard = checkInputs(rel, envFrom(derived), opts.locale);
        if (!guard.ok) {
          blocked.push({ formulaId: rel.formulaId, reason: "guard", detail: guard.reason });
          continue;
        }
        let out: CalcResult;
        try {
          out = rel.forward(envFrom(derived));
        } catch {
          continue;
        }
        if (!isScalarResult(out)) {
          blocked.push({ formulaId: rel.formulaId, reason: "non_finite" });
          continue;
        }
        const range = checkOutputRange(rel, out, opts.locale);
        if (!range.ok) {
          blocked.push({ formulaId: rel.formulaId, reason: "guard", detail: range.reason });
          continue;
        }
        record(target, out, rel, rel.inputs, "forward");
        produced++;
      }
      for (const [target, fn] of Object.entries(rel.inverses)) {
        if (derived.has(target)) continue;
        const needed = [...rel.inputs, ...(rel.output ? [rel.output] : [])].filter((v) => v !== target);
        if (!needed.every((v) => derived.has(v))) continue;
        const period = periodBlockReason(derived, needed, opts.locale);
        if (period !== null) {
          blocked.push({ formulaId: rel.formulaId, reason: "guard", detail: period });
          continue;
        }
        const guard = checkInputs(rel, envFrom(derived), opts.locale);
        if (!guard.ok) {
          blocked.push({ formulaId: rel.formulaId, reason: "guard", detail: guard.reason });
          continue;
        }
        let out: number;
        try {
          out = fn(envFrom(derived));
        } catch {
          continue;
        }
        if (!Number.isFinite(out)) {
          blocked.push({ formulaId: rel.formulaId, reason: "non_finite" });
          continue;
        }
        record(target, out, rel, needed, "inverse");
        produced++;
      }
    }
    if (produced === 0) break;
    generation++;
  }

  return {
    values: derived,
    trail,
    blocked,
    conflicts,
    generations: generation,
    reachable: derived.size - known.size,
  };
}

export function relationEnvFrom(values: Map<string, Value>, needed: readonly string[]): Env {
  const flat: Record<string, number | number[] | number[][]> = {};
  for (const id of needed) {
    const v = values.get(id);
    if (v !== undefined) flat[id] = v.magnitude;
  }
  return envFromFlat(flat);
}
