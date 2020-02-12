const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(config) {
  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');
  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);
  // pass some assets right through
  config.addPassthroughCopy("/nhs-dev-docs/src/site/images");
  config.addPassthroughCopy("/nhs-dev-docs/src/static/css/main.css");
  config.addPassthroughCopy("/nhs-dev-docs/src/js/main.min.js");
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
