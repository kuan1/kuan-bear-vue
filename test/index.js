import Vue from 'vue'
import bearVue from '../src'

import App from './App.vue'

Vue.use(bearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
