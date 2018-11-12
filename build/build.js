process.env.NODE_ENV = 'production'

const { buildLib } = require('kuan-pack')

const { resolve } = require('./utils')

buildLib({
  libName: 'kuan-bear-vue',
  distPath: resolve('lib'), // 输入地址 默认： dist
  htmlTemplate: false,
  extractCss: false // 抽取css
})
