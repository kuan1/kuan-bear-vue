import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = []

function requireAll(r) {
  return r.keys().map(key => {
    const k = key.replace('./', '').replace('/index.vue', '')
    routes.push({
      path: `/${k}`
        .replace(/([A-Z])/g, '-$1')
        .replace(/^([A-Z])/g, '')
        .toLowerCase(),
      component: r(key).default
    })
  })
}

requireAll(require.context('./views', true, /index\.vue/))

export { routes }

console.log(routes)

const router = new Router({
  mode: 'hash',
  routes
})

export default router
