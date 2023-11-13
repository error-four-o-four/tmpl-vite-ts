module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:import/recommended',
		'plugin:promise/recommended',
	],
	ignorePatterns: ['dist'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['*.js', '*.cjs'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
		// extraFileExtensions: ['.html'],
	},
	plugins: ['@typescript-eslint', 'prettier', 'import', 'promise'],
	rules: {
		'no-continue': 0,
		'no-unused-vars': 0,
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],
		'no-nested-ternary': 0,
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': ['error'],
		'no-use-before-define': 0,
		'@typescript-eslint/no-use-before-define': ['warn'],
		'import/prefer-default-export': 0,
		'import/extensions': ['error', 'always', { ignorePackages: true }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
	},
};
