<template>
  <div class="test-container">
    <head-room>
      <h2>这里是头部🌹</h2>
    </head-room>
    <my-table :data="data" :columns="columns"></my-table>
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
      data: [
        { id: 1, name: '哈哈', age: 10 },
        { id: 1, name: '哈哈1', age: 10 },
        { id: 1, name: '哈哈2', age: 10 }
      ],
      columns: [
        { prop: 'id', label: 'ID' },
        { prop: 'name', label: '名字' },
        { prop: 'age', label: '年龄' }
      ],
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
