<template>
  <div class="test-container">
    <head-room>
      <h2>这里是头部🌹</h2>
    </head-room>
    <h2>测试页面</h2>
    <button @click="test">点击</button>

  </div>
</template>

<script>
import { HeadRoom } from '../src'

export default {
  components: {
    HeadRoom
  },
  data() {
    return {
      url: 'http://www.baidu.com'
    }
  },
  methods: {
    test() {
      this.url = 'http://www.baidu.com?a=1'
    }
  }
}
</script>

<style lang="less">
.test-container {
  height: 2000px;
}
</style>
