import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common.js';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunks/[name].[hash:8].js',
    path: path.resolve(__dirname, 'frontend/dist/prod'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          css: {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          },
          transformToRequire: {
            video: 'src',
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'frontend/dist/prod')]),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash:8].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});