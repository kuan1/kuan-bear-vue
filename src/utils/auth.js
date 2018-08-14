import {localData} from 'kuan-utils'

const KEY = process.env.name || 'kuan-bear-vue'
const maxAge = 60 * 24

// const localData = {
//   timestamp: Date.now(),
//   token: '1324dafa',
// };

// 获取用户信息
export function getUser() {
  return localData.get(KEY)
}

// 储存用户信息
export function saveUser(userInfo) {
  localData.set(KEY, userInfo, maxAge)
}

// 获取token
export function getToken() {
  const userInfo = getUser()
  return userInfo ? userInfo.token : null
}

// 清空token
export function clearAuth() {
  localStorage.clear()
}

// 是否登陆
export function isLogined() {
  return !!getUser()
}
