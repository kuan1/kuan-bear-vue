process.env.NODE_ENV = 'production'

const path = require('path')
const { buildLib } = require('kuan-pack-vue')

buildLib({
  entry: path.resolve(__dirname, '..', 'src')
})
