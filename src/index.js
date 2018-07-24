import Vue from 'vue'

import App from './App'

import kuanBearVue from './packages/index'

Vue.use(kuanBearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
