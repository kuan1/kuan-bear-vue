<template>
  <div class="full">
    <div class="dplayer-container" ref="player"></div>
    <div v-if="poster && posterIsShow" @click="play" class="cover-wraper" style="z-index: 10000">
      <img v-if="poster" class="poster" :src="poster" alt="poster">
    </div>

    <img
      @click="play"
      v-if="!isPlay && (src || quality.length)"
      class="play-btn fadeIn animated"
      src="./play_icon.png"
    >

    <div v-if="label && posterIsShow" class="video-label center-flex">0元任选</div>
  </div>
</template>

<script>
import 'dplayer/dist/DPlayer.min.css'

export default {
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
      posterIsShow: true,
      isPlay: false
    }
  },
  computed: {
    quality() { // 多
      const names = {
        FD: '流畅',
        LD: '标清',
        SD: '高清'
      }
      const urls = [...this.urls].reverse()
      return urls.map(item => ({
        url: item.play_url,
        name: names[item.definition] || item.definition || item.name,
      }))
    }
  },
  watch: {
    urls() {
      this.$nextTick(this.init)
    }
  },
  mounted() {
    window.Hls = require('hls.js');
    this.DPlayer = require('dplayer')
    this.init()
  },
  beforeDestroy() {
    if (this.dp) {
      this.dp.destroy()
    }
  },
  methods: {
    init() {
      if (!this.src && !this.quality.length) return
      const urlObj = this.src ? { url: this.src } : { quality: this.quality }
      this.dp = new this.DPlayer({
        container: this.$refs.player,
        preload: 'metadata',
        autoplay: false,
        video: {
          ...urlObj,
          defaultQuality: 0,
          pic: this.poster,
          thumbnails: this.poster
        },
        // screenshot: true, // 截图
      });
      this.dp.on('ended', () => {
        this.$emit('ended')
        this.posterIsShow = true
        this.isPlay = false
      });
      this.dp.on('play', () => {
        this.$emit('play')
        this.isPlay = true
        this.posterIsShow = false
      });
      this.dp.on('pause', () => {
        this.posterIsShow = false
        console.log(143214)
        this.isPlay = false
      });
    },
    play() {
      if (this.dp) {
        this.dp.play()
      }
    },
    pause() {
      if (this.dp) {
        this.dp.pause()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.el-popup-parent--hidden {
  .cover-wraper {
    z-index: 1 !important;
  }
  .play-btn {
    z-index: 1 !important;
  }
}
.full {
  width: 100%;
  height: 100%;
  position: relative;
}
.dplayer-container {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
}
.cover-wraper {
  z-index: 10000 !important;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  .poster {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    background-color: #eee;
  }
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
</style>

<style lang="scss">
.dplayer-bar-preview {
  display: none !important;
}
.dplayer-container .dplayer-setting {
  display: none !important;
}
</style>
