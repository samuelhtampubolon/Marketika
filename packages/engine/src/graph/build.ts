import type { Relation } from "../relation";
import type { Value } from "./types";

export interface GraphIndex {
  relations: readonly Relation[];
  producersOf: Map<string, Relation[]>;
  unitClassOf: (variableId: string) => string;
}

export function buildGraph(
  relations: readonly Relation[],
  unitClasses: Record<string, string>,
): GraphIndex {
  const producersOf = new Map<string, Relation[]>();
  const add = (key: string, rel: Relation): void => {
    const list = producersOf.get(key) ?? [];
    list.push(rel);
    producersOf.set(key, list);
  };
  for (const rel of relations) {
    if (rel.output !== null) add(rel.output, rel);
    for (const target of Object.keys(rel.inverses)) add(target, rel);
  }
  return {
    relations,
    producersOf,
    unitClassOf: (variableId) => unitClasses[variableId] ?? "unknown",
  };
}

export function userValueMap(entries: Record<string, Omit<Value, "origin" | "depth" | "derivedBy" | "derivedFrom" | "confidence">>): Map<string, Value> {
  const map = new Map<string, Value>();
  for (const [id, base] of Object.entries(entries)) {
    map.set(id, {
      ...base,
      variableId: id,
      origin: "user",
      derivedBy: null,
      derivedFrom: [],
      confidence: "exact",
      depth: 0,
    });
  }
  return map;
}
