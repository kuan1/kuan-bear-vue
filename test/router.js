import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = []

function requireAll(r) {
  return r.keys().map(key => {
    const k = key.replace('./', '').replace('/index.vue', '')
    routes.push({
      path: `/${k}`.toLowerCase(),
      component: r(key).default
    })
  })
}

requireAll(require.context('./view', true, /index\.vue/))

export {
  routes
}

const router = new Router({
  mode: 'hash',
  routes
})

export default router
