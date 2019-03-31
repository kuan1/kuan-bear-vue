<template>
  <code-container :html="html" />
</template>

<script>
import CodeContainer from '../../../src/CodeContainer'

export default {
  components: {
    CodeContainer
  },
  data() {
    return {
      html: `
  <pre>
    <code>
      const fs = require('fs')
      const axios = require('axios')
      const cheerio = require('cheerio')

      const baseUrl = 'https://pixabay.com'

      let page = 1

      const url = 'https://pixabay.com/images/search/nature/?cat=science'
    </code>
  </pre>
`
    }
  }
}
</script>

<style>
</style>
