import Waterfall from 'kuan-vue-waterfall'
import * as utils from 'kuan-utils'
import md5 from 'blueimp-md5'
import * as authUtil from './utils/auth'

// 组件
import Indicator from './packages/indicator/index'
import Toast from './packages/toast/index'
import MyVideo from './packages/myVideo/index'
import MyCode from './packages/myCode'
import CircleBar from './packages/circleBar'
import Carousel from './packages/carousel'
import Danmaku from './packages/danmaku'

// 自定义指令
import copy from './directives/copy/index'
import showClass from './directives/class/index'
import focus from './directives/focus'

// 过滤器
import * as filters from './filters'

import {createApi, wx} from './utils'

const components = [
  MyVideo,
  MyCode,
  CircleBar
]

// 全局注册
const install = (Vue) => {
  // 组件注册
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Waterfall)
  Vue.use(Carousel)
  Vue.use(Danmaku)

  // 自定义过滤器
  Vue.filter(filters)

  // 自定义指令
  Vue.use(copy)
  Vue.use(showClass)
  Vue.use(focus)

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
  MyCode,
  CircleBar,
  Carousel,

  // 自定义指令
  copy,
  showClass,

  // 工具类
  createApi, // http封装
  wx, // 微信 todo
  authUtil,
  utils, // kuan-utils工具类
  md5 // md5加密
}

export default {
  install
}
