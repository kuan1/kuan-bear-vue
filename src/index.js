// 组件
import QrCode from './packages/QrCode'
import MyVideo from './packages/MyVideo/index'
import HeadRoom from './packages/HeadRoom/index'

// 自定义指令
import directives from './directives'

// 过滤器
import { filters } from 'kuan-utils'

export {
  // 组件
  QrCode,
  MyVideo,
  HeadRoom
}

export default {
  install(Vue) {
    Vue.use(directives)
    // 注入自定义过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
