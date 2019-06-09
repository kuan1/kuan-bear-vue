import copy from './copy'
import showClass from './showClass'
import focus from './focus'
import drag from './drag'

const install = (Vue) => {
  Vue.use(copy)
  Vue.use(showClass)
  Vue.use(focus)
  Vue.use(drag)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
}

export default {
  install
}
