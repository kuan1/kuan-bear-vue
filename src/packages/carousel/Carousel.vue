<template>
  <div class="carousel-container">
    <slot>carousel组件中需要放置carousel-item组件</slot>
  </div>
</template>

<script>
  export default {
    name: 'carousel',
    props: {
      width: {
        type: [String, Number],
        default: '100%' // 100 || 100px || 100%(默认px)
      },
      height: {
        type: [String, Number],
        default: '200px' // 100 || 100px || 100%(默认px)
      }
    },
    computed: {
      w() {
        const width = this.width.toString()
        if (width === '100%') {
          if (!this.$el) return document.documentElement.clientWidth
          const parent = this.$el.parentNode.clientWidth
          if (!parent) return document.documentElement.clientWidth
          return parent.clientWidth
        } else if (/^\d*$/.test(width)) {
          return `${width}px`
        }
        return width
      },
      h() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-container {
    position: relative;
  }
</style>
