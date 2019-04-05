// 组件
import QrCode from './QrCode'
import MyVideo from './MyVideo'
import HeadRoom from './HeadRoom'
import PileCard from './PileCard'
import MyList from './MyList'
import MyDebug from './MyDebug'
import VConsole from './VConsole'
import loading from './MyLoading/index.js'
import toast from './MyToast/index.js'

// 自定义指令
import directives from './utils/directives'

// 过滤器
import { filters } from 'kuan-utils'

export {
  // 组件
  QrCode,
  MyVideo,
  HeadRoom,
  PileCard,
  MyList,
  MyDebug,
  VConsole,
  loading,
  toast
}

export default {
  install(Vue) {
    Vue.protoType.$loading = loading
    Vue.protoType.$toast = toast

    Vue.use(directives)
    // 注入自定义过滤器
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
}
