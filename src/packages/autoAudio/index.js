import Vue from 'vue'

const Audio = Vue.extend(require('./AutoAudio.vue').default)
let instance

export default {
  play(src) {
    if (!instance) {
      instance = new Audio({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    instance.src = src
  },

  stop() {
    if (instance) {
      instance.src = ''
    }
  }
}
