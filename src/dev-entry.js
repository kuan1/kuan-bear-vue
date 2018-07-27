import Vue from 'vue'

import App from './App'

import BearVue from './index'
import request from './utils/createApi'

Vue.prototype.$http = request

Vue.use(BearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
