import Indicator from '@/packages/indicator'
import Toast from '@/packages/toast'

const components = []

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$indicator = Indicator
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Indicator
}

export default {
  install,
  ...components
}
