 
// rollup.config.js

import PluginCritical from "rollup-plugin-critical";

export default {
  input: "index.js",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    PluginCritical({
      criticalUrl: "https://potentiaali.com/",
      criticalBase: "./",
      criticalPages: [
        { uri: "", template: "index" },
        { uri: "subjects", template: "subjects/index" },
      ],
      criticalConfig: {},
    }),
  ],
};
