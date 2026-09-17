# MetriKa

MetriKa computes marketing metrics from a registry of 76 formulas and 161 canonical variables. It runs in a browser and as a desktop application, with no network access at runtime. All definitions live in `spec/metrika.spec.json`; code generation produces the typed sources from it.

## Layout

| Path               | Contents                                         |
| ------------------ | ------------------------------------------------ |
| `spec/`            | The source-of-truth specification and its log    |
| `packages/engine`  | Pure computation, zero UI imports                |
| `packages/codegen` | Reads the spec, writes typed sources, verifies   |
| `packages/ui`      | Legacy widget kit (Win32 common controls in CSS) |
| `packages/app`     | The application screens and state                |

## Commands

```
pnpm install
pnpm codegen   # emit typed sources from the spec
pnpm verify    # spec and generated-output integrity checks
pnpm typecheck
pnpm test
```

Generated files are marked in their headers and must not be edited by hand.
