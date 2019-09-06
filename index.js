module.exports = {
	"rules": {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/camelcase": [
			"error",
			{
				properties: "never"
			}
		],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-member-accessibility": [
			'error',
			{
				overrides: {
					accessors : 'off',
					constructors: 'off',
					methods: 'explicit',
					properties: 'explicit',
					parameterProperties: 'explicit'
				}
			}
		],
	}
};
