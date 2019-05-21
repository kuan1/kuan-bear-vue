<template>
  <lottery
    :total="8"
    :index="index"
    :bg="require('./images/bg.png')"
    :go-bg="require('./images/go.png')"
    @click="start"
    @end="end"
  />
</template>

<script>
import { Lottery, toast } from '../../../src'

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
