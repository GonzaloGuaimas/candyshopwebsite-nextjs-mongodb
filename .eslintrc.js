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
