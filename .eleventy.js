export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addPassthroughCopy("./src/style/");
    eleventyConfig.addPassthroughCopy("./src/scripts/");
    eleventyConfig.addPassthroughCopy("./src/media");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
  };
  
  