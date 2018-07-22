const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = merge(base, {
  context: path.resolve(__dirname, '..'),
  entry: './src/kuan-bear-vue',
  output: {
    path: path.resolve(__dirname, '..', 'lib'),
    filename: 'kuan-bear-vue.min.js',
    library: 'kuanBearVue',
    libraryTarget: 'umd'
    // libraryExport: 'default'
  },
  plugins: [
    new CleanWebpackPlugin(['lib'], {root: path.resolve(__dirname, '..')})
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ]
})

module.exports = config
