// svelte.config.js
const autoPreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: autoPreprocess({
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-nesting'),
        require('autoprefixer'),
      ],
    },
  }),
}