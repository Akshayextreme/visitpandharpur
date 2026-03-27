module.exports = function(eleventyConfig) {

  return {
    dir: {
      input: "content",
      includes: "../layouts",
      data: "../_data",
      output: "_site"
    }
  };

};
