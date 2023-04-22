import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import browserslistToEsbuild from "browserslist-to-esbuild";
import { VitePluginRadar as vitePluginRadar } from "vite-plugin-radar";
import { dependencies } from "./package.json";
const renderChunks = (dependencies) => {
  const chunks = {};
  Object.keys(dependencies).forEach((key) => {
    if (
      ["react", "react-router-dom", "react-router", "react-dom"].includes(key)
    )
      return;
    chunks[key] = [key];
  });
  return chunks;
};

export default defineConfig({
  plugins: [
    react(),
    vitePluginRadar({
      analytics: {
        id: "UA-141725249-1",
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: browserslistToEsbuild([
      ">0.2%",
      "not dead",
      "not op_mini all",
      "not ie <= 11",
    ]),
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
