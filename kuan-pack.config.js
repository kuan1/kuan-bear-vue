const { resolve } = require('./build/utils.js')

module.exports = {
  entry: resolve(resolve('test')),
  distPath: resolve('demo')
}
