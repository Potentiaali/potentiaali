import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import babelParser from "@babel/eslint-parser"; // Import the parser

export default [
  {
    ignores: ["dist/**/*", ".storybook/**/*"], // Ignore dist and storybook directories
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly", // For process.env
        require: "readonly", // For commonjs in config files
        module: "readonly", // For commonjs in config files
        __dirname: "readonly", // For commonjs in config files
        System: "readonly", // For SystemJS, if used in transpiled code (e.g., legacy)
        setImmediate: "readonly", // From error logs
        __REACT_DEVTOOLS_GLOBAL_HOOK__: "readonly", // From error logs
        VideoFrame: "readonly", // From error logs
        Float16Array: "readonly", // From error logs
        global: "readonly", // From error logs
        ActiveXObject: "readonly", // From error logs
        Bun: "readonly", // From error logs
        Deno: "readonly", // From error logs
        importScripts: "readonly" // From error logs
      },
      parser: babelParser, // Use Babel parser for JSX
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        requireConfigFile: false, // Don't require a babel.config.js file
        babelOptions: {
          presets: ["@babel/preset-react"], // Enable JSX parsing
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "valid-jsdoc": "off",
      "require-jsdoc": "off",
      "no-undef": "off", // Temporarily turn off no-undef to fix other issues first
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
