<template>
  <div>
    <div class="userinfo">
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">日日薪</div>
      <div class="tip">
        <p>日日薪小程序为内部项目工作管理所有的小工具，</p>
        <p>仅限内部员工操作使用</p>
      </div>
      <van-button
        round
        block
        type="default"
        open-type="getUserInfo"
        class="login-button"
        @getuserinfo="onGotUserInfo"
        @error="onError"
        size="large"
        color="#6167B9"
      >微信一键登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  methods: {
    // 获取用户信息
    onGotUserInfo (value) {
      if (value.mp.detail && value.mp.detail.userInfo) {
        this.login()
      } else {
        this.Toast.fail('登录失败！')
      }
    },
    // 获取用户信息失败
    onError (value) {
      this.Toast.fail('登录失败！')
    },
    // 调用后台登录
    login () {
      const { miniProgram } = wx.getAccountInfoSync()
      const appId = miniProgram.appId

      mpvue.login({
        success: async (res) => {
          const data = await this.$api.login({ code: res.code }, appId)
          mpvue.setStorage({
            key: 'token',
            data
          })
          mpvue.redirectTo({ url: '../joinproject/main' })
        },
        fail: () => {
          this.Toast.fail('登录失败！')
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 224rpx;
  height: 224rpx;
  margin: 89rpx auto 0;
  border-radius: 50%;
}

.userinfo-nickname {
  font-size: 28rpx;
  margin-top: 59rpx;
  color: #2F2D42;
}

.tip {
  text-align: center;
  font-size: 28rpx;
  font-family: PingFang SC;
  color: #2F2D42;
  line-height: 36rpx;
  margin: 34rpx auto 87rpx;
}
.login-button {
  width: 550rpx;
}

</style>
