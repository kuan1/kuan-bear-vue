<template>
  <div class="loading-container animated fadeIn" v-if="visible">
    <div class="animated fadeIn">
      <loadings :type="dataType" />
    </div>
  </div>
</template>
<script>
import Loadings from './Loadings'

function preventDefault(e) {
  e.preventDefault()
}

export default {
  components: {
    Loadings
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
      visible: false,
      dataType: this.type
    }
  },
  methods: {
    show(type = 'Bounce') {
      this.visible = true
      this.dataType = type
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
  background: rgba(0, 0, 0, 0.5);
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

