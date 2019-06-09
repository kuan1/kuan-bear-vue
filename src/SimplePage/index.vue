<template>
  <div class="simple-page">
    <header class="simple-header">
      <h2 class="title">{{title}}</h2>
      <p class="sub" v-if="sub">{{sub}}</p>
    </header>
    <div class="content">
      <slot></slot>
    </div>
    <footer class="tip">{{tip}}</footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: document.title
    },
    sub: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.simple-page {
  min-height: 100vh;
  position: relative;
}
.simple-header {
  padding: 40px 0 20px;
  text-align: center;
  line-height: 2;
  .title {
    font-size: 20px;
  }
  .sub {
    color: #999;
    font-size: 14px;
  }
}
.tip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  color: #999;
  font-size: 14px;
  margin: auto;
  text-align: center;
}
</style>
