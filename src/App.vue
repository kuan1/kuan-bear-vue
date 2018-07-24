<template>
  <div>
    <button @click="showIndicator">show indicator</button>

    <button @click="showToast">show toast</button>

    <p>
      <input type="text" v-model="value">
      <button v-copy="value">点击复制</button>
    </p>


    <div style="width: 500px; height: 300px;">
      <my-video autoplay src="https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4"></my-video>
    </div>

    <div v-for="item in 100" :key="item" v-class="'is-show'" class="test" ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '测试复制内容'
      }
    },
    methods: {
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
    width: 400px;
    height: 400px;
    margin: 20px;
    background: #ccc;
    transition: 3s;
  }
  .is-show {
    background: red;
  }
</style>
