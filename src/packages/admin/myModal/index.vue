<template>
  <el-dialog :width="width" :visible.sync="visible" :title="title" @before-close="visible = false">
    <template v-if="visible">
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onCancel()">取 消</el-button>
        <el-button type="primary" @click="handleOk">确 定</el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '编辑'
      },
      cancel: {
        type: Function,
        default: () => {}
      },
      ok: {
        type: Function,
        default: () => {}
      },
      width: {
        type: String,
        default: '500'
      }
    },
    data() {
      return {
        visible: false
      }
    },
    watch: {
      value(e) {
        if (this.visible !== e) {
          this.visible = e
        }
      },
      visible(e) {
        this.$emit('input', e)
      }
    },
    methods: {
      hide() {
        this.visible = false
      },
      show() {
        this.visible = true
      },
      onCancel() {
        this.visible = false
        this.cancel()
      },
      handleOk() {
        const child = this.$slots.default[0]
        if (child) {
          const component = child.componentInstance
          const form = component.$refs.form
          form.validate((valid) => {
            if (valid) {
              const {data, formData} = component
              this.ok(data || formData)
            } else {
              this.ok()
            }
          })
        } else {
          this.ok()
        }
      }
    }
  }
</script>
