import copy from './copy'
import showClass from './showClass'
import focus from './focus'

const install = (Vue) => {
  Vue.use(copy)
  Vue.use(showClass)
  Vue.use(focus)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
}

export default {
  install
}
