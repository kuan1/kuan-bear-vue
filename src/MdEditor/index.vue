<template>
  <div class="md-container">
    <div class="main-container">
      <textarea v-if="hide != 1" class="md-left" :value="input" @input="changeInput"></textarea>
      <div v-if="hide != 2" class="md-right markdown-body" v-html="html"></div>
      <!-- <a-icon @click="changeHide" class="eye" v-if="!isPreview" type="eye"/>
      <a-icon @click="changeHide" class="eye" v-else type="eye"/>-->
    </div>
  </div>
</template>

<script>
// https://github.com/ovenslove/vue-mdEditor/blob/master/src/components/markdown.vue
import marked from '../utils/marked.js'

import 'highlight.js/styles/androidstudio.css'

function prevent(event) {
  if (event.keyCode == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) {
    if (event && event.preventDefault) {
      event.preventDefault();
    } else {
      window.event.returnValue = false;
    }
  }
}

export default {
  props: {
    value: {
      type: String,
    }
  },
  data() {
    return {
      input: this.value,
      hide: 0
    }
  },
  computed: {
    html() {
      return marked(this.input || '')
    }
  },
  watch: {
    value(value) {
      this.input = value
    }
  },
  mounted() {
    document.addEventListener('keydown', prevent)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', prevent)
  },
  methods: {
    changeInput(e) {
      this.input = e.target.value
      // this.$emit('input', this.input)
      this.$emit('change', this.input)
    },
    changeHide() {
      this.hide = this.hide === 2 ? 0 : this.hide + 1
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
  position: relative;
  min-height: 550px;
  &:hover {
    .eye {
      display: block;
    }
  }
}
.eye {
  position: absolute;
  top: 4px;
  left: 10px;
  color: #999;
  display: none;
  cursor: pointer;
}
.main-container {
  min-height: 550px;
  display: flex;
  line-height: 1.5;
}
.md-left {
  flex: 1;
  background: #333;
  padding: 20px 10px;
  color: #ccc;
  line-height: 1.5;
  font-size: 16px;
}
.md-right {
  flex: 1;
  padding: 20px 10px;
  font-size: 16px;
}
</style>
