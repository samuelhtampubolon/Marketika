import { describe, it, expect } from "vitest";
import { ENGINE_VERSION } from "../src/index";

describe("engine scaffold", () => {
  it("exposes a version", () => {
    expect(ENGINE_VERSION).toBe("0.0.0");
  });
});
