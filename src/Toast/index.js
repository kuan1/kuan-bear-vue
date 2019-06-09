import VueManage from '../utils/VueManage'
import Toast from './Toast'

const toast = new VueManage(Toast)

let timer

export default (text, time = 2000) => {
  if (timer) clearTimeout(timer)
  toast.show(text)
  timer = setTimeout(() => {
    toast.hide()
  }, time)
}

