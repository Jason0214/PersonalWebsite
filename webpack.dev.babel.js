import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common.js';

import CleanWebpackPlugin from 'clean-webpack-plugin';

export default merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './frontend/src/main.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: [
            'vue-style-loader',
            {
              css: {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            }
          ],
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
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunks/[name].[hash:8].js',
    path: path.resolve(__dirname, 'frontend/dist/dev'),
    publicPath: '/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
