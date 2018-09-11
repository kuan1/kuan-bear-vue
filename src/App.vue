<template>
  <div>
    <h2>kuan-bear-vue</h2>
    <h3>{{money | formatCurrency}}</h3>
    <el-button type="primary" @click="test">测试</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        money: 1345666
      }
    },
    methods: {
      test() {
        this.$http({
          url: 'https://api.luzhongkuan.cn/api/location'
        }).then(res => {
          console.log(111, res)
        })
      }
    },
    mounted() {
    },
    components: {
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
