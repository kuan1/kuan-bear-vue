<template>
  <div>
    <button @click="test">点击</button>
  </div>
</template>

<script>
  import Spinner from './packages/indicator/Spinner'

  export default {
    methods: {
      test() {
        this.$indicator.open()

        setTimeout(() => {
          this.$indicator.close()
        }, 2000)
      }
    },
    components: {
      Spinner
    }
  }
</script>
