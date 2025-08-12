import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore build folder
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,                   // Base JavaScript rules
      reactHooks.configs['recommended-latest'], // React Hooks rules
      reactRefresh.configs.vite,                // Vite-specific React rules
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser, // Browser globals like window, document
        ...globals.jest,    // Jest globals like describe, test, expect
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      // Allow variables starting with CAPITAL letters to be unused (for React components)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/rules-of-hooks': 'error', // Enforce hooks rules
      'react-hooks/exhaustive-deps': 'warn', // Warn for missing deps in hooks
    },
  },
]);
