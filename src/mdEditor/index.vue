<template>
  <div class="md-container">
    <div class="action">
      <img class="icon" v-if="visible" src="./images/eye-active.png" @click="visible = false">
      <img class="icon" src="./images/eye.png" v-else @click="visible = true">
      <img @click="isPreview = !isPreview" v-if="isPreview" src="./images/preview.png" class="icon" alt="">
      <img class="icon" src="./images/eye.png" v-else @click="isPreview = true">
      <img src="./images/full.png" class="icon" @click="full">
    </div>
    <div class="main-container">
      <textarea v-if="!isPreview" class="md-left" :value="input" @input="changeInput"></textarea>
      <div v-if="isPreview || visible" class="md-right markdown-body" v-html="html"></div>
    </div>
  </div>
</template>

<script>
// https://github.com/ovenslove/vue-mdEditor/blob/master/src/components/markdown.vue
import marked from '../utils/marked.js'
import fullScrren from '../utils/fullScreen.js'

import 'highlight.js/styles/androidstudio.css'

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: this.value,
      visible: true,
      isPreview: false
    }
  },
  computed: {
    html() {
      return marked(this.input)
    }
  },
  watch: {
    value(value) {
      this.input = value
    }
  },
  methods: {
    changeInput(e) {
      this.input = e.target.value
      this.$emit('input', this.input)
    },
    full() {
      fullScrren()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./markdown-body.css";
.md-container {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: white;
  border: 1px solid #eee;
}
.action {
  border-bottom: 1px solid #eee;
  background: #f5f5f5;
  padding: 0 15px;
  .icon {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
}
.main-container {
  min-height: 400px;
  display: flex;
  line-height: 1.5;
}
.md-left {
  flex: 1;
  background: #333;
  padding: 10px;
  color: #ccc;
  line-height: 1.5;
  font-size: 16px;
}
.md-right {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}
</style>
