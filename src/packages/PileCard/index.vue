<template>
  <div class="pile-container">
    <div :style="{width, height}" v-if="data.length" class="card-list">
      <div v-for="(item, index) in data" @touchmove.stop="bindMove" @touchend="moveEnd" @mouseup="moveEnd" @touchstart="moveStart" @mousedown="moveStart" :key="item.name" :style="index === data.length - 1 ? {...style, height} : {height: height}" class="card">
        <slot :data="item">
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
  },
  beforeDestory() {
    document.body.removeEventListener('mousemove', this.bindMove)
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
      this.style = {
        transform: `translate(0, 0)`,
        '-webkit-transform': `translate(0, 0)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
  width: 350px;
  max-width: 90%;
  height: 500px;
  position: relative;
  z-index: 1000;
  padding-bottom: 30px;
  margin: 30px auto 0;
}
.pile-container {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}
.card {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  transform-origin: bottom center;
  opacity: 0;
  transition: 0.1s;
  user-select: none;
  cursor: move;
  &:last-child {
    opacity: 1;
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
  }
  &:nth-last-child(2) {
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
    opacity: 0.9;
    transform: scale(0.94) translate(0, 0.26rem);
  }
  &:nth-last-child(3) {
    box-shadow: 0px 10px 30px 0px rgba(170, 143, 113, 0.3);
    opacity: 0.8;
    transform: scale(0.88) translate(0, 0.52rem);
  }
}
</style>
