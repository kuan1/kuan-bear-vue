// 全局注册packages
const components = {}

export function requireAll(r) {
  return r.keys().forEach(key => {
    const name = key.replace(/^\.\//, '').replace(/\/index.js$/, '').replace(/([A-Z])/g, '-$1').toLowerCase()
    components[name] = r(key).default
  })
}
requireAll(require.context('../packages', true, /index\.js/))

const install = (Vue) => {
  Object.values(components).forEach(item => {
    Vue.use(item)
  })
}

export default {
  install
}
