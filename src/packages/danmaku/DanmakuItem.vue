<template>
  <div :style="{transition}" class="danmaku-item">
    <slot>默认弹幕</slot>
  </div>
</template>

<script>
  export default {
    props: {
    },
    computed: {
      transition() {
        return `transform ${this.$parent.time}s linear`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .danmaku-item {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(100%);
  }
</style>
