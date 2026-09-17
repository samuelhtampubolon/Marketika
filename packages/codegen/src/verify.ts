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

interface SpecFormula {
  id: string;
  inputs: SpecInputRef[];
  output: SpecOutputRef | null;
  inverse_solutions: SpecInverse[];
}

interface Spec {
  canonical_variables: SpecVariable[];
  formula_registry: SpecFormula[];
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
