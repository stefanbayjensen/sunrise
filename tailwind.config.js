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
        second: '#663B89',
      },
    },
  },
  darkMode: false,
  plugins: [customVariants],
};
