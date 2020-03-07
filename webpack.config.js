'use strict';

const webpack = require('webpack');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/toio-browser.js',
  output: {
    library: ['toio', 'scanner'],
    libraryTarget: 'umd',
    path: __dirname,
    filename: 'toio-browser-1.1.1.js'
  },
  resolve: {
    alias: {
      'noble-mac': 'noble'
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/^ws$/)
  ]
};
