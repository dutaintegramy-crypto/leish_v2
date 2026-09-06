import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

const rootDir = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    // coverage: { <-- commented out due to Node 18 incompatibility with rolldown 1.2.6
    //   provider: "v8",
    //   reporter: ["text", "html"],
    //   include: ["src/lib/**", "src/server/**"],
    //   exclude: [
    //     "src/lib/data.ts",
    //     "src/lib/types.ts",
    //     "src/lib/auth.tsx",
    //     "src/lib/theme.tsx",
    //     "**/*.test.{ts,tsx}",
    //   ],
    //   thresholds: {
    //     statements: 65,
    //     branches: 60,
    //     functions: 68,
    //     lines: 68,
    //   },
    // },
  },
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
});
