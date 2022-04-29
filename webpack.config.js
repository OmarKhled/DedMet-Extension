const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    bg: "./src/bg.ts",
    cnt: "./src/cnt.ts",
    popup: "./src/popup/popup.ts",
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
    extensions: [".ts", ".js", ".html"],
    fallback: {
      fs: false,
      path: require.resolve("path"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          variable: "data",
        },
      },
      {
        test: /\.html$/i,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    asyncChunks: false,
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore",
    }),
    new HtmlWebpackPlugin({
      filename: "popup/index.html",
      template: "src/popup/popup.html",
      minify: {
        removeRedundantAttributes: false,
      },
      chunks: ["popup"],
    }),
  ],
};
