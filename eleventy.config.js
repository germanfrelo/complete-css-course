export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/fonts");
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/js");
	// Tell Eleventy to watch your source CSS files for changes.
	eleventyConfig.addWatchTarget("src/css");
	// Tell the dev server to watch the compiled CSS for hot-reloading.
	eleventyConfig.setServerOptions({
		watch: ["dist/css/**/*.css"],
	});

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
