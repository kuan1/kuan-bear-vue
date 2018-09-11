import showClass from './show-class'

const install = (Vue) => {
  Vue.directive('show-class', showClass)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

showClass.install = install

export default showClass
