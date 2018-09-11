<template>
  <div>
    <!--<h2>kuan-bear-vue</h2>-->
    <head-room></head-room>
  </div>
</template>

<script>
  import HeadRoom from './packages/headRoom/Demo'

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
      HeadRoom
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
