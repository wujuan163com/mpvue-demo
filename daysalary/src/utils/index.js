/**
* @description 格式化时间
* @param  {[type]} options [description] 传入参数
* @return {[type]}         [description] 返回值
*/
export function formatTime (time, fmt = 'YYYY-MM-DD') {
  if (!time) return ''
  var _this = new Date(time)
  var o = {
    'M+': _this.getMonth() + 1, // 月份
    'D+': _this.getDate(), // 日
    'h+': _this.getHours(), // 小时
    'm+': _this.getMinutes(), // 分
    's+': _this.getSeconds(), // 秒
    'q+': Math.floor((_this.getMonth() + 3) / 3), // 季度
    'S': _this.getMilliseconds() // 毫秒
  }
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
* @description 获取用户微信信息
* @param  {[type]} options [description] 传入参数
* @return {[type]}         [description] 返回值
*/
export function getUserInfo () {
  return new Promise((resolve, reject) => {
    // 判断用户是否授权
    mpvue.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已授权
          mpvue.getUserInfo({
            success: (data) => {
              resolve(data.userInfo)
            }
          })
        } else {
          // 未授权
          mpvue.redirectTo({ url: '/pages/login/main' })
        }
      }
    })
  })
}

/**
* @description 获取用户微信信息
* @param  {[type]} options [description] 传入参数
* @return {[type]}         [description] 返回值
*/
export const Toast = {
  success: (title) => {
    mpvue.showToast({
      title,
      icon: 'success',
      // image: '/static/images/success.png',
      duration: 1500
    })
  },
  fail: (title) => {
    mpvue.showToast({
      title,
      icon: 'none',
      // image: '/static/images/fail.png',
      duration: 1500
    })
  },
  loading: () => {
    mpvue.showLoading({
      title: '加载中',
      mask: true
    })
  },
  clear: () => {
    mpvue.hideLoading()
  }
}
