const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bgp: "./src/bgp",
    content: "./src/content",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    asyncChunks: false,
  },
};
