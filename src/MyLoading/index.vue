<template>
  <div class="loading-container" v-if="visible">
    <div class="animated fadeIn">
      <loading-monitor v-if="!tips" :type="type"/>
      <div v-else class="tips" v-html="tips"></div>
    </div>
  </div>
</template>
<script>
import LoadingMonitor from './LoadingMonitor/index.vue'

function preventDefault(e) {
  e.preventDefault()
}

export default {
  components: {
    LoadingMonitor
  },
  props: {
    tips: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'Dots'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
      document.body.addEventListener('touchmove', preventDefault)
    },
    hide() {
      this.visible = false
      document.body.removeEventListener('touchmove', preventDefault)
    }
  }
}
</script>

<style lang="scss" scoped>
$loading-color: rgba(0, 0, 0, 0.7);
.loading-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  .tips {
    padding: 15px 25px;
    background-color: $loading-color;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.3;
    color: white;
    text-align: center;
    word-break: break-all;
    &.loading {
      background: transparent;
      color: $loading-color;
    }
  }
}
.animated {
  animation-duration: 0.3s;
}
.animated.fadeIn {
  animation-name: fadeIn;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

