const components = {}
function requireAll(r) {
  return r.keys().map(key => {
    const name = key
      .replace(/^\.\//, '')
      .replace(/\/index.vue$/, '')
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
    components[name] = r(key).default
  })
}
requireAll(require.context('./', true, /index\.vue/))

const install = Vue => {
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
  })
}

export default {
  install
}
