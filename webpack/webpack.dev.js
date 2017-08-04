const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = 'dev';


module.exports = webpackMerge(commonConfig, {
   devServer: {
      contentBase: './src/public',
      stats: 'minimal',
   },
   devtool: "source-map",
   output: {
      path: path.resolve('./src/public'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
   },

});