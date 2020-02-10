const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  return {
    dir: {
      input: "src/",
      output: "dist",
      data: '_data/'
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  // Copy `css/fonts/` to `_site/css/fonts`
  
  // If you use a subdirectory, it'll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy("css/fonts");
};