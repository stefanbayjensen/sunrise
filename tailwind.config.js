/* eslint-disable global-require */
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
  theme: {
    extend: {
      colors: {
        primary: '#D6981E',
        second: '#663B89',
      },
      fontFamily: {
        circular: "'Circular', sans-serif",
      },
    },
  },
  darkMode: false,
  plugins: [require('./.dev/tailwind.variants'), require('@tailwindcss/typography')],
};
