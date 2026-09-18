import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const specPath = resolve(here, "..", "..", "..", "spec", "metrika.spec.json");

interface SpecVariable {
  id: string;
  unit_class: string;
  label: { id: string; en: string };
}

interface SpecInputRef {
  variable_id: string;
}

interface SpecOutputRef {
  canonical_variable_id: string;
}

interface SpecInverse {
  solve_for: string;
  javascript: string;
}

interface SpecBand {
  lower: number;
  upper: number;
}

interface SpecFormula {
  id: string;
  inputs: SpecInputRef[];
  output: SpecOutputRef | null;
  inverse_solutions: SpecInverse[];
  interpretation_bands?: SpecBand[];
}

interface SpecCoord {
  id: string;
  A: string;
  B: string;
  C: string;
  D: string;
}

interface Spec {
  canonical_variables: SpecVariable[];
  formula_registry: SpecFormula[];
  coordinate_matrix: SpecCoord[];
}

const failures: string[] = [];

function check(ok: boolean, message: string): void {
  if (!ok) failures.push(message);
}

function main(): void {
  const spec = JSON.parse(readFileSync(specPath, "utf8")) as Spec;

  const variableIds = new Set<string>();
  for (const v of spec.canonical_variables) {
    check(!variableIds.has(v.id), `duplicate variable id: ${v.id}`);
    variableIds.add(v.id);
    check(
      typeof v.unit_class === "string" && v.unit_class.length > 0,
      `${v.id}: missing unit_class`,
    );
    check(
      typeof v.label?.id === "string" && v.label.id.length > 0,
      `${v.id}: missing Indonesian label`,
    );
    check(
      typeof v.label?.en === "string" && v.label.en.length > 0,
      `${v.id}: missing English label`,
    );
  }
  check(
    spec.canonical_variables.length >= 150,
    `variable count ${spec.canonical_variables.length} < 150`,
  );

  const formulaIds = new Set<string>();
  for (const f of spec.formula_registry) {
    check(!formulaIds.has(f.id), `duplicate formula id: ${f.id}`);
    formulaIds.add(f.id);

    const own = new Set<string>();
    for (const input of f.inputs) {
      check(
        variableIds.has(input.variable_id),
        `${f.id}: input '${input.variable_id}' not in registry`,
      );
      own.add(input.variable_id);
    }
    const outputId = f.output?.canonical_variable_id ?? null;
    if (outputId !== null) {
      check(variableIds.has(outputId), `${f.id}: output '${outputId}' not in registry`);
      own.add(outputId);
    }

    for (const inv of f.inverse_solutions) {
      check(
        own.has(inv.solve_for),
        `${f.id}: inverse solves for '${inv.solve_for}' outside its own set`,
      );
    }
  }
  check(
    spec.formula_registry.length === 76,
    `formula count ${spec.formula_registry.length} !== 76`,
  );

  const coordsById = new Map<string, SpecCoord>();
  for (const c of spec.coordinate_matrix) {
    check(!coordsById.has(c.id), `duplicate coordinate row: ${c.id}`);
    check(variableIds.size > 0, "variables must precede coordinates");
    coordsById.set(c.id, c);
  }
  for (const f of spec.formula_registry) {
    const c = coordsById.get(f.id);
    check(c !== undefined, `formula ${f.id} has no coordinate row`);
    if (c !== undefined) {
      for (const axis of ["A", "B", "C", "D"] as const) {
        check(
          typeof c[axis] === "string" && c[axis].length > 0,
          `formula ${f.id} missing coordinate on axis ${axis}`,
        );
      }
    }
  }
  check(
    spec.coordinate_matrix.length === spec.formula_registry.length,
    `coordinate rows ${spec.coordinate_matrix.length} !== formulas ${spec.formula_registry.length}`,
  );

  for (const f of spec.formula_registry) {
    const bands = f.interpretation_bands ?? [];
    for (let i = 1; i < bands.length; i++) {
      const prev = bands[i - 1];
      const cur = bands[i];
      if (prev && cur) {
        check(
          Math.abs(prev.upper - cur.lower) < 1e-9,
          `${f.id}: interpretation bands ${i} and ${i + 1} are not contiguous`,
        );
        check(
          cur.lower < cur.upper,
          `${f.id}: interpretation band ${i + 1} is not increasing`,
        );
      }
    }
  }

  if (failures.length > 0) {
    console.error(`verify: ${failures.length} failure(s)`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exitCode = 1;
    return;
  }
  console.log(
    `verify: ok (${spec.formula_registry.length} formulas, ${spec.canonical_variables.length} variables)`,
  );
}

main();
