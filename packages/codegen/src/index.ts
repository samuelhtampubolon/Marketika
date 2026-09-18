import { emitFormulas } from "./emitFormulas";
import { emitLocale } from "./emitLocale";
import { emitCurriculum } from "./emitCurriculum";
import { emitRegistry } from "./emitRegistry";
import { readSpec } from "./spec";

function main(): void {
  const spec = readSpec();
  const n = emitRegistry(spec);
  console.log(`codegen: emitted variable registry (${n} variables)`);
  emitFormulas(spec);
  emitLocale(spec);
  emitCurriculum(spec);
  console.log("codegen: complete");
}

main();
