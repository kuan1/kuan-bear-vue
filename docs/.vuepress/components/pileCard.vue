<template>
  <pile-card :data.sync="data">
    <template #default="{item}">
      <h2 class="full">{{item.id}}</h2>
    </template>
  </pile-card>
</template>

<script>
import PileCard from '../../../src/PileCard/index.vue'

export default {
  components: {
    PileCard
  },
  data() {
    return {
      data: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]
    }
  },
  mounted() {
    console.log(this.data)
  }
}
</script>

<style lang="scss" scoped>
.full {
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
