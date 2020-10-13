const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = function (_env) {
  const isProduction = _env.NODE_ENV === 'production';
  const isDevelopment = !isProduction;

  return {
    entry: './src/entry.js',
    output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'assets/js/[name].[hash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDevelopment
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      clientLogLevel: 'silent',
      compress: true,
      open: true,
      port: 7777,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true,
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/wtf-[name].[contenthash:8].css',
          chunkFilename:
            'assets/css/wtf-[name].[contethash:8].chunk.css',
        }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        ),
      }),
      new DotenvPlugin(),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false,
            },
            mangle: {
              safari10: true,
            },
            output: {
              comments: false,
              ascii_only: true,
            },
            warnings: false,
          },
        }),
        new OptimizeCssAssetsPlugin(),
      ],
    },
  };
};
