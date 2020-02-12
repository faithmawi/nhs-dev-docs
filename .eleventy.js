const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(config) {
  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');
  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);
  // pass some assets right through
  config.addPassthroughCopy("/src/site/images");
  config.addPassthroughCopy("_site/css/main.css");
  config.addPassthroughCopy("_site/site/images");
  return {
    dir: {
      input: "src/",
      output: "_site",
      data: '_data/'
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};
