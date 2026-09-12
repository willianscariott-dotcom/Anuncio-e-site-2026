import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig([
  { ignores: ['dist/**', '.astro/**', '.vercel/**', 'node_modules/**'] },
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
]);
