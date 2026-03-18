import eslint from '@eslint/js'
import solid from 'eslint-plugin-solid'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  eslint.configs.recommended,
  solid.configs['flat/recommended'],
  prettierConfig,
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier,
    },
    rules: {
      'solid/prefer-show': 'error',
      'solid/no-innerhtml': 'warn', // Downgrade to warning as existing code uses it
      'solid/jsx-no-duplicate-props': 'off', // Disabled due to existing usage of innerHTML
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prettier/prettier': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        FormData: 'readonly',
        URLSearchParams: 'readonly',
        MutationObserver: 'readonly',
        IntersectionObserver: 'readonly',
        Event: 'readonly',
        Node: 'readonly',
        HTMLElement: 'readonly',
        HTMLHeadElement: 'readonly',
        // Node globals (for config files)
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      },
    },
  },
  {
    files: ['**/*.test.jsx', '**/*.test.js'],
    rules: {
      'solid/jsx-no-undef': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.module.js'],
    rules: {
      'no-undef': 'off',
    },
  },
  {
    files: ['vite.config.js', 'eslint.config.js'],
    rules: {
      'no-undef': 'off',
    },
  },
]
