import axios from 'axios'
import errorHandle from './errorHandle'
import {getToken} from '../../utils/localData/auth'
import loadingCtrl from './loading'

// config.loading: 控制loading；config.alert: 控制播报

export default function(options = {}) {
  // 默认参数
  const {
    timeout = 3000,
    baseURL,
    headers = {
      // 'X-Halo-App': 'test'
    },
    customError = () => {
    },
    withCredentials = false
  } = options

  // axios 实例
  const service = axios.create({
    baseURL,
    timeout, // 超时
    headers,
    withCredentials
  })

  // request interceptor
  service.interceptors.request.use(
    config => {
      // 携带token
      const token = getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}` // token
      }
      //  显示loading
      if (config.loading !== false) {
        loadingCtrl.show()
      }
      // 自定义错误处理
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
      const {data, config = {}} = response

      if (config.loading !== false) loadingCtrl.hide() // 关闭loading

      if (!data.success && !data.iRet) {
        const error = new Error(data.info || data.error)
        errorHandle(error, customError)
        throw error
      }
      return response.data
    },
    error => {
      loadingCtrl.hide() // 隐藏loading
      errorHandle(error, customError)
      return Promise.reject(error)
    }
  )
  return service
}
