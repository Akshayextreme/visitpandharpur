module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "content",
      includes: "../layouts",
      data: "../_data",
      output: "_site"
    }
  };

};
