<template>
  <transition name="mint-indicator">
    <div class="mint-indicator" v-show="visible">
      <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="mint-indicator-spin" :size="32"></spinner>
        <span class="mint-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script type="text/babel">
import Spinner from './Spinner';

export default {
  props: {
    text: String
  },
  data() {
    return {
      visible: false
    };
  },
  components: {
    Spinner
  }
};
</script>


<style lang="less">
.mint-indicator {
  .mint-indicator-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.66);
    color: white;
    box-sizing: border-box;
    text-align: center;
    z-index: 8000;
  }
  .mint-indicator-text {
    display: block;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
  }
  .mint-indicator-spin {
    display: inline-block;
    text-align: center;
  }
  .mint-indicator-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 3000;
  }
}

.mint-indicator-enter,
.mint-indicator-leave-active {
  opacity: 0;
}
</style>
