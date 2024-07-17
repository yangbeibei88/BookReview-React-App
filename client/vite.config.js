import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client/src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        manualChunks: {
          // For splitting vendor code if needed
        },
      },
    },
  },
  plugins: [react()],
});
