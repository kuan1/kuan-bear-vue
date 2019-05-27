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
// import MdEditor from './MdEditor'
import MyNav from './MyNav'
import SimplePage from './SimplePage'
import Lottery from './Lottery'
import Filtrate from './Filtrate'

// 自定义指令
import directives from './utils/directives'

// 过滤器
import { filters } from 'kuan-utils'

// 其他工具类
import VueMonitor from './utils/VueMonitor'

export {
  VueMonitor,
  // 组件
  QrCode,
  MyVideo,
  HeadRoom,
  PileCard,
  MyList,
  MyDebug,
  VConsole,
  loading,
  toast,
  // MdEditor,
  MyNav,
  SimplePage,
  Lottery,
  Filtrate
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
