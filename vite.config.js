import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
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
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
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
