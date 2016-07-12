var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/assets/',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint-loader",
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot",
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, "src"),
        ],
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  }
};
