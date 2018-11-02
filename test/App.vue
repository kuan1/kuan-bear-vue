<template>
  <div>
    <h2>测试页面</h2>
    <button @click="test">点击</button>

    <div>
      <my-video src="https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4"></my-video>
    </div>
  </div>
</template>

<script>
import { MyVideo } from '../src'

export default {
  components: {
    MyVideo
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

<style>
</style>
