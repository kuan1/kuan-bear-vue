<template>
  <div>
    <test></test>
  </div>
</template>

<script>
  import Test from './packages/BatchSwiper/Demo'
  export default {
    data() {
      return {
        visible: false,
        money: 1345666
      }
    },
    methods: {
      test() {
      }
    },
    mounted() {
    },
    components: {
      Test
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
