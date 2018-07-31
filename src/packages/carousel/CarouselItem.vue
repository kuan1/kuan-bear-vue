<template>
  <div class="carousel-item">
    <slot>默认内容</slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .carousel-item {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>

