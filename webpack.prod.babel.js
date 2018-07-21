import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common.js';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default merge(common, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunks/[name].[hash:8].js',
    path: path.resolve(__dirname, 'frontend/dist/prod'),
    publicPath: '/'
  },
  module: {},
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'frontend/dist/prod')]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
});
