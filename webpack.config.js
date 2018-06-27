const path = require("path");
module.exports = {

  entry: {
    "js/src/components/home/index":"./resources/src/components/home/Index.js"
  },
  output: {
    path: path.join(__dirname, "/public/"),
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader",{
          loader: "babel-loader"
        }]
      }
    ]
  },
  devServer: {
    inline:true,
    //port: 1337
  },
};