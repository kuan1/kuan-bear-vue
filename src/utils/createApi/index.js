import {createApi} from 'kuan-utils'
import toast from '../../packages/toast'
import loadingCtrl from './loading'

export default (config) => {
  const defaultConfig = {
    options: { // 默认配置
      timeout: 30000,
      headers: {}, // 默认headers
    },
    handleError(status) { // 自定义错误处理
      if (status) console.log('错误状态')
    },
    Alert: toast, // 错误提示
    getHeaders() {
    } // 可以动态设置的headers
  }

  // axios 对象
  const service = createApi({...defaultConfig, ...config})

  // 包装request
  return async (options = {}, {loading = true} = {}) => {
    if (loading) loadingCtrl.show()
    try {
      const {data} = await service(options)
      if (loading) loadingCtrl.hide()
      return data
    } catch (e) {
      if (loading) loadingCtrl.hide()
      return Promise.reject(e)
    }
  }
}
