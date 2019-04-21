<template>
  <div class="test-container">
    <div v-if="$route.path === '/'">
      <div class="logo-header">
        <div class="swing">
          <h1>{{pkg.name}}</h1>
          <p>当前版本{{pkg.version}}</p>
        </div>
      </div>
      <my-list class="list-conainer" @click="toDetail" :data="data"></my-list>
    </div>
    <div v-else>
      <my-nav :data="data" />
      <div class="test-wrap">
        <router-view></router-view>
      </div>
    </div>

    <v-console />
  </div>
</template>

<script>
import { MyList, VConsole } from '../src'
import { routes } from './router.js'
import pkg from '../package.json'
import MyNav from './views/myNav'

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
    VConsole,
    MyNav
  },
  data() {
    return {
      data,
      pkg
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
@keyframes swing {
  0% {
    transform: perspective(400px) rotateY(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotateY(-40deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotateY(25deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateY(-10deg);
  }
  100% {
    transform: perspective(400px);
  }
}
.swing {
  animation: swing 2s;
}
.test-container {
  background: #f6f6f6;
}
.logo-header {
  line-height: 2;
  padding: 20px 0;
  text-align: center;
  background: white;
}
.test-wrap {
  max-width: 500px;
  background: #e7e7ef;
  margin: 20px auto;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
}
.list-conainer {
  width: 95%;
  margin: 20px auto;
}
</style>
