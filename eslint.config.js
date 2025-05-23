import js from "@eslint/js";
import globals from "globals";

export default [
	{
		languageOptions: {
			// Enable all predefined browser global variables
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	// ESLint's predefined config that enables its recommended rules
	js.configs.recommended,
	{
		ignores: [
			"dist/", // Build output directory
			"*.min.*", // Minified files
		],
	},
];
