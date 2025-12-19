import { fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import _import from 'eslint-plugin-import';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: [...next, ...nextCoreWebVitals, ...compat.extends('plugin:prettier/recommended')],

    plugins: {
      import: fixupPluginRules(_import),
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },

      next: {
        rootDir: '.',
        pagesDirectory: 'src/app',
      },
    },

    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-duplicate-head': 'off',
      '@next/next/no-typos': 'off',
      '@next/next/no-before-interactive-script-outside-document': 'off',
      '@next/next/no-styled-jsx-in-document': 'off',

      'jsx-a11y/alt-text': [
        2,
        {
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          object: ['Object'],
          area: ['Area'],
          'input[type="image"]': ['InputImage'],
        },
      ],

      'prettier/prettier': 'warn',

      'import/order': [
        'error',
        {
          groups: ['external', 'internal', ['parent', 'sibling']],

          pathGroups: [
            {
              pattern: '@/i18n/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/lib/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/assets/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/components/atoms/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/components/molecules/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/components/organisms/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/content-blocks/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: './types',
              group: 'sibling',
              position: 'before',
            },
            {
              pattern: './**/*.{css,pcss}',
              group: 'sibling',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
