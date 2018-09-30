'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var _rootDir = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  entry: { 'main': './ClientApp/app.js' },
  output: {
    path: path.resolve(_rootDir, 'wwwroot/dist'),
    filename: 'site.bundle.js',
    publicPath: '~/dist/'
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
  ]
};
