<template>
  <swiper v-if="pages.length" class="batch-swiper" :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, key) in pages" :key="item.id">
      <div
        class="full-content"
        :style="item.background ? {backgroundImage: 'url(' + item.background + ')'} : {}"
      >
        <div class="full-wrapper" :style="wrapperStyle">
          <component
            :isShow="pageIndex === key"
            v-for="(it, i) in item.layers" :is="it.is || 'material'"
            :key="i" :item="it"
            :class="['layer', it.class]"
            :data-test="key"
            :style="{zIndex: i + 100}"></component>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  import Material from './material'
  import FullViewCtrl from './fullview-ctrl'
  import textMaterial from './text-material'

  export default {
    props: {
      horizontal: {
        type: Boolean,
        default: false
      },
      pages: {
        type: Array,
        default() {
          return []
        }
      },
      ratio: {
        type: Number,
        default: 1206 / 750
      },
      config: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      const vm = this
      return {
        wrapperStyle: {},
        pageIndex: 0,
        swiperOption: {
          autoplay: {
            // delay: 3000, // 延迟时间
            // disableOnInteraction: false // 用户操作后不停止播放
          },
          loop: false,
          speed: 500, // 速度
          initialSlide: this.pageIndex, // 默认页数
          direction: 'horizontal', // 方向 horizontal || vertical
          observer: true, // 子元素发生变化自动初始化swiper
          observeParents: true, // 父元素发生变化自动初始化swiper
          on: {
            init() {
              // console.log('初始化成功')
            },
            // slideChange() { // 在这里会造成卡顿
            //   vm.pageIndex = this.realIndex
            // },
            slideChangeTransitionEnd() {
              vm.pageIndex = this.realIndex
            },
            resize() {
              vm.setStyle()
            },
          },
          ...this.config
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      slideTo(page = 1) {
        this.swiper.slideTo(page, 1000, false)
      },
      getStyle(width, height) {
        const targetHeight = width * this.ratio;
        // 横屏，设置长边作为宽
        return (targetHeight < height) ? { width: width, height: targetHeight } : { width: height * this.ratio, height: height };
      },
      setStyle() {
        const winWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const winHeight = document.documentElement.clientHeight || document.body.clientHeight;

        const {width, height} = this.getStyle(winWidth - 10, winHeight - 10);
        this.wrapperStyle = {
          width: `${width}px`,
          height: `${height}px`
        }
      }
    },
    mounted() {
      this.setStyle()
      window.addEventListener('orientationchange', this.setStyle);
    },
    components: {
      swiper,
      swiperSlide,
      Material,
      'fullview-ctrl': FullViewCtrl,
      textMaterial
    }
  }
</script>

<style lang="scss">
  .batch-swiper {
    height: 100vh;
    overflow: hidden;
    .layer {
      position: absolute;
      display: none;
    }
    .swiper-slide-active, .swiper-slide-prev {
      .layer {
        display: block;
      }
    }
    .full-content {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .full-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      &.horizontal {
        transform: rotate(90deg);
      }
    }
  }
</style>
