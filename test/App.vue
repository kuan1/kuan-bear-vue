<template>
  <div class="test-container">
    <my-list v-if="$route.path === '/'" @click="toDetail" title="我的组件" :data="data"></my-list>
    <router-view v-else></router-view>

    <button class="back-home" @click="backHome">
      <i class="iconfont icon-home"></i>
    </button>

    <v-console />
  </div>
</template>

<script>
import { MyList, VConsole } from '../src'
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
  'loading': '加载中'
}

const data = routes.map(item => {
  const name = item.path.replace('/', '')
  return {
    name,
    extra: nameMap[name] || name,
    component: item.component
  }
})

export default {
  components: {
    MyList,
    VConsole
  },
  data() {
    return {
      data
    }
  },
  methods: {
    toDetail(item) {
      this.$router.push(item.name)
    },
    backHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss">
.test-container {
  max-width: 500px;
  background: #e7e7ef;
  margin: 0 auto;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
}
.back-home {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  border: none;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    .iconfont {
      color: #999;
      border-color: #999;
    }
  }
  .iconfont {
    color: #ccc;
    font-size: 20px;
  }
}
</style>
