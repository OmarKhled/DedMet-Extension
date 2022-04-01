const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    bg: "./src/bg.ts",
    cnt: "./src/cnt.ts",
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
    extensions: [".ts", ".js"],
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
  ],
};
