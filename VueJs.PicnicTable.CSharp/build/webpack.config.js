'use strict'
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BaseConfig = require('./base.config')
const rimraf = require('rimraf')
const fs = require('fs')
var _rootDir = path.resolve(__dirname, '..')

const bundleOutputDir = './wwwroot/dist'

console.info(`Building for production: ${BaseConfig.isProduction}`)
rimraf.sync(path.resolve(_rootDir, 'wwwroot/**/*'), { silent: true })

if (!BaseConfig.isProduction) {
  fs.createReadStream(path.resolve(_rootDir, 'build/publishingLoader.html'))
    .pipe(fs.createWriteStream(path.resolve(_rootDir, 'wwwroot/index.html')))
}

module.exports = {
  name: 'app',
  mode: BaseConfig.isProduction ? 'production' : 'development',
  stats: BaseConfig.isProduction ? 'errors-only' : 'normal',
  entry: { 'main': './ClientApp/app.js' }, // 'polyfill': "@babel/polyfill" could also be added here.
  devServer: {
    // contentBase: './dist',
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'components': path.resolve(__dirname, '../ClientApp/components'),
      'pages': path.resolve(__dirname, '../ClientApp/pages')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          name: 'site',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: !BaseConfig.isProduction // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    nodeEnv: BaseConfig.isProduction ? 'production' : 'development'
  },
  output: {
    path: path.resolve(_rootDir, 'wwwroot/dist'),
    filename: !BaseConfig.isProduction ? '[name].js' : '[name].[hash].js',
    // publicPath: In production we don't use webpack hot reload, so it should be alright.
    // the usage of the ./ at the beginning is for the basePath to be properly used. See
    // BaseConfig.baseUriPath. The webpack hot reload require the official URI path or you
    // will get errors in your console.
    publicPath: BaseConfig.isProduction ? './dist/' : '/dist/'
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
            presets: [['@babel/preset-env', { 'modules': false }]],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-async-to-generator'
            ]
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          BaseConfig.isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../ClientApp/static/'), to: '../static/', ignore: ['.*'] },
      { from: path.resolve(__dirname, '../ClientApp/favicon.ico'), to: '../favicon.ico', toType: 'file' }
    ], { debug: 'warning' }),
    new HtmlWebpackPlugin({
      filename: path.resolve(_rootDir, 'wwwroot/index.html'),
      template: path.resolve(_rootDir, 'ClientApp/index.html'),
      inject: true,
      templateParameters: {
        'baseHref': BaseConfig.baseUriPath
      }
    })
  ].concat(BaseConfig.isProduction ? [
    new MiniCssExtractPlugin({
      filename: !BaseConfig.isProduction ? 'css/[name].css' : 'css/[name].[hash].css'
    })
  ] : [
  ]).concat(BaseConfig.generateMapFiles ? [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map', // Remove this line if you prefer inline source maps
      moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
    })
  ] : [])
}
