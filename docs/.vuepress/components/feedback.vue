<template>
  <div>
    <div class="test-container">
      <button v-for="item in types" :key="item" @click="loading(item)" class="k-btn">{{item}} loading</button>
    </div>
    <div class="test-container">
      <button @click="toast" class="k-btn">toast</button>
    </div>
  </div>

</template>

<script>
import loading from '../../../src/loading'
import toast from '../../../src/toast'

export default {
  data() {
    return {
      types: [
        'Bounce',
        'Dots',
        'Spinner'
      ]
    }
  },
  methods: {
    loading(type) {
      loading.show(type)
      setTimeout(() => {
        loading.hide()
      }, 2000)
    },
    toast() {
      toast('提示内容')
    }
  }
}
</script>

<style>
</style>
