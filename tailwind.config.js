const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: [
    './templates/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './layout/**/*.liquid',
    './styles/**/*.css',
    './scripts/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {},
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('group-open', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => `.group.open .${e(`group-open${separator}${className}`)}`
        );
      });
      addVariant('open', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`open${separator}${className}`)}.open`);
      });
    }),
  ],
};
