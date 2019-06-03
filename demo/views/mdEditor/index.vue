<template>
  <div class="md-test">
    <md-editor v-model="md"></md-editor>
  </div>
</template>

<script>
import MdEditor from '../../../src/MdEditor'

export default {
  components: {
    MdEditor
  },
  data() {
    return {
      md: `## 1234 
#### 1234`
    }
  }
}
</script>

<style lang="scss" scoped>
.md-test {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  padding: 20px;
  box-sizing: border-box;
}
.title {
  line-height: 2;
}
</style>
