<template>
  <div class="code-container">
    <span @click="copy" class="copy-btn">复制</span>
    <div ref="code" class="code" v-html="html"></div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'highlight.js/styles/androidstudio.css'
import { copy } from 'kuan-utils'
import { toast } from 'kuan-request'

export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  watch: {
    html() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    copy() {
      const reg = /<\/?.+?\/?>/g
      const str = this.html.replace(reg, '')
      copy(str)
      toast('复制成功')
    },
    init() {
      const blocks = this.$refs.code.querySelectorAll('pre code');
      blocks.forEach((block, num) => {
        hljs.highlightBlock(block)
        let i = 1
        const n = (m) => `<em class="line-label">${m > 9 ? m : '0' + m}</em>`
        block.innerHTML = `<div class="line">${n(i)}${block.innerHTML.replace(/\n/g, function (word) {
          i += 1
          return `</div><div class="line">${n(i)}`
        })}</div>`
      })
    }
  }
}
</script>

<style lang="scss">
.hljs {
  .line {
    padding: 0;
    line-height: 1.4;
    .line-label {
      color: #999;
      height: 100%;
      padding: 0 0.8rem 0 0.2rem;
      user-select: none;
    }
  }
}
</style>


<style lang="scss" scoped>
.code-container {
  position: relative;
  &:hover {
    .copy-btn {
      opacity: 1;
    }
  }
  .copy-btn {
    position: absolute;
    right: 10px;
    top: 2px;
    font-size: 14px;
    color: #999;
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer;
  }
}
</style>
