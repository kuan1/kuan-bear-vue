<template>
  <div>
    <!--<test1></test1>-->
    <test-carousel></test-carousel>
  </div>
</template>

<script>
  import Test1 from './test/test1'
  import TestCarousel from './test/TestCrousel'
  export default {
    components: {
      Test1,
      TestCarousel
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
