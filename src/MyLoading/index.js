import Vue from 'vue'
import Loading from './index.vue'

const Instance = Vue.extend(Loading)

let loading

function show(type) {
  if (typeof window === 'undefined') return
  if (!loading) {
    loading = new Instance({
      el: document.createElement('div')
    })
    document.body.appendChild(loading.$el)
  }
  Vue.nextTick(() => {
    loading.tips = ''
    if (loading.type) {
      loading.type = type
      console.log(loading)
    }
    loading.show()
  })
}

function hide() {
  if (!loading) return
  loading.hide()
}

export default {
  show,
  hide
}
