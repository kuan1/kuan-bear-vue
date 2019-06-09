// 组件
import loading from './loading/index.js'
import toast from './toast/index.js'

// 自定义指令
import directives from './utils/directives'

// 过滤器
import { filters } from 'kuan-utils'

// vue extend
import VueManage from './utils/VueManage'

export {
  VueManage,
  loading,
  toast
}

export default {
  install(Vue) {
    Vue.prototype.$loading = loading
    Vue.prototype.$toast = toast

    Vue.use(directives)
    // 注入自定义过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
