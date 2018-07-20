const path = require('path')
const base = require('./webpack.base.conf')
const merge = require('webpack-merge')

const config = merge(base, {
  context: path.resolve(__dirname, '../'),
  entry: './src/waterFall',
  output: {
    path: path.resolve(__dirname, '../', 'lib'),
    filename: 'kuan-bear-vue.min.js',
    library: 'kuanBearVue',
    libraryTarget: 'umd'
  },
  plugins: [
    // ,
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // })
  ]
})

module.exports = config
