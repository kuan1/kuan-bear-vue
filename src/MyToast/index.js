import Vue from 'vue'
import Loading from '../MyLoading/index.vue'

const Instance = Vue.extend(Loading)

let loading
let timer

export default (tips = '', time = 1500) => {
  if (typeof window === 'undefined' || !tips) return
  if (!loading) {
    loading = new Instance({
      el: document.createElement('div')
    })
    loading.loading = false
    document.body.appendChild(loading.$el)
  }
  if (timer) clearTimeout(timer)
  Vue.nextTick(() => {
    loading.tips = tips
    loading.show()

    timer = setTimeout(() => {
      loading.hide()
    }, time)
  })
}
