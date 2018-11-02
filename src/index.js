// 组件
import Indicator from './packages/indicator/index'
import Toast from './packages/toast/index'
import MyCode from './packages/myCode'
import MyVideo from './packages/myVideo/index'

// 自定义指令
import directives from './directives'

// 过滤器
import * as filters from './filters'

export {
  // 组件
  Indicator,
  Toast,
  MyCode,
  MyVideo
}

export default {
  install(Vue) {
    Vue.prototype.$toast = Toast
    Vue.prototype.$indicator = Indicator

    // 自定义指令
    Vue.use(directives)
    // 注入自定义过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
