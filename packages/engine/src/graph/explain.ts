import type { Relation } from "../relation";
import type { PropagationResult, Value } from "./types";
import type { LocaleCode } from "../variables/types";
import { labelFor } from "../variables/registry";

function isPublishingTarget(rel: Relation): rel is Relation & { output: string } {
  return rel.output !== null;
}

export interface Frontier {
  missing: string[];
  unlocks: number;
}

export interface UnderdeterminedReport {
  target: string;
  frontiers: Frontier[];
}

function producersFor(relations: readonly Relation[], target: string): Relation[] {
  return relations.filter((r) => r.output === target || Object.prototype.hasOwnProperty.call(r.inverses, target));
}

export function underdetermined(
  target: string,
  known: Map<string, Value>,
  relations: readonly Relation[],
): UnderdeterminedReport {
  const frontiers: Frontier[] = [];
  const frontierKeys = new Set<string>();
  const addFrontier = (missing: Set<string>): void => {
    if (missing.size === 0) return;
    const key = [...missing].sort().join("|");
    if (frontierKeys.has(key)) return;
    frontierKeys.add(key);
    frontiers.push({ missing: [...missing], unlocks: missing.size });
  };

  const explore = (id: string, missing: Set<string>, depth: number): void => {
    if (known.has(id)) return;
    const producers = producersFor(relations, id);
    if (producers.length === 0) {
      addFrontier(new Set(missing).add(id));
      return;
    }
    if (depth >= 3) {
      addFrontier(new Set(missing).add(id));
      return;
    }
    for (const rel of producers) {
      const required = new Set<string>();
      if (isPublishingTarget(rel) && rel.output === id) {
        for (const i of rel.inputs) required.add(i);
      } else {
        for (const v of rel.inputs) if (v !== id) required.add(v);
        if (rel.output !== null && rel.output !== id) required.add(rel.output);
      }
      const nextMissing = new Set(missing);
      let unresolved = false;
      for (const r of required) {
        if (known.has(r)) continue;
        if (nextMissing.has(r)) {
          unresolved = true;
          break;
        }
        nextMissing.add(r);
        explore(r, nextMissing, depth + 1);
      }
      if (unresolved) addFrontier(nextMissing);
    }
  };

  explore(target, new Set(), 0);
  frontiers.sort((a, b) => a.missing.length - b.missing.length);
  return { target, frontiers: frontiers.slice(0, 3) };
}

export function describeUnderdetermined(
  report: UnderdeterminedReport,
  locale: LocaleCode = "id",
): string {
  if (report.frontiers.length === 0) {
    return locale === "id"
      ? `${labelFor(report.target, locale)} tidak dapat dihitung dari relasi yang tersedia.`
      : `${labelFor(report.target, locale)} cannot be computed from the available relations.`;
  }
  const options = report.frontiers
    .map((f, i) => {
      const names = f.missing.map((m) => labelFor(m, locale)).join(locale === "id" ? " dan " : " and ");
      return `(${i + 1}) ${names}`;
    })
    .join("; ");
  return locale === "id"
    ? `${labelFor(report.target, locale)} belum dapat dihitung. Tambahkan salah satu dari: ${options}.`
    : `${labelFor(report.target, locale)} cannot be computed yet. Add one of: ${options}.`;
}

export function derivationProse(
  target: string,
  result: PropagationResult,
  locale: LocaleCode = "id",
): string[] {
  const lines: string[] = [];
  const queue = [target];
  const visited = new Set<string>();
  while (queue.length > 0) {
    const id = queue.shift();
    if (id === undefined || visited.has(id)) continue;
    visited.add(id);
    const v = result.values.get(id);
    if (v === undefined) continue;
    if (v.origin === "user") {
      lines.push(`  ${id}  <- ${locale === "id" ? "masukan pengguna" : "user input"}`);
    } else {
      const step = result.trail.find((t) => t.target === id);
      if (step !== undefined) {
        lines.push(`  ${id}  <- ${step.formulaId} (${step.direction}) dari ${step.inputsUsed.join(", ")}  [gen ${step.generation}]`);
        queue.push(...step.inputsUsed);
      }
    }
  }
  return lines;
}
