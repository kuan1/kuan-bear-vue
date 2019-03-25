import copy from './copy'

const install = function(Vue) {
  Vue.directive('copy', copy)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.clipboard = copy
  Vue.use(install); // eslint-disable-line
}

copy.install = install

export default copy
