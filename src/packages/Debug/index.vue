<template>
  <div class="debug-outer">
    <div class="debug-container">
      <div @click="toHome" class="button">返回首页</div>
      <div @click="clear" class="button button-primary">清空缓存</div>
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
  & > div {
    margin: 20px;
  }
}
.button {
  border-radius: 5px;
  display: block;
  outline: 0 none;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  font-size: 18px;
  height: 47px;
  line-height: 47px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  cursor: pointer;
  background: white;
}
.button-primary {
  color: #fff;
  background-color: #108ee9;
  border: 1px solid #108ee9;
}
</style>
