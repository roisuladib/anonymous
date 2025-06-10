import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginJsxA11Y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const ignorePatterns = [
  '.now/*',
  '**/*.css',
  '**/.changeset',
  '**/dist',
  'esm/*',
  'public/*',
  'tests/*',
  'scripts/*',
  '**/*.config.js',
  '**/.DS_Store',
  '**/node_modules',
  '**/coverage',
  '**/.next',
  '**/build',
  '!**/.commitlintrc.cjs',
  '!**/.lintstagedrc.cjs',
  '!**/jest.config.js',
  '!**/plopfile.js',
  '!**/react-shim.js',
  '!**/tsup.config.ts',
];

export default defineConfig([
  globalIgnores(ignorePatterns),
  {
    extends: fixupConfigRules(
      compat.extends(
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@next/next/recommended',
      ),
    ),

    plugins: {
      react: fixupPluginRules(pluginReact),
      'unused-imports': pluginUnusedImports,
      import: fixupPluginRules(pluginImport),
      '@typescript-eslint': typescriptEslint,
      'jsx-a11y': fixupPluginRules(pluginJsxA11Y),
      prettier: fixupPluginRules(pluginPrettier),
    },

    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'prettier/prettier': 'warn',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_.*?$',
        },
      ],

      'import/order': [
        'warn',
        {
          groups: [
            'type',
            'builtin',
            'object',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],

          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after',
            },
          ],

          'newlines-between': 'always',
        },
      ],

      'prettier/prettier': [
        'warn',
        {
          printWidth: 100,
          tabWidth: 2,
          singleQuote: true,
          bracketSameLine: true,
          arrowParens: 'avoid',
          plugins: ['prettier-plugin-tailwindcss'],
          singleAttributePerLine: true,
          tailwindFunctions: ['cn'],
        },
        {
          usePrettierrc: false,
        },
      ],

      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: { array: false, object: true },
          AssignmentExpression: { array: true, object: true },
        },
        { enforceForRenamedProperties: false },
      ],
      // 'object-curly-spacing': ['error', 'always'],
      // 'comma-dangle': ['error', 'always-multiline'],
      // 'object-curly-newline': ['error', { multiline: true, consistent: true }],
      'prefer-template': 'error',
      curly: ['error', 'multi'],

      'react/self-closing-comp': 'warn',

      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
]);
