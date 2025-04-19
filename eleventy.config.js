export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/fonts");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/js");

	return {
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src",
			output: "dist",
		},
	};
}
