<template>
  <div class="test-container">
    <my-list v-if="$route.path === '/'" @click="toDetail" title="我的组件" :data="data"></my-list>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import { MyList } from '../src'
import { routes } from './router.js'

const nameMap = {
  calendar: '日历',
  'code-container': '代码展示',
  'header-room': '吸顶头部',
  'md-editor': 'markdown编辑器',
  'my-debug': '错误处理',
  'my-video': '视频播放',
  'pile-card': '堆叠卡片',
  'qrcode': '二维码展示组件',
  'vconsole': 'vconsole'
}

const data = routes.map(item => {
  const name = item.path.replace('/', '')
  return {
    name,
    extra: nameMap[name],
    component: item.component
  }
})

export default {
  components: {
    MyList
  },
  data() {
    return {
      data
    }
  },
  methods: {
    toDetail(item) {
      this.$router.push(item.name)
    }
  }
}
</script>

<style lang="scss">
.test-container {
  max-width: 500px;
  background: #e7e7ef;
  margin: 10px auto;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
}
</style>
