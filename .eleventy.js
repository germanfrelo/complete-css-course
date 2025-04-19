module.exports = function (eleventyConfig) {
	// Creates a global variable for the current __dirname to make including and
	// working with files in the pattern library a little easier
	global.__basedir = __dirname;

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
};
