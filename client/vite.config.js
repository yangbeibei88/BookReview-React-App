import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client/src",
  build: {
    outDir: "../dist",
  },
  plugins: [react()],
});
