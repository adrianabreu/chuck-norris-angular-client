var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
   entry: {
      app: './src/app/app.js'
   },
   resolve: {
      modules: [
         path.join(__dirname, 'src'),
         'node_modules'
      ],
      'extensions': ['.js', '.ts']
   },
   module: {
      loaders: [{
         test: /\.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/
      }, {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
         })
      }, {
         test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
         loader: 'file-loader'
      }, {
         test: /\.html$/,
         loader: 'raw-loader'
      }, {
         'test': /\.ts?$/,
         'loaders': ['babel-loader', 'awesome-typescript-loader?useBabel=true&useCache=true'],
         'exclude': [/node_modules/]
      }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/public/index.html',
         inject: 'body'
      }),
      new ExtractTextPlugin({
         filename: '[name].[hash].css'
      })
   ]
};
