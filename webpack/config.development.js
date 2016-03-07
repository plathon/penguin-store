var webpack    = require('webpack');
var lodash      = require('lodash');
var baseConfig = require('../webpack.config.js');

module.exports = lodash.merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client'
  ].concat(baseConfig.entry),
  plugins: baseConfig.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
});
