import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common.js';

export default merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './frontend/src/main.js'
    ]
  },
  module: {},
  output: {
    filename: '[name].[hash:8].js',
    chunkFilename: 'chunks/[name].[hash:8].js',
    path: path.resolve(__dirname, 'frontend/dist/dev'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
