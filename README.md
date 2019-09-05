# eslint-config-ts-loonfy
ESLint rules for typescript Loonfy projects

## installation
`npm install --save-dev https://github.com/loonfy-technologies/eslint-config-ts-loonfy.git @typescript-eslint/eslint-plugin @typescript-eslint/parser`

## .eslintrc.js example

```
module.exports = {
	parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
	extends:  [
		'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'eslint-config-loonfy',
		'eslint-config-ts-loonfy'
	],
	parserOptions:  {
		ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
		sourceType:  'module',  // Allows for the use of imports
	},
	"rules": {

	}
};
```
