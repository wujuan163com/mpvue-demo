<template>
  <div class="">
    <div class="input-box">
      <img class="icon" src="/static/images/mobile-icon.png" alt="">
      <van-field
        v-model="mobile"
        clearable
        placeholder="请输入新手机号码"
        class="van-input"
        @input="mobileInput"
        maxlength="11"
      />
    </div>
    <div class="input-box">
      <img class="icon" src="/static/images/lock-icon.png" alt="">
      <van-field
        v-model="value"
        clearable
        placeholder="请输入验证码"
        class="van-input"
        @input="codeInput"
        maxlength="6"
      >
        <div slot="button" class="button" @click="sendVerify">获取验证码</div>
      </van-field>
    </div>

    <div class="submit" @click="submit">确认修改</div>
  </div>
</template>

<script>
import { regPhone, regCode } from '@/utils/reg'

export default {
  name: '',
  components: {},
  data () {
    return {
      phone: '',
      sms: '',
      username: ''
    }
  },

  methods: {
    // 发送验证码
    async sendVerify () {
      if (!this.phone) {
        this.Toast.fail('请填写手机号')
        return
      }
      if (!regPhone.test(this.phone)) {
        this.Toast.fail('手机号格式错误！')
        return
      }

      await this.$api.sendVerify({
        phone: this.phone
      })
    },
    // 手机号输入
    mobileInput (value) {
      this.phone = value.mp.detail
    },
    // 验证码输入
    codeInput (value) {
      this.sms = value.mp.detail
    },
    // 提交
    async submit () {
      if (!this.phone) {
        this.Toast.fail('请填写手机号')
        return
      }
      if (!regPhone.test(this.phone)) {
        this.Toast.fail('手机号格式错误！')
        return
      }
      if (!this.sms) {
        this.Toast.fail('请填写验证码')
        return
      }
      if (!regCode.test(this.sms)) {
        this.Toast.fail('验证码格式错误')
        return
      }
      await this.$api.updateEmpPhone({
        phone: this.phone
      })
      this.Toast.success('修改成功')
    }

  }
}
</script>
<style lang='less' scoped>
.input-box {
  height: 100rpx;
  display: flex;
  padding-left: 30rpx;
  .icon {
    width: 34rpx;
    height: 34rpx;
    float: left;
    margin: 33rpx 0rpx 0 0;
  }
  .van-input {
    flex: 1;
    height: 100rpx;
    /deep/ .van-cell {
      padding: 16rpx 30rpx;
    }
    /deep/ .van-field__input {
      height: 68rpx;
    }
  }
  .button {
    height: 68rpx;
    font-size: 28rpx;
    line-height: 68rpx;
    color: #2F2D42;
    border: 1rpx solid #E5E5E5;
    border-radius: 34rpx;
    padding: 0 22rpx;
  }

}



.submit {
  background: #6167B9;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 34rpx;
  color: #ffffff;
  margin: 220rpx 100rpx 100rpx;
  text-align: center;
  border-radius: 50rpx;
}
</style>