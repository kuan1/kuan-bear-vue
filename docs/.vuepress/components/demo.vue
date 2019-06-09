<template>
  <div test-container>
    <div class="logo-header">
      <div class="swing">
        <h1>{{pkg.name}}</h1>
        <p>当前版本{{pkg.version}}</p>
      </div>
    </div>
    <my-list class="list-conainer" @click="showDetail" :data="data"></my-list>
  </div>
</template>

<script>
import { routes } from '../../../demo/router.js'
import pkg from '../../../package.json'

import MyList from '../../../src/MyList'

const nameMap = {
  calendar: '日历',
  'code-container': '代码展示',
  'header-room': '吸顶头部',
  'md-editor': 'markdown编辑器',
  'my-debug': '错误处理',
  'my-video': '视频播放',
  'pile-card': '堆叠卡片',
  'qrcode': '二维码展示组件',
  'loading': '加载中'
}

const data = routes.filter(item => !item.path.includes('test')).map(item => {
  const name = item.path.replace('/', '')
  return {
    name,
    extra: nameMap[name] || name,
    component: item.component
  }
})

export default {
  components: {
    MyList
  },
  data() {
    return {
      data,
      pkg
    }
  },
  methods: {
    showDetail(e) {
      window.location.href = `/guide/${e.name}`
    }
  }
}
</script>

<style lang="'scss">
</style>
