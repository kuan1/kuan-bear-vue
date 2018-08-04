<template>
  <div :style="{height, width}" class="carousel-item">
    <slot>默认内容</slot>
  </div>
</template>

<script>
  export default {
    computed: {
      height() {
        return `${this.$parent.h}px`
      },
      width() {
        return `${this.$parent.w}px`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

