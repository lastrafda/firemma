const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (_env, argv) {
  const isProduction = _env.NODE_ENV === 'production';
  const isDevelopment = !isProduction;

  console.log('isDev', isDevelopment);
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
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      clientLogLevel: 'silent',
      compress: true,
      open: true,
      port: 7777,
      hot: true,
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
    ].filter(Boolean),
  };
};
