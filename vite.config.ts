import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@dashboard": path.resolve(__dirname, "src/tg-dashboard"),
      "@shop": path.resolve(__dirname, "src/tg-shop"),
      "@shared": path.resolve(__dirname, "src/tg-shared"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@routes": path.resolve(__dirname, "src/routes.ts"),
    },
  },
});
