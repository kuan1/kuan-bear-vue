// 组件
import Indicator from './packages/indicator/index'
import Toast from './packages/toast/index'
import MyVideo from './packages/myVideo/index'
import MyCode from './packages/myCode'
import CircleBar from './packages/circleBar'
import Carousel from './packages/carousel'
import Danmaku from './packages/danmaku'

// 自定义指令
import directives from './directives'

// 过滤器
import * as filters from './filters'

import {createApi, wx} from './utils'

export {
  // 组件
  Indicator,
  Toast,
  MyVideo,
  MyCode,
  CircleBar,
  Carousel,
  Danmaku,

  // 自定义指令
  directives,

  // 过滤器
  filters,

  // 工具类
  createApi, // http封装
  wx // 微信 todo
}

export default {
  install(Vue) {
    // 注入自定指令
    Vue.use(directives)
    // 注入自定义过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}

