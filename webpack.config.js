const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
          outputPath: 'img',
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // favicon: resolve('src/favicon.ico'),
      minify: {
        minimize: true,
        removeConments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      }
    }),
    new MiniCssExtractPlugin({
      // 传入可选参数，可对文件路径进行修改和重命名
      filename: 'src/css/built.css'
    }),
    new UglifyjsWebpackPugin(),
  ],
  mode: 'development',
  devtool: 'source-map',
}
