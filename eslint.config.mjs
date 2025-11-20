import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default defineConfig([
	// ...
	{
		plugins: {
			'simple-import-sort': simpleImportSortPlugin,
		},
		rules: {
	    'simple-import-sort/imports': 'error',
	    'simple-import-sort/exports': 'error',
	    'import/first': 'error',
	    'import/newline-after-import': 'error',
	    'import/no-duplicates': 'error',
	    'no-unused-vars': 'error',
	  },
	},
]);