module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"array-bracket-newline": ["error", { multiline: true }],
		"array-bracket-spacing": ["error", "never"],
		"array-element-newline": ["error", "consistent"],
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs",
			{
				allowSingleLine: true,
			},
		],
		"comma-dangle": ["error", "only-multiline"],
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true,
			},
		],
		"comma-style": ["error", "last"],
		"dot-location": ["error", "property"],
		"eol-last": ["error", "always"],
		"func-names": ["error", "always"],
		"handle-callback-err": ["error", "error"],
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
			},
		],
		"jsx-quotes": ["error", "prefer-single"],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"max-nested-callbacks": [
			"error",
			{
				max: 4,
			},
		],
		"max-statements-per-line": [
			"error",
			{
				max: 1,
			},
		],
		"no-empty-function": "error",
		"no-floating-decimal": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxEOF: 0,
				maxBOF: 0,
			},
		],
		"no-new-object": "error",
		"no-shadow": [
			"error",
			{
				allow: ["err", "resolve", "reject", "cb"],
			},
		],
		"no-trailing-spaces": ["error"],
		"no-var": "error",
		"object-curly-newline": [
			"off",
			{
				ObjectExpression: "always",
				ImportDeclaration: "never",
				ExportDeclaration: "never",
			},
		],
		"object-curly-spacing": ["error", "always"],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		quotes: ["error", "backtick"],
		semi: ["error", "always"],
		"semi-spacing": "error",
		"semi-style": ["error", "last"],
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": ["error", "always"],
		"template-curly-spacing": "error",
		yoda: "error",
	},
};
