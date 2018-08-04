<template>
  <audio v-if="src" :src="src" autoplay></audio>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        src: ''
      }
    }
  }
</script>
