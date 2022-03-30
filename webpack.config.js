const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    bg: "./src/bg.ts",
    cnt: "./src/cnt.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    asyncChunks: false,
  },
};
