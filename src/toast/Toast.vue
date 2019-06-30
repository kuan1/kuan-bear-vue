<template>
  <div class="toast-container" v-if="visible && tip">
    <div class="animated fadeIn">
      <div class="tip" v-html="tip"></div>
    </div>
  </div>
</template>
<script>
function preventDefault(e) {
  e.preventDefault()
}

export default {
  props: {
    text: {
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
      visible: false,
      tip: this.text
    }
  },
  methods: {
    show(tip = '') {
      this.tip = tip
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
.toast-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  .tip {
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

