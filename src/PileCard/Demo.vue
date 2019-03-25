<template>
  <pile-card :data.sync="data" />
</template>

<script>
import PileCard from './index.vue'

export default {
  components: {
    PileCard
  },
  data() {
    return {
      data: [1, 2, 3, 4]
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>

<style>
</style>
