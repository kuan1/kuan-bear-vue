<template>
  <div>
    <button @click="test">测试http方法</button>
    <hr>

    <button @click="showIndicator">show indicator</button>

    <button @click="showToast">show toast</button>

    <p>
      <input type="text" v-model="value">
      <button v-copy="value">点击复制</button>
    </p>

    <my-code></my-code>

    <circle-bar size="200"></circle-bar>

    <!--<div style="width: 500px; height: 300px;">-->
      <!--<my-video autoplay src="https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4"></my-video>-->
    <!--</div>-->

    <!--<div class="test" v-class="'is-show'" v-for="item in 100" :key="item"></div>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        value: '测试复制内容'
      }
    },
    methods: {
      test() {
        console.log(1234)
        this.$http({
          url: 'http://localhost:8002/api/test'
        })
      },
      showIndicator() {
        this.$indicator.open()
        setTimeout(() => {
          this.$indicator.close()
        }, 2000)
      },
      showToast() {
        this.$toast({
          message: '哈哈哈',
          duration: 30000
        })
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    width: 200px;
    height: 200px;
    background: #ccc;
    margin: 20px;
    transition: 1s;
  }
  .is-show {
    background: red;
  }
</style>
