import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/recetas-Julio-Salazar-PFY2202/" : "/",
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./setupTests.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
