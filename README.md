# Marketika

Marketika computes marketing metrics from a registry of 76 formulas and 161 canonical variables. It runs as a local web application and keeps the calculation engine separate from the interface. The source specification remains `spec/metrika.spec.json`; generated sources and the Marketika catalog come from it.

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
pnpm dev        # local Marketika workbench
pnpm build      # static GitHub Pages output in docs/
pnpm codegen   # emit typed sources from the spec
pnpm verify    # spec and generated-output integrity checks
pnpm typecheck
pnpm test
```

Generated files are marked in their headers and must not be edited by hand.
