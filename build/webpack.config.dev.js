'use strict'

const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var _rootDir = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  entry: { 'main': './ClientApp/app.js' },
  output: {
    path: path.resolve(_rootDir, 'wwwroot'),
    filename: 'site.bundle.js',
    publicPath: '~/'
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
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // global data for all components
            // this can be read from a scss file
            options: {
              data: '$color: red;'
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
    new HtmlWebpackPlugin({
      filename: path.resolve(_rootDir, 'wwwroot/index.html'),
      template: path.resolve(_rootDir, 'ClientApp/index.html'),
      inject: true
    })
  ]
};
