import showClass from './class'

const install = (Vue) => {
  Vue.directive('class', showClass)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

showClass.install = install

export default showClass
