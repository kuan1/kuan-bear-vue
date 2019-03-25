import {copy} from 'kuan-utils'

export default {
  bind(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      el._v_fn = () => {
        if (copy(binding.value)) {
          el._v_clipboard_success && el._v_clipboard_success()
        } else {
          el._v_clipboard_error && el._v_clipboard_success()
        }
      }
      el.addEventListener('click', el._v_fn)
    }
  },
  update(el, binding) {
    if (binding.arg === 'success') {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === 'error') {
      el._v_clipboard_error = binding.value
    } else {
      el._v_fn = () => {
        if (copy(binding.value)) {
          el._v_clipboard_success && el._v_clipboard_success()
        } else {
          el._v_clipboard_error && el._v_clipboard_success()
        }
      }
      el.addEventListener('click', el._v_fn)
    }
  },
  unbind(el, binding) {
    if (binding.arg === 'success') {
      delete el._v_clipboard_success
    } else if (binding.arg === 'error') {
      delete el._v_clipboard_error
    } else {
      el.removeEventListener('click', el._v_fn)
    }
  }
}
