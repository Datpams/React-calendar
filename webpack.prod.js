//Webpack config this is for the application to work 
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './scripts/index'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:true}})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css'] }
    ]
  }
};
