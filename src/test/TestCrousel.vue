<template>
  <div>
    <h2>测试轮播图片</h2>
    <div class="test">
      <carousel height="200">
        <carousel-item v-for="(item, i) in images" :key="i">
          <img :src="item" />
        </carousel-item>
      </carousel>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          require('../images/1.jpg'),
          require('../images/2.jpg'),
          require('../images/3.jpg'),
          require('../images/4.jpg'),
          require('../images/5.jpg'),
          require('../images/6.jpg'),
          require('../images/7.jpg'),
          require('../images/8.jpg')
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .test {
    background: #eee;
  }
</style>
