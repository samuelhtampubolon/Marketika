# Marketika

Marketika computes marketing metrics from a registry of 76 formulas and 161 canonical variables. It runs as a local web application and keeps the calculation engine separate from the interface. The source specification remains `spec/metrika.spec.json`; generated sources and the Marketika catalog come from it.

## Mulai di sini

Pilih cara memakai Marketika:

### [Buka Website Marketika](https://samuelhtampubolon.github.io/Marketika/)

Pakai langsung di browser. Tidak perlu memasang apa pun. Website dapat dipasang sebagai aplikasi dan akan bekerja offline setelah kunjungan pertama.

### [Download Marketika Offline - ZIP](https://github.com/samuelhtampubolon/Marketika/releases/download/v1/Marketika-0.1.0-offline.zip)

Download ZIP, ekstrak, lalu buka `index.html`. Paket ini berjalan lokal di komputer tanpa koneksi internet.

### [Lihat semua release](https://github.com/samuelhtampubolon/Marketika/releases)

Versi desktop Windows sedang disiapkan melalui Tauri. Installer `.exe` akan ditambahkan sebagai asset release setelah toolchain Rust tersedia.

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
pnpm desktop:build # Windows NSIS installer, after Rust is installed
pnpm codegen   # emit typed sources from the spec
pnpm verify    # spec and generated-output integrity checks
pnpm typecheck
pnpm test
```

Generated files are marked in their headers and must not be edited by hand.
