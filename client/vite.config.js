import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/BookReview-React-App/",
  root: "client/src",
  build: {
    outDir: "../dist",
  },
});
