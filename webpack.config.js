var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  //Define entry point
  entry: ['./src/js/main.js'], // add 'webpack/hot/dev-server' ,?

  //Define output point
  output: {
    path: __dirname + '/dist/assets/js',
    filename: 'main-dist.js',
    publicPath: '/dist/'
  },

  devtool: 'source-map',

  //Define modules
  module: {
    preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
    ],
    loaders: [
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract(
                  'style-loader','css-loader!autoprefixer-loader!sass-loader'
                )
            },
            {
                test: /\.jade$/,
                loader: "jade-loader"
            }
    ]

  },
  postcss: function() {
        return {
          defaults: [
            require('autoprefixer')
          ]
        };
  },

  // Define plugins
  plugins: [
    new ExtractTextPlugin('../css/main-dist.css'),
    new HtmlWebpackPlugin({
      filename: '../../index.html',
      template: './src/index.jade',
      inject: false,
    })
  ],

  //watch: true
};
