import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (import.meta.env.PROD && window.location.protocol.startsWith("http") && "serviceWorker" in navigator) {
  void navigator.serviceWorker.register("./sw.js");
}
