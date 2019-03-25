import focus from './focus'

const install = (Vue) => {
  Vue.directive('focus', focus)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

focus.install = install

export default focus
