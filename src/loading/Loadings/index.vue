<template>
  <component :is="dataType" />
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
  },
  data() {
    return {
      dataType: this.type
    }
  },
  methods: {
    show(type = 'Bounce') {
      this.dataType = type
    }
  }
}
</script>

<style>
</style>
