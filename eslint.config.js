import os from 'os';

import cspell from '@cspell/eslint-plugin';
import eslintJs from '@eslint/js';
import json from '@eslint/json';
import jsonc from 'eslint-plugin-jsonc';
import stylistic from '@stylistic/eslint-plugin';
import parser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';

export default tseslint.config(
  {
    name: '@tluoc/JS-TS',
    files: ['./**/*.{js,ts,cjs,mjs,mts,jsx,tsx}'],
    ignores: ['./{node_module,build,dist,out}/**/*'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        allowReserved: true,
        ecmaFeatures: {
          impliedStrict: true,
          experimentalObjectRestSpread: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.chai,
        ...globals.mocha,
        ...globals.es2025,
        ...globals.browser,
      },
    },
    plugins: {
      'js': eslintJs,
      'jsdoc': jsdoc,
      'import-x': importX,
      '@stylistic': stylistic,
    },
    rules: {
      'no-var': [2],
      'eqeqeq': [2, 'always', {
        null: 'ignore',
      }],
      'camelcase': [2, {
        allow: [],
        properties: 'always',
        ignoreImports: true,
        ignoreGlobals: true,
      }],

      'import-x/order': [
        2,
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'pathGroups': [
            {
              group: 'internal',
              pattern: '#**',
              position: 'before',
            },
          ],
          'newlines-between': 'always-and-inside-groups',
        },
      ],
      'import-x/first': [2],
      'import-x/export': [2],
      'import-x/no-cycle': [2],
      'import-x/no-commonjs': [2],
      'import-x/no-duplicates': [2],
      'import-x/no-self-import': [2],
      'import-x/no-absolute-path': [2],
      'import-x/newline-after-import': [2, {
        count: 1,
      }],
      'import-x/no-empty-named-blocks': [2],

      '@stylistic/semi': [2, 'always'],
      '@stylistic/indent': [2, 2],
      '@stylistic/quotes': [2, 'single'],
      '@stylistic/eol-last': [2],
      '@stylistic/new-parens': [2, 'always'],
      '@stylistic/quote-props': [2, 'consistent'],
      '@stylistic/brace-style': [2, 'stroustrup'],
      '@stylistic/semi-spacing': [2],
      '@stylistic/comma-dangle': [2, 'always-multiline'],
      '@stylistic/dot-location': [2, 'property'],
      '@stylistic/block-spacing': [2, 'always'],
      '@stylistic/curly-newline': [2, 'always'],
      '@stylistic/space-infix-ops': [2],
      '@stylistic/linebreak-style': [2, os.type() === 'Windows_NT' ? 'windows' : 'unix'],
      '@stylistic/multiline-ternary': [2, 'always-multiline'],
      '@stylistic/indent-binary-ops': [2, 2],
      '@stylistic/no-trailing-spaces': [2, {
        skipBlankLines: true,
        ignoreComments: true,
      }],
      '@stylistic/operator-linebreak': [2, 'before'],
      '@stylistic/space-before-blocks': [2, 'always'],
      '@stylistic/type-generic-spacing': [2],
      '@stylistic/object-curly-newline': [2, {
        'ObjectPattern': {
          multiline: true,
        },
        'ObjectExpression': 'always',
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          multiline: true,
        },
      }],
      '@stylistic/template-curly-spacing': [2, 'never'],
      '@stylistic/function-paren-newline': [2, 'multiline-arguments'],
      '@stylistic/type-annotation-spacing': [2],
      '@stylistic/object-property-newline': [2],
      '@stylistic/max-statements-per-line': [2, {
        max: 1,
        ignoredNodes: ['BreakStatement'],
      }],
      '@stylistic/newline-per-chained-call': [2, {
        ignoreChainWithDepth: 4,
      }],
      '@stylistic/one-var-declaration-per-line': [2, 'always'],
      '@stylistic/padding-line-between-statements': [2,
        {
          blankLine: 'always',
          prev: ['directive'],
          next: ['*'],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: ['return', 'export'],
        },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'block-like',
        },
        {
          blankLine: 'any',
          prev: ['export'],
          next: ['export'],
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
  {
    name: '@tluoc/JSX-TSX',
    files: ['./**/*.{jsx,tsx}'],
    ignores: ['./{node_module,build,dist,out}/**/*'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        allowReserved: true,
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
          experimentalObjectRestSpread: true,
        },
      },
      globals: {
        ...globals.es2025,
        ...globals.browser,
      },
    },
    plugins: {
      'react': react,
      '@stylistic': stylistic,
    },
    rules: {
      'react/jsx-max-props-per-line': [2, {
        maximum: 3,
        when: 'always',
      }],

      '@stylistic/jsx-indent': [2, 2],
      '@stylistic/jsx-quotes': [2, 'prefer-single'],
      '@stylistic/jsx-newline': [2, {
        prevent: true,
      }],
      '@stylistic/jsx-tag-spacing': [2, {
        beforeSelfClosing: 'always',
      }],
      '@stylistic/jsx-curly-spacing': [2, {
        when: 'never',
        children: true,
        spacing: {
          objectLiterals: 'never',
        },
      }],
      '@stylistic/jsx-curly-newline': [2],
      '@stylistic/jsx-equals-spacing': [2],
      '@stylistic/jsx-max-props-per-line': [2, {
        when: 'multiline',
        maximum: 1,
      }],
      '@stylistic/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
      '@stylistic/jsx-closing-tag-location': [2, 'line-aligned'],
      '@stylistic/jsx-props-no-multi-spaces': [2],
      '@stylistic/jsx-function-call-newline': [2, 'always'],
      '@stylistic/jsx-one-expression-per-line': [2, {
        allow: 'non-jsx',
      }],
      '@stylistic/jsx-closing-bracket-location': [2, {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      }],
    },
  },
  {
    name: '@tluoc/cspell',
    files: ['./**/*.{js,ts,cjs,mjs,mts,jsx,tsx,json}', './eslint.config.mjs'],
    ignores: ['./{node_module,build,dist,out}/**/*'],
    plugins: {
      '@cspell': cspell,
    },
    rules: {
      '@cspell/spellchecker': [
        1,
        {
          configFile: './cspell.config.yml',
          checkStrings: true,
          checkJSXText: true,
          checkComments: true,
          checkIdentifiers: true,
          checkStringTemplates: true,
          ignoreImports: true,
          ignoreImportProperties: true,
          cspell: {
            import: ['@cspell/dict-ru_ru/cspell-ext.json'],
            language: 'en-US, ru-RU',
          },
        },
      ],
    },
  },
  {
    name: '@tluoc/html',
    files: ['./**/*.html'],
    ignores: ['./{node_modules,build,dist,out}/**/*.html'],
    plugins: {
      html,
    },
    language: 'html/html',
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      'html/quotes': [2, 'single'],
      'html/indent': [2, 2],
      'html/lowercase': [2],
      'html/sort-attrs': [2, {
        priority: [
          'id',
          'class',
          'name',
          'type',
          'style',
        ],
      }],
      'html/attrs-newline': [2, {
        closeStyle: 'newline',
        ifAttrsMoreThan: 3,
      }],
      'html/no-duplicate-id': [2],
      'html/require-doctype': [2],
      'html/element-newline': [2, {
        skip: ['pre', 'code'],
        inline: ['$inline'],
      }],
      'html/no-duplicate-attrs': [2],
      'html/no-duplicate-class': [2],
      'html/no-trailing-spaces': [2],
      'html/require-button-type': [2],
      'html/no-script-style-type': [2],
      'html/require-closing-tags': [2, {
        selfClosing: 'always',
      }],
      'html/no-extra-spacing-text': [2],
      'html/no-extra-spacing-attrs': [2, {
        disallowTabs: true,
        disallowInAssignment: true,
        enforceBeforeSelfClose: true,
      }],
      'html/no-multiple-empty-lines': [2, {
        max: 0,
      }],
    },
  },
  {
    name: '@tluoc/json',
    files: ['./**/*.json'],
    ignores: ['./{node_module,build,dist,out}/**/*', './package-lock.json'],
    language: 'json/json',
    plugins: {
      json,
      jsonc,
    },
    rules: {
      'json/no-empty-keys': [2],
      'json/no-unsafe-values': [2],
      'json/no-duplicate-keys': [2],

      'jsonc/auto': [2],
      'jsonc/quotes': [2],
      'jsonc/indent': [2, 2],
      'jsonc/no-comments': [2],
      'jsonc/key-spacing': [2],
      'jsonc/no-binary-expression': [2],
      'jsonc/object-curly-newline': [2, {
        'ObjectPattern': {
          multiline: true,
        },
        'ObjectExpression': 'always',
        'ImportDeclaration': 'never',
        'ExportDeclaration': {
          multiline: true,
        },
      }],
      'jsonc/array-bracket-newline': [2],
      'jsonc/array-bracket-spacing': [2],
      'jsonc/object-property-newline': [2],
      'jsonc/no-binary-numeric-literals': [2],
    },
  },
);
