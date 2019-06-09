<template>
  <lottery :total="8" :index="index" :bg="require('./images/lottery/bg.png')" :go-bg="require('./images/lottery/go.png')" @click="start" @end="end" />
</template>

<script>
import Lottery from '../../../src/Lottery'
import toast from '../../../src/toast'

export default {
  components: {
    Lottery
  },
  data() {
    return {
      index: -1
    }
  },
  methods: {
    start() {
      this.index = Math.floor(Math.random() * 8)
    },
    end() {
      toast(`选中下标${this.index}`)
    }
  }
}
</script>

<style>
</style>
