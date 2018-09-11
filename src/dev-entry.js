import Vue from 'vue'
import ElementUI from 'element-ui'

import BearVue from './index'

import App from './App'

import request from './utils/createApi/demo'

Vue.prototype.$http = request

Vue.use(ElementUI)
Vue.use(BearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
