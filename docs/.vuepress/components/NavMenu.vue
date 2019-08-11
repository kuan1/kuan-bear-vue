<template>
  <div class="test-nav-menu">
    <nav-menu active="幻熊科技" :data="data"></nav-menu>
  </div>
</template>

<script>
import NavMenu from '../../../src/NavMenu'

const data = [
  {
    path: '/',
    name: '首页',
    redirect: '幻熊科技',
    children: [
      {
        path: '/home',
        name: '幻熊科技',
        icon: 'home'
      },
      {
        path: '/home',
        name: '幻熊科技2',
        icon: 'home',
        children: [
          {
            path: '/test1',
            name: 'test1',
          },
          {
            path: '/test2',
            name: 'test2',
          },
          {
            path: '/test3',
            name: 'test3',
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    name: '登录页',
  },
  {
    name: '重定向',
    path: '*',
    redirect: { name: '幻熊科技' }
  }
]

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.test-nav-menu {
  background: #f0f2f5;
  height: 100vh;
}
</style>
