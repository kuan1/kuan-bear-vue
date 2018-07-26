import Indicator from '@/packages/indicator'

/**
 *  loading控制
 */
export default {
  num: 0,
  show() {
    this.num += 1
    if (this.num === 1) {
      // 显示loading
      Indicator.open({
      })
    }
  },
  hide() {
    // 等待发出去的请求返回结果后结束loading
    if (this.num > 0) this.num -= 1
    if (this.num === 0) {
      // 结束loading
      Indicator.close()
    }
  }
}
