<template>
  <div>
    <code-container :html="`<pre><code>${html}</code></pre>`"/>
    <button @click="copy" class="k-btn k-btn-primary">复制</button>
  </div>
</template>

<script>
import CodeContainer from '../../../src/CodeContainer'

export default {
  components: {
    CodeContainer
  },
  data() {
    return {
      html: `// test
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

const baseUrl = 'https://pixabay.com'

let page = 1

const url = 'https://pixabay.com/images/search/nature/?cat=science'
`
    }
  },
  methods: {
    copy() {
      this.html += this.html
    }
  }
}
</script>

<style>
</style>
