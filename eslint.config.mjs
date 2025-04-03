import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
// eslint-disable-next-line import/no-default-export
// @ts-ignore
// todo you can copy my eslint config to your project
export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser,
      globals: Object.fromEntries(
        [
          ...Object.entries(globals.browser).map(([key, value]) => [key.trim(), value]),
          // todo 添加 process 作为全局变量
          ['process', 'readonly'],
        ]
      ),
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginPrettier.configs.recommended.rules,  // todo 确保 Prettier 规则生效
    },
    settings: {
      react: {
        version: "detect", // todo 自动检测 React 版本
      },
    },
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "prettier/prettier": "error", // todo 确保 Prettier 规则生效
    },
  },
  {
    ignores: [
      "**/*.d.ts",
      "node_modules/*",
      "craco.config.ts",
      "**/*.test.ts",
      "**/*.test.tsx",
      "eslint.config.mjs"
    ],
  },
];
