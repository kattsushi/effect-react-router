import { helloWorld } from "@/index";
import { describe, expect, it } from "vitest";

describe("Hello world", () => {
  it("returns", () => {
    expect(helloWorld()).not.toBeUndefined();
  });

  it("is consistent", () => {
    expect(helloWorld()).toBe("Hello world!");
    expect(helloWorld()).toBe("Hello world!");
  });
});
