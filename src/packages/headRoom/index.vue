<template>
  <div :style="{height: `${height}px`}" class="room-container">
    <div :style="{height: `${height}px`}" class="room" ref="room">
      <transition name="room">
        <slot v-if="visible"></slot>
      </transition>
    </div>
  </div>
</template>

<script>
import { throttle } from 'kuan-utils'

export default {
  props: {
    height: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      visible: true,
      ticking: false,
      oldScrollTop: 0
    }
  },
  methods: {
    init() {
      throttle(() => {
        const height = this.$el.clientHeight || 40
        const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
        if (scrollTop < height) {
          this.visible = true
          return
        }
        this.visible = this.oldScrollTop > scrollTop

        this.oldScrollTop = scrollTop
      }, 16.7)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('scroll', this.init)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.init)
  }
}
</script>

<style lang="less" scoped>
.room {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}

.room-enter-active,
.room-leave {
  opacity: 1;
  transform: translate3D(0, 0, 0);
  transition: opacity 0.6s, transform 0.6s;
}

.room-enter,
.room-leave-to {
  opacity: 0.5;
  transform: translate3D(0, -100%, 0);
  transition: opacity 0.6s, transform 0.6s;
}
</style>
