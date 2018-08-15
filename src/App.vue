<template>
  <div>
    <!--<h1>测试</h1>-->
    <test-upload-ali></test-upload-ali>
  </div>
</template>

<script>
  import TestUploadAli from './test/TestUploadAli'

  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
    },
    mounted() {
    },
    components: {
      TestUploadAli
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
