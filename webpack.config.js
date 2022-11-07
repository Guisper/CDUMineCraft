const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/js/app.ts',
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
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: '/img/',
          publicPath: '/build/img/'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].chunk.css'
    }),
    new UglifyjsWebpackPugin(),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin({})],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true // 强制忽略minChunks等设置
        }
      }
    }
  },
  mode: 'development',
  devtool: 'source-map',
}
