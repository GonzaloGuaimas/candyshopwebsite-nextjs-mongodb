module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'overrides': [
		{
			'files': ['*.ts', '*.tsx'],
			'extends': [
			'plugin:@typescript-eslint/eslint-recommended',
			'plugin:@typescript-eslint/recommended',
			'prettier/@typescript-eslint'
			],
			'parser': '@typescript-eslint/parser',
			'plugins': ['@typescript-eslint']
		}
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		},
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'react/prop-types': 0,
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] }
		],
		'react/react-in-jsx-scope': 'off',
		'indent': [
			'off'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
