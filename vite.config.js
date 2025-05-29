import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // ✅ import svgr

export default defineConfig({
  plugins: [
    react(),
    svgr(), // ✅ enable the plugin
  ],
});
