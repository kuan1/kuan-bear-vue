process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const { buildLib } = require('kuan-pack-vue')
const { resolve, fileDisplay } = require('./utils')

// 将build包装成Promise
const build = options => new Promise(resolve => buildLib(options, resolve))

// 编译所有src文件
buildAll()
async function buildAll() {
  const targets = fileDisplay(resolve('src'))
  console.log(targets, 'tages')
  for (let i = 0; i < targets.length; i++) {
    const libName = targets[i].substr(1)
    if (libName[0] === '.') continue
    console.log(chalk.red(`${libName}编译开始...`))
    const options = {
      entry: resolve(`src/${libName}`),
      libName:
        libName === 'index.js'
          ? 'kuan-bear-vue'
          : libName.replace('/index.js', '').replace('/index.vue', ''),
      distPath: resolve('lib'),
      disabledClean: true, // 是否自动清空dist
      htmlTemplate: false,
      extractCss: false
    }
    await build(options)
  }
  console.log(chalk.red.bold(`${targets.length}个文件已编译！`))
}
