/**
* Created by huang.wl on 2020/
* Modify by huang.wl on 2020/
* @description 发起 HTTPS 网络请求
* @param {注：1. 如需更改，请先与创建人沟通}
* --------------------------------------------------
* --------------------------------------------------
*/
import { Toast } from './index'

export default function request (url, data, method = 'GET') {
  Toast.loading()
  const token = mpvue.getStorageSync('token')

  return new Promise((resolve, reject) => {
    mpvue.request({
      url,
      data,
      method,
      header: {
        Authorization: token
      },
      timeout: 30000,
      success: (res) => {
        mpvue.hideLoading()
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            resolve(res.data.data)
          } else if (res.data.code === 401) { // token 无效
            // mpvue.redirectTo({ url: '/pages/login/main' })
          } else {
            Toast.fail(res.data.msg)
            reject(res)
          }
        } else {
          Toast.fail(res.msg)
          reject(res)
        }
      },
      fail: (err) => {
        Toast.clear()
        Toast.fail('服务器异常')
        reject(err)
      }
    })
  })
}
