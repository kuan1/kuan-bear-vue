// 组件
import Indicator from '@/packages/indicator'
import Toast from '@/packages/toast'
import MyVideo from '@/packages/myVideo'

// 自定义指令
import copy from '@/directives/copy'
import showClass from '@/directives/class'

const components = [
  MyVideo
]

const install = (Vue) => {
  // 组件注册
  components.map(component => {
    Vue.component(component.name, component)
  })

  // 自定义指令
  Vue.use(copy)
  Vue.use(showClass)

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
  install
}
