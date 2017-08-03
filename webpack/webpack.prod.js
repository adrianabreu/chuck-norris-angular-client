const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); // Or `import 'base-href-webpack-plugin';` if using typescript 

const ENV = 'production';

module.exports = webpackMerge(commonConfig, {

   output: {
      path: path.resolve('./dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: '/chuck-norris-angular-client/'
   },
   plugins: [
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
         compress: {
            warnings: true
         }
      }),
      new webpack.LoaderOptionsPlugin({
         minimize: true
      }),
      new CopyWebpackPlugin([{
         from: path.resolve('./src/public'),
         to: path.resolve('./dist')
      }]),
      new BaseHrefWebpackPlugin({ baseHref: '/chuck-norris-angular-client/' })
   ],
});