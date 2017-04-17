const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const PORT = 3000;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    function copyPage() {
      // provide src/index.html as an asset
      this.plugin('emit', function (compilation, cb) {
        const srcPath = path.join(__dirname, 'src/index.html');
        const fileContents = fs.readFileSync(srcPath, 'utf8');

        compilation.assets['index.html'] = {
          source: function () {
            return fileContents;
          },
          size: function () {
            return fileContents.length;
          },
        };

        cb();
      });
    },
  ],
  devServer: {
    stats: 'errors-only',
    host: '0.0.0.0',
    port: PORT,
    hot: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
};
