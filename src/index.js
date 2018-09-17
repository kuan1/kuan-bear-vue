// 组件
import Indicator from './packages/indicator/index'
import Toast from './packages/toast/index'
import MyVideo from './packages/myVideo/index'
import MyCode from './packages/myCode'
import CircleBar from './packages/circleBar'
import Danmaku from './bate/danmaku'
import HeadRoom from './packages/headRoom'
// admin组件
import MyImage from './packages/admin/myImage'
import MyForm from './packages/admin/myForm'
import MyModal from './packages/admin/myModal' // 自动验证
import MyPagination from './packages/admin/myPagination'
import MySearch from './packages/admin/mySearch'

// 自定义指令
import directives from './directives'

// 过滤器
import * as filters from './filters'

import {createApi} from './utils'

export {
  // 组件
  Indicator,
  Toast,
  MyVideo,
  MyCode,
  CircleBar,
  Danmaku,
  HeadRoom,
  // admin 组件
  MyImage,
  MyForm,
  MyModal,
  MyPagination,
  MySearch,

  // 自定义指令
  directives,

  // 过滤器
  filters,

  // 工具类
  createApi, // http封装
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

