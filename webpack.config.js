const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const root = path.join(__dirname, 'packages/portfolio/themes/portfolio');
const public = '/packages/portfolio/themes/portfolio';

module.exports = {
  entry: {
    js: path.join(root, './assets/js/app.js'),
  },
  output: {
    filename: './js/app.js',
    path: path.join(root, '/dist/'),
    publicPath: '/portfolio' + public + '/dist',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: ['style-loader'],
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      }),
    }, {
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: '/fonts/',
        },
      }],
    }, {
      test: /\.(png|jpg|jpeg|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: '/images/',
        },
      }],
    }],
  },

  plugins: [
    new ExtractTextPlugin('/css/style.css'),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'js/vendor.js',
      minChunks(module, count) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ],
  devtool: 'eval',
};
