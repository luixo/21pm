import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

const configs = [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    ignores: [".history/", "dist/"],
  },
];

export default configs;
