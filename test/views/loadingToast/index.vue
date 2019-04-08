<template>
  <div class="loading-test center-flex column">
    <button @click="show" class="k-button primary">loading</button>
    <button @click="toast" class="k-button primary">toast</button>
  </div>
</template>

<script>
import { loading, toast } from '../../../src'

export default {
  methods: {
    show() {
      loading.show('加载中...')
      setTimeout(() => {
        loading.hide()
      }, 3000)
    },
    toast() {
      toast('哈哈哈', 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-test {
  min-height: 100vh;
}
</style>
