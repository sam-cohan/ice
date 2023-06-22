import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the ICE_ROOT_PATH from the environment variable
const rootPath = process.env.ICE_ROOT_PATH || "";

// https://vitejs.dev/config/
export default defineConfig({
  base: rootPath,
  build: {
    chunkSizeWarningLimit: 4000,
    emptyOutDir: true,
    outDir: "../ice/routes/ui/",
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8935",
    },
  },
});
