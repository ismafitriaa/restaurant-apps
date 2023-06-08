const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: './src/scripts/index.js', // Use relative path for entry point
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html', // Use relative path for template
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/public/',
          to: './', // Use relative path for destination
        },
      ],
    }),
    // new WorkboxWebpackPlugin({
    //   entry: './src/scripts/sw.js', // Use relative path for service worker entry
    // }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('https://restaurant-api.dicoding.dev/'),
        handler: 'StaleWhileRevalidate',
      }],
    }),
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins: [
          ImageminMozjpeg({
            quality: 50,
            progressive: true,
          }),
        ],
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
};