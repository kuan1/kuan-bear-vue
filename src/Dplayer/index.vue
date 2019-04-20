<template>
  <div class="full dplayer-container">
    <dplayer v-if="src || urls.length || poster" :label="label" ref="dplayer" :urls="urls" :src="src" :poster="poster" />
  </div>
</template>

<script>
import Dplayer from './Dplayer.vue'

export default {
  components: {
    Dplayer
  },
  props: {
    urls: {
      type: Array,
      default: () => []
    },
    src: {
      type: String,
      default: ''
    },
    poster: {
      type: String, // pointer主动显示播放按钮，所以添加一个图片封面
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isPlay: false
    }
  },
  methods: {
    play() {
      const { dplayer } = this.$refs
      if (!dplayer) return
      this.$refs.dplayer.play()
    },
    pause() {
      const { dplayer } = this.$refs
      if (!dplayer) return
      this.$refs.dplayer.pause()
    }
  }
}
</script>

<style style="scoped" lang="scss">
.full {
  background-color: #f5f5f5;
  position: relative;
  .play-btn {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 70px;
    z-index: 10000;
  }
}
.video-label {
  width: 100px;
  height: 38px;
  background: linear-gradient(
    90deg,
    rgba(255, 29, 65, 1),
    rgba(250, 32, 145, 1)
  );
  border-radius: 8px 0px 11px 0px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10003;
  font-size: 20px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>
