<template>
  <div ref="code" class="code" v-html="html"></div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/androidstudio.css'

export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    html() {
      this.init()
    }
  },
  methods: {
    init() {
      const blocks = this.$refs.code.querySelectorAll('pre code');
      blocks.forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.code {
  line-height: 1.2;
}
</style>
