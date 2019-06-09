<template>
  <div>
    <button @click="show" class="k-btn k-btn-primary">显示</button>
    <button @click="hide" class="k-btn">隐藏</button>
  </div>
</template>

<script>
import Test from './Test.vue'
import VueMinor from '../../../src/utils/VueManage'

export default {
  data() {
    return {
      monitor: '',
      visible: false
    }
  },
  mounted() {
    this.monitor = new VueMinor(Test)
  },
  methods: {
    show() {
      this.monitor.show()
    },
    hide() {
      this.monitor.hide()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
