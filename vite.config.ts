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
      "@store": path.resolve(__dirname, "src/store"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@routes": path.resolve(__dirname, "src/routes.ts"),
    },
  },
});
