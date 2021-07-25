const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './templates/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './layout/**/*.liquid',
    './styles/**/*.css',
    './scripts/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      margin: ['last'],
      scale: ['active', 'group-hover', 'group-focus'],
      backgroundColor: ['group-open', 'open', 'disabled'],
      textColor: ['disabled'],
      pointerEvents: ['group-open', 'open', 'focus'],
      opacity: ['disabled', 'group-open', 'open'],
      translate: ['group-open', 'open'],
      height: ['group-open', 'open'],
      rotate: ['group-open', 'open'],
    },
  },
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
