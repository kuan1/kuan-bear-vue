import Waterfall from 'kuan-vue-waterfall'

// 组件
import Indicator from './packages/indicator/index'
import Toast from './packages/toast/index'
import MyVideo from './packages/myVideo/index'

// 自定义指令
import copy from './directives/copy/index'
import showClass from './directives/class/index'

// 过滤器
import * as filters from './filters'

import {createApi, localData, cookie, queryString, tool} from './utils'

const components = [
  MyVideo
]

// 全局注册
const install = (Vue) => {
  // 组件注册
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Waterfall)

  // 自定义过滤器
  Vue.filter(filters)

  // 自定义指令
  Vue.use(copy)
  Vue.use(showClass)

  // utils
  Vue.prototype.$indicator = Indicator
  Vue.prototype.$toast = Toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  // 组件
  Waterfall,
  Indicator,
  Toast,
  MyVideo,
  // 自定义指令
  copy,
  showClass,
  // 请求
  createApi,
  // 工具类
  localData,
  cookie,
  queryString,
  tool
}

export default {
  install
}
