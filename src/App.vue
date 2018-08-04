<template>
  <div>
    <button @click="play">播放</button>
    <button @click="stop">暂停</button>
    <!--<test1></test1>-->
    <!--<test-danmaku></test-danmaku>-->
    <!--<test-carousel></test-carousel>-->
  </div>
</template>

<script>
  import Test1 from './test/test1'
  import TestCarousel from './test/TestCrousel'
  import TestDanmaku from './test/TestDanmaku'
  import AutoAudio from './packages/autoAudio'

  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      play() {
        const src = 'data:audio/mp3;base64,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'
        AutoAudio.play(src)
      },
      stop() {
        AutoAudio.stop()
      }
    },
    components: {
      Test1,
      TestCarousel,
      TestDanmaku,
    }
  }
</script>


<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<style lang="scss" scoped>
  .test {
    background: #ccc;
  }

  .img {
    width: 100%;
  }
</style>
