<template>
  <canvas :style="{height: h, width: w}" :url="url" ref="canvas"></canvas>
</template>

<script>
import QRcode from 'qrcode'
export default {
  name: 'myCode',
  props: {
    url: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 200
    },
    height: {
      type: [String, Number],
      default: 200
    }
  },
  computed: {
    w() {
      const w = this.width.toString()
      if (/^\d*$/.test(w)) {
        return `${w}px`
      }
      return w
    },
    h() {
      const h = this.height.toString()
      if (/^\d*$/.test(h)) {
        return `${h}px`
      }
      return h
    }
  },
  watch: {
    url() {
      this.generateCode()
    }
  },
  methods: {
    generateCode() {
      if (!this.url) return
      const { canvas } = this.$refs
      QRcode.toCanvas(canvas, this.url, { width: this.width, height: this.height, margin: '1' }, (err) => {
        if (err) {
          console.error(err)
        }
      })
    }
  },
  mounted() {
    this.generateCode()
  }
}
</script>