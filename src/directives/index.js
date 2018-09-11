import copy from './copy'
import showLass from './show-class'
import focus from './focus'

const install = (Vue) => {
  Vue.use(copy)
  Vue.use(showLass)
  Vue.use(focus)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install); // eslint-disable-line
}

export default {
  install
}
