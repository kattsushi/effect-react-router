import { describe, expect, it } from "vitest";

describe("Hello world", () => {
  it("returns", () => {
    expect(true).not.toBeUndefined();
  });

  it("is consistent", () => {
    expect("Hello world!").toBe("Hello world!");
    expect("Hello world!").toBe("Hello world!");
  });
});
