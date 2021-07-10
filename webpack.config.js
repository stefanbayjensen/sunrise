const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './scripts/index.js',
    base: './scripts/util/base.js',
  },
  stats: 'errors-only',
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          ExtractCSS.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              url: false,
            },
          },
          `sass-loader`,
        ],
      },
    ],
  },
  plugins: [new ExtractCSS()],
};
