<template>
  <div :style="style" class="pre-box">
    <img :style="style" class="small-image" @click="dialogImageUrl = src" :src="src">
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
      },
      style: {
        type: Object,
        default() {
          return {
            width: '70px',
            height: '70px'
          }
        }
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
<style lang="scss" scoped>
  .pre-box {
    width: 100%;
    display: inline-block;
  }

  .small-image {
    display: block;
    margin: 0 auto;
  }
</style>
