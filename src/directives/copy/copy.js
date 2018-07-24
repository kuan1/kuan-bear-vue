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

function copy(input) {
  const el = document.createElement('textarea');

  el.value = input;

  // Prevent keyboard from showing on mobile
  el.setAttribute('readonly', '');

  el.style.contain = 'strict';
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  el.style.fontSize = '12pt'; // Prevent zooming on iOS

  const selection = document.getSelection();
  let originalRange = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  document.body.appendChild(el);
  el.select();

  // Explicit selection workaround for iOS
  el.selectionStart = 0;
  el.selectionEnd = input.length;

  let success = false;
  try {
    success = document.execCommand('copy');
    /* eslint-disable */
  } catch (err) {}

  document.body.removeChild(el);

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  return success;
}


