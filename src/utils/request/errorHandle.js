import toast from '@/packages/toast'

function getMessage(error) {
  const message = {
    400: '请求错误',
    401: '未授权，请登录',
    403: '拒绝访问',
    404: '请求地址出错: ${err.response.config.url}',
    408: '请求超时',
    500: '服务器内部错误',
    501: '服务端未实现',
    502: '网关错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'HTTP版本不受支持'
  }
  const {response = {}} = error
  const {data = {}} = response
  return data.info || data.error || message[response.status] || error.message || '发生未知错误'
}

// 处理错误
export default function (error, errorHandle) {
  // 自定义错误处理
  if (errorHandle) {
    errorHandle(error)
  }

  // for debug
  console.error(`err${error}`)

  const {config = {}} = error.response || {}

  // 提示错误
  if (config.alert !== false) {
    const message = getMessage(error)
    toast(message)
  }
}

