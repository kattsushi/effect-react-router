import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
    },
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
