import axios from 'axios'
import store from '@/store/index'
import errorHandle from './errorHandle'
import Toast from '@/packages/toast'

import loading from './loading'

// axios 实例
const service = axios.create({
  baseURL: '/',
  timeout: 10000 // 超时
})

// request interceptor
service.interceptors.request.use(
  config => {
    const { token } = store.state.user
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}` // token
    }
    config.headers['X-Halo-App'] = 'wfc2018-jury-dashboard'
    return config
  },
  error => {
    console.error(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    // 此处可以根据状态吗可以做一些逻辑处理
    const { data, config } = response
    if (config.isLoading) loading.hide() // 关闭loading

    if (!data.success && !data.iRet) {
      let info = ''
      if (data.info) {
        info = data.info
        Toast(info)
      }
      throw new Error(info)
    } else {
      return response.data
    }
  },
  error => {
    const { config = {} } = error.response || {}
    const { isLoading = true } = config
    if (isLoading) {
      loading.hide()
    }
    errorHandle(error)
    return Promise.reject(error)
  }
)

/**
 * data axios参数
 * @type {{url: string, data: any, params: object, methods: string}}
 */
export default (data, { isLoading = true } = {}) => {
  data.isLoading = isLoading
  if (isLoading) loading.show() // 显示loading
  return service(data)
};
