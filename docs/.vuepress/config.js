const pkg = require('../../package.json')
const title = 'kuan-bear-vue'

console.log(pkg.version)

const isDev = process.env.NODE_ENV !== 'production'
const base = isDev ? '' : `/${title}/`

module.exports = {
  base, // publicPath
  title: title + ' ' + pkg.version, // 导航title
  description: '幻熊前端小组常用vue组件整理', // 网页描述
  head: [
    ['link', { rel: 'stylesheet', href: `${base}/kuan-css.css` }]
  ],
  themeConfig: {
    sidebar: {
      '/guide/': [
        '',
        'feedback',
        'collect',
        'console'
      ]
    },
    nav: [ // 导航链接
      { text: '首页', link: '/' },
      { text: '使用', link: '/guide/' },
      { text: 'DEMO', link: '/demo/' },
      { text: 'Github', link: 'https://github.com/kuan1/kuan-bear-vue' },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${__dirname}/../../../src`
      }
    }
  },
  extraWatchFiles: [
    '../../demo',
    '../../src'
  ],
  scss: {
    includePaths: ["./public/kuan-css/index.scss"]
  },
}