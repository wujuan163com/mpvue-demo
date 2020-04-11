<template>
  <div>
    <div class="group">
      <div class="userinfo">
        <span class="nickname">{{ userinfo && userinfo.nickName }}</span>
        <img v-if="userinfo && userinfo.avatarUrl" class="icon" :src="userinfo && userinfo.avatarUrl" alt="">
        <img v-else class="icon" src="/static/images/icon.png" alt="">
      </div>
    </div>
    
    <div class="group">
      <div class="group-item van-hairline--bottom" @click="goToInfo('incomeList')">
        <img class="icon" src="/static/images/money-icon.png" alt="">
        <span class="label">我的收入</span>
        <img class="more" src="/static/images/more-icon.png" alt="">
        <span class="value">￥26.33</span>
      </div>
      <div class="group-item van-hairline--bottom" @click="goToInfo('changeMobile')">
        <img class="icon" src="/static/images/mobile-icon.png" alt="">
        <span class="label">手机号</span>
        <img class="more" src="/static/images/more-icon.png" alt="">
        <span class="value">15112726758</span>
      </div>
      <div class="group-item van-hairline--bottom">
        <img class="icon" src="/static/images/idcard-icon.png" alt="">
        <span class="label">身份证号</span>
        <span class="value">25476*********2486</span>
      </div>
      <div class="group-item" @click="goToInfo('changeAlipay')">
        <img class="icon" src="/static/images/alipay-icon.png" alt="">
        <span class="label">支付宝账号</span>
        <img class="more" src="/static/images/more-icon.png" alt="">
        <span class="value">lidadao@163.com</span>
      </div>
    </div>

    <div class="group">
      <div class="group-item exit" @click="onExit">
        退出
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import Dialog from '@/../static/vant-weapp/dialog/dialog'
import { getUserInfo } from '@/utils'

export default {
  data () {
    return {
      nickName: '',
      avatarUrl: '',
      userinfo: {}
    }
  },
  async onShow () {
    const userinfo = await getUserInfo()
    this.userinfo = userinfo
    this.init()
  },
  methods: {
    // 获取用户息息
    async init () {
      const res = await this.$api.empInfo({})
      console.log(res)
    },
    // 进入详情页
    goToInfo (page) {
      mpvue.navigateTo({ url: `../${page}/main` })
    },
    // 退出
    onExit () {
      Dialog.confirm({
        message: '您确定要退出？',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        console.log('_______确定退出___')
      })
    }
  }
}
</script>

<style>
page {
  background-color: #F5F5F7;
}
</style>

<style scoped lang='less'>
.group {
  margin-top: 20rpx;
  background-color: #ffffff;
}

.userinfo {
  height: 160rpx;
  line-height: 160rpx;
  position: relative;
  padding: 0 30rpx;
  .nickname {
    font-size: 36rpx;
    color: #2F2D42;
  }
  .icon {
    width: 88rpx;
    height: 88rpx;
    position: absolute;
    top: 35rpx;
    right: 30rpx;
    border-radius: 50%;
  }
}

.group-item {
  height: 100rpx;
  margin-left: 30rpx;
  padding: 33rpx 30rpx 33rpx 0;
  box-sizing: border-box;
  .icon {
    width: 34rpx;
    height: 34rpx;
    float: left;
  }
  .more {
    width: 12rpx;
    height: 20rpx;
    float: right;
    margin-left: 30rpx;
    margin-top: 7rpx;
  }
  .label {
    font-size: 28rpx;
    color: #999999;
    float: left;
    line-height: 34rpx;
    margin-left: 12rpx;
  }
  .value {
    font-size: 28rpx;
    line-height: 34rpx;
    color: #2F2D42;
    float: right;
  }
}

.exit {
  text-align: center;
  color: #F02D2D;
  font-size: 28rpx;
  line-height: 34rpx;
}

</style>
