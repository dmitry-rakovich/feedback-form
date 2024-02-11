const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: './dist',
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
      }
    ]
  }
}
