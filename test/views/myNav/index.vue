<template>
  <my-nav :data="computedData"></my-nav>
</template>

<script>
import { MyNav } from '../../../src'
export default {
  components: {
    MyNav
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    computedData() {
      const { data } = this
      const fullPath = this.$route.fullPath
      return data.map(item => {
        const path = `/${item.name}`
        return {
          name: item.extra,
          to: { path },
          active: fullPath === path
        }
      })
    }
  }
}
</script>

<style>
</style>
