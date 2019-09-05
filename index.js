module.exports = {
	"rules": {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: 'explicit',
				overrides: {
					accessors: 'explicit',
					constructors: 'no-public',
					methods: 'explicit',
					properties: 'explicit',
					parameterProperties: 'explicit'
				}
			}
		]
	}
};
