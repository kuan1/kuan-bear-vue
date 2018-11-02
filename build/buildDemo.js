process.env.NODE_ENV = 'production'

const { build } = require('kuan-pack')
const { resolve } = require('./utils.js')

build({
  entry: resolve(resolve('test')),
  distPath: resolve('demo')
})
