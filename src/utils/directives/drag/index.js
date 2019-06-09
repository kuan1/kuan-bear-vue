import drag from './drag'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(install) // eslint-disable-line
}

drag.install = function(Vue) {
  Vue.directive('drag', drag)
}

export default drag
