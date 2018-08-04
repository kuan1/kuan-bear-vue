<template>
  <div :style="{height: computedH, width: computedW}" class="carousel-container">
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
    data() {
      return {
        h: 0,
        w: 0
      }
    },
    computed: {
      computedW() {
        const width = this.width.toString()
        return /^\d*$/.test(width) ? `${width}px` : width
      },
      computedH() {
        const height = this.height.toString()
        return /^\d*$/.test(height) ? `${height}px` : height
      }
    },
    methods: {
      getW() {
        const width = this.width.toString()
        if (width === '100%') {
          let client
          if (!this.$el) {
            client = document.documentElement.clientWidth
            return client
          }
          return this.$el.parentNode.clientWidth || client
        } else {
          return parseInt(width)
        }
      },
      getH() {
        return this.$el ? this.$el.clientHeight : 200
      },
      init() {
        this.w = this.getW()
        this.h = this.getH()
        const len = this.$children.length
        for (let i = 0; i < len; i++) {
          const {$el} = this.$children[i]
          $el.style.transform = `translate3d(,0,0)`
        }
      }
    },
    mounted() {
      this.$nextTick(this.init)
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-container {
    position: relative;
    overflow: hidden;
  }
</style>
