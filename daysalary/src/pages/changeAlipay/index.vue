<template>
  <div class="">
    <div class="input-box">
      <img class="icon" src="/static/images/alipay-icon1.png" alt="">
      <van-field
        v-model="value"
        clearable
        placeholder="请输入支付宝账号"
        class="van-input"
        @input="onInput"
        maxlength="30"
      />
    </div>
    <p class="hint">请正确填写信息，填写错误会导致工资发放不成功</p>
    <div class="submit" @click="submit">确认</div>
  </div>
</template>
<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      value: ''
    }
  },
  methods: {
    async submit () {
      if (!this.value) {
        this.Toast.fail('请填写支持宝账号')
        return
      }
      await this.$api.setAlipayAccount({
        alipayAccount: this.value
      })
      this.Toast.success('修改成功')
    },
    onInput (value) {
      this.value = value.mp.detail
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
      padding: 26rpx 30rpx;
    }
  }
}
.hint {
  font-size: 26rpx;
  text-align: center;
  color: #F02D2D;
  line-height: 26rpx;
  margin-top: 30rpx;
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