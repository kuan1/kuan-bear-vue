<template>
  <div :style="{height}" class="pile-container">
    <div :style="{width}" v-if="data.length" class="card-list" :class="{'is-move': startPos}">
      <div
        v-for="(item, index) in data"
        @touchmove.stop="bindMove"
        @touchend="moveEnd"
        @touchstart="moveStart"
        @mousedown="moveStart"
        :key="item.id || index"
        :style="index === data.length - 1 ? style : {}"
        class="card"
      >
        <slot :item="item">
          <span>{{item}}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

const lock = (e) => e.preventDefault()

export default {
  props: {
    data: {
      type: Array,
      default: () => [1, 2, 3]
    },
    width: {
      type: String,
      default: '350px'
    },
    height: {
      type: String,
      default: '500px'
    }
  },
  data() {
    return {
      startPos: '',
      currentPos: '',
      style: {}
    }
  },
  mounted() {
    document.body.addEventListener('mousemove', this.bindMove)
    document.body.addEventListener('mouseup', this.moveEnd)
  },
  beforeDestory() {
    document.body.removeEventListener('mousemove', this.bindMove)
    document.body.removeEventListener('mouseup', this.moveEnd)
  },
  methods: {
    resetData() {
      const { data } = this
      const d = data.unshift(data.pop())
      this.$emit('udpate:data', d)
    },
    lockScroll() {
      document.body.addEventListener('touchstart', lock, { passive: false })
    },
    removeLock() {
      document.body.removeEventListener('touchstart', lock, { passive: false })
    },
    // 手指按下
    moveStart(e) {
      const { targetTouches } = e
      if (targetTouches && targetTouches.length !== 1) return
      this.lockScroll()
      const { clientX, clientY } = targetTouches ? targetTouches[0] : e
      this.startPos = { clientX, clientY }
    },
    // 手指滑动
    bindMove(e) {
      if (!this.startPos) return
      const { targetTouches } = e
      if (targetTouches && targetTouches.length !== 1) return
      const { clientX, clientY } = targetTouches ? targetTouches[0] : e
      this.currentPos = { clientX, clientY }
      const x = `${clientX - this.startPos.clientX}px`
      const y = `${clientY - this.startPos.clientY}px`
      this.style = {
        transform: `translate(${x}, ${y})`,
        '-webkit-transform': `translate(${x}, ${y})`
      }
      return false
    },
    // 手指抬起
    moveEnd() {
      if (!this.startPos) return
      this.removeLock()
      const { startPos, currentPos } = this
      if (Math.abs(startPos.clientX - currentPos.clientX) > 70 || Math.abs(startPos.clientX - currentPos.clientX) > 70) {
        this.resetData()
      }
      this.startPos = ''
      this.$nextTick(() => {
        this.style = {
          transform: `translate(0, 0)`,
          '-webkit-transform': `translate(0, 0)`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pile-container {
  height: 500px;
  max-height: 85vh;
  padding-bottom: 30px;
}
.card-list {
  width: 350px;
  height: 100%;
  max-width: 90%;
  max-height: 75%;
  position: relative;
  z-index: 1000;
  margin: 30px auto 0;
}
.pile-container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}
.is-move .card {
  transition: none;
  cursor: move;
}
.card {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-origin: bottom center;
  opacity: 0;
  transition: 0.5s;
  user-select: none;
  &:last-child {
    opacity: 1;
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
  }
  &:nth-last-child(2) {
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
    opacity: 0.95;
    transform: scale(0.94) translate(0, 14px);
  }
  &:nth-last-child(3) {
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
    opacity: 0.95;
    transform: scale(0.88) translate(0, 26px);
  }
}
</style>
