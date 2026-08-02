import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import astroParser from "astro-eslint-parser";
import prettierConfig from "eslint-config-prettier";
import astroPlugin from "eslint-plugin-astro";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  // ============================
  // JavaScript + TypeScript
  // ============================
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint.plugin,
      prettier: prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig,
    ],
    rules: {
      "prettier/prettier": "warn",
    },
  },

  // ============================
  // Astro files
  // ============================
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
      globals: globals.browser,
    },
    plugins: {
      astro: astroPlugin,
      prettier: prettierPlugin,
    },
    extends: [astroPlugin.configs.recommended, prettierConfig],
    rules: {
      "prettier/prettier": "warn",
    },
  },

  // ============================
  // JSON
  // ============================
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  // ============================
  // CSS
  // ============================
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
