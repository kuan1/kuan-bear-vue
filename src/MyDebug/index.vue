<template>
  <div class="debug-outer">
    <div class="debug-container">
      <button @click="changeConsole" :class="vconsole ? 'k-btn-danger' : ''" class="k-btn">
        {{vconsole ? '显示' : '隐藏'}}vconsole
      </button>
      <button @click="clearStorage" class="k-btn k-btn-danger">清空localStorage</button>
      <button @click="clearCookie" class="k-btn k-btn-danger">清空cookie</button>
      <button @click="toHome" class="k-btn k-btn-primary">返回首页</button>

      <div class="tip">需要引入v-console组件</div>
    </div>
  </div>
</template>

<script>
import vconsole from '../utils/vconsole'

export default {
  data() {
    return {
      vconsole: vconsole.vConsole
    }
  },
  methods: {
    clearStorage() {
      localStorage.clear()
      alert('清空localStorage缓存成功')
    },
    clearCookie() {
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      alert('清空cookie缓存成功')
    },
    toHome() {
      this.$router.push({ path: '/' })
    },
    changeConsole() {
      if (this.vconsole) {
        this.vconsole = vconsole.destroy()
      } else {
        this.vconsole = vconsole.init()
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
  position: relative;
}
.debug-container {
  width: 350px;
  max-width: 90%;
  margin: 0 auto;
  .tip {
    position: absolute;
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
.k-btn {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}
</style>
