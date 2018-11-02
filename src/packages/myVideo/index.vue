<template>
  <div class="video-wrap" @click.stop="playHandler">
    <video v-if="src" ref="video" width="100%" class="video" :poster="poster" :src="src" :controls="isPlaying" :autoplay="autoplay" controlsList="nodownload" x-webkit-airplay="true" webkit-playsinline="true" playsinline="true" x5-playsinline="true" preload="none" x5-video-player-type='h5' x5-video-player-fullscreen='true' :muted="muted" @pause="pause" @play="play" @loadedmetadata="loadedmetadata" @timeupdate="timeupdate" @ended="ended"></video>
    <img v-if="!hiddenIcon" class="play-btn" v-show="!isPlaying" src="./images/play_icon.png">
  </div>
</template>

<script>
// https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4
export default {
  name: 'my-video',
  props: {
    src: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    },
    muted: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    hiddenIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    // 切换播放暂停
    playHandler() {
      const { paused } = this.$refs.video
      if (!paused) {
        this.pause()
      } else if (paused) {
        this.play()
      }
    },
    play() { // 有些手机不通过直接行为控制，会报错
      this.$refs.video.play().catch(err => {
        console.log(err)
      })
      const { paused } = this.$refs.video
      if (!paused) {
        this.isPlaying = true
      }
      this.$emit('play')
    },
    pause() {
      this.isPlaying = false
      const { paused } = this.$refs.video
      if (!paused) {
        this.$refs.video.pause()
      }
      this.$emit('pause')
    },
    ended() {
      this.isPlaying = false
      this.$emit('ended')
    },
    loadedmetadata() {
      // 元数据加载完毕
    },
    timeupdate() {
      // 当前播放到 this.$refs.video.currentTime
    }
  }
}
</script>


<style lang="less" scoped>
.video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  // border-radius: 0.2rem;
  background-position: center center;
  background-size: cover;
  .video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    // 隐藏 iOS 的 悬浮在视频中央的播放按钮
    &::-webkit-media-controls-start-playback-button {
      display: none !important;
      -webkit-appearance: none;
    }
  }
  .play-btn {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 40px;
    height: 40px;
    transform: translate3d(0, 0, 0);
  }
}
</style>
