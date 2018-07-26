import Vue from 'vue'

import App from './App'

import BearVue from './index'

Vue.use(BearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
