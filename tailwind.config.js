const customVariants = require('./.dev/tailwind.variants');

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
        second: 'red',
      },
      fontFamily: {
        circular: "'Circular', sans-serif",
      },
    },
  },
  darkMode: false,
  plugins: [customVariants],
};
