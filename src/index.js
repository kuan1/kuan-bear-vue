import Vue from 'vue'

import App from './App'

import kuanBearVue from './kuan-bear-vue'

Vue.use(kuanBearVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
