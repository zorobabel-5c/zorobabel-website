import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import sveltePlugin from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default [
	{
		files: ['**/*.{js,ts}'],
		plugins: {
			'@typescript-eslint': typescript
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020
			},
			globals: {
				browser: true,
				es2017: true,
				node: true
			}
		},
		rules: {
			...js.configs.recommended.rules,
			...typescript.configs.recommended.rules,
			...eslintConfigPrettier.rules
		}
	},
	{
		files: ['**/*.svelte'],
		plugins: {
			svelte: sveltePlugin
		},
		processor: 'svelte/svelte'
	},
	{
		ignores: [
			'**/node_modules/**',
			'**/build/**',
			'**/.svelte-kit/**',
			'**/package/**',
			'**/.env*',
			'!**/.env.example',
			'**/pnpm-lock.yaml',
			'**/package-lock.json',
			'**/yarn.lock',
			'**/.DS_Store',
			'**/*.cjs'
		]
	}
];
