# Marketika Desktop

This package wraps the same offline web application in Tauri 2. The shell has no network API, no telemetry, and no remote content source.

## Build prerequisites

Install Rust through `rustup`, the Microsoft C++ Build Tools, and WebView2 on Windows. Then run `pnpm install` at the repository root and `pnpm --filter @marketika/desktop build`.

The Windows artifacts are written below `src-tauri/target/release/bundle/`.
