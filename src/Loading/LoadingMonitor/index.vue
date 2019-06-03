<template>
  <component :is="type"/>
</template>

<script>
import Dots from './Dots.vue'
import Spinner from './Spinner.vue'
import Bounce from './Bounce.vue'

export default {
  components: {
    Dots,
    Spinner,
    Bounce
  },
  props: {
    type: {
      type: String,
      default: 'Bounce'
    }
  }
}
</script>

<style>
</style>
