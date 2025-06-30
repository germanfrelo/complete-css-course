// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ["prettier-plugin-jinja-template"],
	quoteProps: "consistent",
	overrides: [
		{
			files: ["*.css", "*.html"],
			options: {
				printWidth: 9999,
			},
		},
		{
			files: ["*.js", "*.jsx", "*.vue"],
			options: {
				singleAttributePerLine: true,
			},
		},
		{
			files: ["*.jsonc"],
			options: {
				trailingComma: "none",
			},
		},
		{
			files: ["*.njk"],
			options: {
				parser: "jinja-template",
				printWidth: 9999,
			},
		},
	],
};

export default config;
