<template>
  <audio v-if="src" :src="src" autoplay="autoplay"></audio>
</template>

<script>
  export default {
    props: {
      autoplay: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        visible: false,
        src: ''
      }
    }
  }
</script>
