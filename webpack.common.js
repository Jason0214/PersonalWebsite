import path from 'path';

import eslintFriendlyFormatter from 'eslint-friendly-formatter';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  context: path.resolve(__dirname),
  // stat: 'minimal',

  entry: {
    app: './frontend/src/main.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'frontend/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: ['frontend/src', 'test/'],
        options: {
          formatter: eslintFriendlyFormatter
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'frontend/asset/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'frontend/asset/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'frontend/assert/fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // Warns when multiple versions of the same package exist in a build
    // new DuplicatePackageCheckerPlugin(),
    // // Better building progress display
    // new ProgressBarWebpackPlugin({
    //   clear: false
    // }),
    // // Add Progressive Web Application manifest
    // new WebpackPwaManifest({
    //   name: '',
    //   short_name: '',
    //   description: '',
    //   background_color: '#ffffff',
    //   theme_color: '#ffffff',
    //   orientation: 'portrait',
    //   display: 'standalone',
    //   icons: [
    //     {
    //       src: path.resolve('frontend/src/assets/logo.png'),
    //       sizes: [16, 32, 96, 128, 192, 256, 384, 512],
    //     },
    //     {
    //       src: path.resolve('frontend/src/assets/logo.png'),
    //       sizes: [120, 152, 167, 180],
    //       destination: path.join('icons', 'ios'),
    //       ios: true,
    //     },
    //     {
    //       src: path.resolve('frontend/src/assets/logo.png'),
    //       sizes: [192, 256],
    //       destination: path.join('icos', 'android'),
    //     },
    //   ],
    // }),
    // Generate html fil to dist folder
    new HtmlWebpackPlugin({
      title: 'welcome',
      // favicon: path.resolve(__dirname, 'frontend/src/assets/favicon.ico'),
      template: path.resolve(__dirname, 'frontend/index.ejs')
    })
  ]
};