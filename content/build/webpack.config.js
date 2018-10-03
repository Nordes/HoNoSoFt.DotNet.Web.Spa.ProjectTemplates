'use strict'
const path = require('path');
const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const rimraf = require('rimraf');
var _rootDir = path.resolve(__dirname, '..')

var args = process.argv;
var isProduction = args.indexOf('--prod', 0) >= 0;
const bundleOutputDir = './wwwroot/dist'

console.warn(`Building for production: ` + isProduction);
rimraf.sync(path.resolve(_rootDir, 'wwwroot/**/*'), { silent: true });

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: { 'main': './ClientApp/app.js' },
  optimization: {
    minimize: isProduction,
    nodeEnv: isProduction ? 'production' : 'development'
  },
  output: {
    path: path.resolve(_rootDir, 'wwwroot/dist'),
    filename: 'site.bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // this will apply to `.vue`
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ico|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // https://itnext.io/vue-js-and-webpack-4-from-scratch-part-2-5038cc9deffb
    // new webpack.HotModuleReplacementPlugin(), // <== To see if needed.
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([ 
      { from: path.resolve(__dirname, '../ClientApp/static/'), to: '../static/', ignore: ['.*'] },
      { from: path.resolve(__dirname, '../ClientApp/favicon.ico'), to: '../favicon.ico', toType: 'file' }
     ],  { debug: 'warning' }),
    new HtmlWebpackPlugin({
      filename: path.resolve(_rootDir, 'wwwroot/index.html'),
      template: path.resolve(_rootDir, 'ClientApp/index.html'),
      inject: true
    })
  ].concat(isProduction ? [
    // // // Compress extracted CSS.
    // new OptimizeCSSPlugin({
    //   cssProcessorOptions: {
    //     safe: true
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
      // publicPath: '../',
    })
  ] : [ // Development
    // Plugins that apply in development builds only
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map', // Remove this line if you prefer inline source maps
      moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
    })
  ])
};
