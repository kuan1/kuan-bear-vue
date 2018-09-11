export default {
  inserted: function (el, binding) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight
      if (top < h) {
        el.classList.add(binding.value)
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass)
        }
      }
    }

    window.addEventListener('scroll', binding.addClass)

    binding.addClass()
  },
  unbind: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
      console.log('取消事件绑定')
    }
  }
}
