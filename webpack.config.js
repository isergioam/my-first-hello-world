let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let webpack = require('webpack');

var basePath = __dirname;

module.exports = {
 context: path.join(basePath, 'src'),
 resolve: {
   extensions: ['.js', '.ts', '.tsx']
 },
 entry: {
   app: './index.ts',
   appStyles: './content/scss/styles.scss',
   vendorStyles: [
     '../node_modules/bootstrap/dist/css/bootstrap.css',
   ],
 },
 output: {
   path: path.join(basePath, 'dist'),
   filename: '[name].js',
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       exclude: /node_modules/,
       loader: 'awesome-typescript-loader',
       options: {
         useBabel: true,
       },
     },
     {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ]
    },
     {
       test: /\.css$/,
       use: [MiniCssExtractPlugin.loader, "css-loader"],
     },
     {
       test: /\.(png|jpg|gif|svg)$/,
       exclude: /node_modules/,
       use: {
      loader: 'url-loader',
      options: {
      limit:5000,
        name: './img/[hash].[name].[ext]'
     },
    },
  },
     {
       test: /\.html$/,
       loader: 'html-loader',
      },   
   ],
 },
 // For development https://webpack.js.org/configuration/devtool/#for-development
 devtool: 'inline-source-map',
 devServer: {
   port: 8080,
   noInfo: true,
 },
 plugins: [
   //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   new HtmlWebpackPlugin({
     filename: 'index.html', //Name of file in ./dist/
     template: 'index.html', //Name of template in ./src
     hash: true,
   }),
   new MiniCssExtractPlugin({
     filename: "[name].css",
     chunkFilename: "[id].css"
   }),
 ],
};