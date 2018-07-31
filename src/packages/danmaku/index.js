// 虚拟弹幕,一次拿到所有数据
import Danmaku from './Danmaku'
import DanmakuItem from './DanmakuItem'

const install = (Vue) => {
  Vue.component('danmaku', Danmaku)
  Vue.component('danmaku-item', DanmakuItem)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Danmaku,
  DanmakuItem
}

export default {
  Danmaku,
  DanmakuItem,
  install
}
