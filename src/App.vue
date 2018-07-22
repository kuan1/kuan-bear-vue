<template>
  <div>
    <button @click="showIndicator">show indicator</button>

    <button @click="showToast">show toast</button>
  </div>
</template>

<script>
  import Spinner from './packages/indicator/Spinner'

  export default {
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
      Spinner
    }
  }
</script>
