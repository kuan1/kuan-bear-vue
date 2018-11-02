<template>
  <div style="width: 70px; height: 70px" class="pre-box">
    <img style="width: 100%; height: 100%" class="small-image" @click="dialogImageUrl = src" :src="src">
    <el-dialog append-to-body :before-close="onClose" :visible="!!dialogImageUrl">
      <img width="100%" :src="dialogImageUrl">
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      props: this.props,
      dialogImageUrl: ''
    }
  },
  methods: {
    onClose() {
      this.dialogImageUrl = ''
    }
  }
}
</script>
<style lang="less" scoped>
.pre-box {
  width: 100%;
  display: inline-block;
}

.small-image {
  display: block;
  margin: 0 auto;
}
</style>
