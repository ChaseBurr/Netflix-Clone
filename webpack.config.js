const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
     entry: path.resolve(__dirname, "src/index.js"),
     module: {
          rules: [
               { test: /\.js$/, use: "babel-loader" },
               { test: /\.css$/, use: ["style-loader", "css-loader"] },
          ],
     },
     output: {
          path: path.resolve(__dirname, "build"),
          filename: "main.[contenthash].js",
     },

     plugins: [
          new HtmlWebpackPlugin({
               template: path.resolve(__dirname, "public/index.html"),
               filename: "index.html",
          }),
          new Dotenv(),
     ],
};
