import Vue from 'vue'
import bearVue from '../src'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'

Vue.use(Element)
Vue.use(bearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
