<template>
  <div class="info-page">
    <p class="title">项目信息</p>
    <div class="group">
      <div class="group-item van-hairline--bottom">
        <span class="label">项目名称</span>
        <span class="value"><img class="status-img" src="/static/images/forbidden.png" alt="">圆通项目</span>
        
      </div>
      <div class="group-item">
        <span class="label">圆通项目</span>
        <span class="value">张三、张三、张三、张三、张三、张三 张三、张三、张三</span>
      </div>
    </div>
    <p class="title">工时信息</p>
    <div class="group">
      <div class="group-item" @click="goToInfo">
        <span class="label">工时详情</span>
        <img class="more" src="/static/images/more-icon.png" alt="">
      </div>
    </div>
    <div class="btn-box" @click="goToPunchCard">
      <img class="btn-img" src="/static/images/punchCard.png" alt="">
      <p class="text">打卡</p>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      groupNo: '',
      details: {}
    }
  },
  onLoad (options) {
    this.groupNo = options.groupNo
    this.init(options.groupNo)
  },
  methods: {
    async init (groupNo) {
      const res = await this.$api.getEmpGroupView({ groupNo })
      console.log(res)
      this.details = res
    },
    // 进入工时详情
    goToInfo () {
      mpvue.navigateTo({ url: `../manHourInfo/main?groupNo=${this.groupNo}` })
    },

    // 进入打卡页面
    goToPunchCard () {
      mpvue.navigateTo({ url: `../punchCard/main?groupNo=${this.groupNo}` })
    }
  }
}
</script>
<style>
  page {
    background-color: #F5F5F7;
  }
</style>
<style lang='less' scoped>
.info-page {
  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #999999;
    font-size: 26rpx;
    padding-left: 30rpx;
  }

  .group {
    background-color: #ffffff;
    padding-left: 30rpx;
    .group-item {
      padding: 38rpx 30rpx 38rpx 0;
      overflow: hidden;
    }
    .label {
      font-size: 28rpx;
      color: #999999;
      float: left;
    }
    .value {
      font-size: 28rpx;
      color: #2F2D42;
      float: right;
      text-align: right;
      max-width: 474rpx;
      position: relative;
    }
    .more {
      width: 12rpx;
      height: 20rpx;
      float: right;
      margin-left: 30rpx;
      margin-top: 7rpx;
    }
    .status-img {
      width: 90rpx;
      height: 90rpx;
      float: right;
      position: absolute;
      top: -23rpx;
      left: -110rpx;
    }
  }

  .btn-box {
    position: relative;
    width: 388rpx;
    height: 388rpx;
    margin: 60rpx auto;
    .btn-img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .text {
      color: #ffffff;
      font-size: 40rpx;
      font-weight: bold;
      text-align: center;
      position: absolute;
      top: 50%;
      line-height: 70rpx;
      margin-top: -44rpx;
      width: 100%;
    }
  }
}
</style>