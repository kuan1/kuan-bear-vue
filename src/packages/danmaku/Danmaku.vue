<template>
  <div v-show="visible" class="danmaku-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      time: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        visible: false,
        width: 0,
        tempData: [],
        timers: [],
        itemHeight: 0,
        speed: 1000
      }
    },
    watch: {
      data() {
        this.$nextTick(this.initDanmaku)
      }
    },
    methods: {
      getRows({$el}) { // 获取行数， 计算速度
        this.itemHeight = $el.clientHeight
        return Math.floor(this.$el.clientHeight / this.itemHeight)
      },
      setAnimate({length, children, index, rows}) {
        const {$el} = children[index]
        const transform = `translate3d(-${(this.width + $el.clientWidth)}px, 0, 0)`
        $el.style['-webkit-transform'] = $el.style.transform = transform
        // $el.style.top = `${(index % rows) * this.itemHeight}px`
        $el.style.top = `${(Math.floor(Math.random() * rows)) * this.itemHeight}px`

        if (index >= length - 1) {
          this.timers[length] = window.setTimeout(() => {
            this.initDanmaku()
          }, this.time * 1000)
          return
        }

        this.timers[index] = window.setTimeout(() => {
          this.setAnimate({
            length,
            children,
            index: index + 1,
            rows
          })
        }, (this.time / rows) * 1000)
      },
      reset(children, len) {
        return new Promise(resolve => {
          this.visible = false
          for (let i = 0; i < len; i++) {
            const {$el} = children[i]
            $el.style['-webkit-transform'] = $el.style.transform = 'translateX(100%)'
          }
          this.timers[length] = window.setTimeout(() => {
            this.visible = true
            resolve()
          }, 100)
        })
      },
      async initDanmaku() {
        this.clearTimer()
        if (this.data.length === 0) {
          return
        }
        const children = this.$children.sort((a, b) => a - b)
        this.width = this.$el.clientWidth || document.documentElement.clientWidth
        const len = children.length
        await this.reset(children, len)
        if (!len) return
        const rows = this.getRows(children[0])
        this.setAnimate({
          index: 0,
          children,
          length: len,
          rows
        })
      },
      clearTimer() {
        this.timers.forEach(item => {
          if (item) {
            clearTimeout(this.timer)
          }
        })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initDanmaku()
      })
    },
    beforeDestroy() {
      this.clearTimer()
    }
  }
</script>

<style lang="scss" scoped>
  .danmaku-container {
    width: 100%;
    position: relative;
    height: 200px;
    overflow-x: hidden;
  }
</style>
