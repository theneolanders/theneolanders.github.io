module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            ouput: '_site'
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
};
  
  