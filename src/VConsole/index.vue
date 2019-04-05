<template>
</template>

<script>
import VConsole from 'vconsole'

export default {
  data() {
    return {
      vConsole: ''
    }
  },
  watch: {
    "$route.query.vconsole"(e) {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destoryConsole()
  },
  methods: {
    init() {
      if (!this.$route.query.vconsole) {
        this.destoryConsole()
      } else {
        this.vConsole = new VConsole()
      }
    },
    destoryConsole() {
      if (this.vConsole) {
        this.vConsole.destroy()
        this.vConsole = ''
      }
    }
  }
}
</script>

<style>
</style>
