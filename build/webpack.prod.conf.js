const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = merge(base, {
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: 'kuan-bear-vue.js',
    library: 'kuan-bear-vue',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        filename: "kuan-bear-vue.css",
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          parallel: true,
          warnings: false,
          compress: {
            drop_console: true,
          }
        }
      })
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "kuan-bear-vue.css",
    }),
    new CleanWebpackPlugin(['lib'], {root: path.resolve(__dirname, '..')})
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"',
    // process.env.npm_package_name
    //   }
    // })
  ]
})

module.exports = config
