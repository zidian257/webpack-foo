const merge = require("webpack-merge");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const path = require("path");
const { stats } = require("./dev.stats");

// official docs see https://webpack.docschina.org/configuration/dev-server/#devserver

module.exports = merge(common, {
  output: {
    filename: "[name].[hash].js"
  },
  mode: "development",
  devtool: "eval-source-map", // choices see https://webpack.js.org/configuration/devtool/#development
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    compress: true,
    host: "0.0.0.0",
    https: true,
    stats,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
