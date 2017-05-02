const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'redux', 'react-redux'];

module.exports = {
  entry: {
    bundle: './src/client/index.js',
    vendor: VENDOR_LIBS,    
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '/dist/'),
  },
  devServer: {
    contentBase: path.join(__dirname, './src/client/'),
    publicPath: '/',
    compress: true,
  },
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
    })
  ]   
};
