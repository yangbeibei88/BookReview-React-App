import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/BookReview-React-App/",
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
  publicDir: "./public",
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
