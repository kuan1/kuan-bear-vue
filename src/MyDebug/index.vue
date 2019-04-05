<template>
  <div class="debug-outer">
    <div class="debug-container">
      <button @click="changeConsole" :class="$route.query.vconsole ? 'danger' : ''" class="k-button">{{!$route.query.vconsole ? '显示' : '隐藏'}}vconsole</button>
      <button @click="clear" class="k-button">清空缓存</button>
      <button @click="toHome" class="k-button primary">返回首页</button>

      <div class="tip">需要引入v-console组件</div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    clear() {
      localStorage.clear()
      alert('清空缓存成功')
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
    changeConsole() {
      if (this.$route.query.vconsole) {
        this.$router.replace({ query: { vconsole: '' } })
      } else {
        this.$router.replace({ query: { vconsole: 1 } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.debug-outer {
  min-height: 100vh;
  background: #f7f7f7;
  overflow: hidden;
}
.debug-container {
  width: 350px;
  max-width: 90%;
  margin: 0 auto;
  .tip {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    line-height: 3;
    color: #999;
    font-size: 12px;
    box-sizing: border-box;
  }
}
.k-button {
  display: block;
  width: 100%;
}
</style>
