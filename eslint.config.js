import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import standard from "eslint-config-standard";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended", standard],
    rules: {},
  },
]);
