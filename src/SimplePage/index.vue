<template>
  <div class="simple-page">
    <header class="simple-header">
      <h2 class="title">{{title}}</h2>
      <p class="sub" v-if="sub">{{sub}}</p>
    </header>
    <div class="content">
      <slot></slot>
    </div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
