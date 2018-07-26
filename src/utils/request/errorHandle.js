import toast from '@/packages/toast'

// 处理错误
export default function (error, errorHandle, alert) {
  const { response } = error
  const { data = {} } = response || {}
  // for debug
  console.error(`err${error}`)
  if (data.info) {
    error.message = data.info
  }
  // alert
  if (error.message) {
    toast(error.message)
  }
  // redirect
}

