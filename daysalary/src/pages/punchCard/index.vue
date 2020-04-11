<template>
  <div class="">
    <div class="top">
      <div class="icon">张</div>
      <div class="top-right">
        <p class="name">姓名：张三</p>
        <p class="id-card">身份证号：422203195501016541</p>
      </div>
    </div>

    <!-- 打卡 -->
    <div class="punch-card">
      <div class="btn-box" @click="chooseImage">
        <img class="btn-img" src="/static/images/punchCard.png" alt="">
        <div class="btn-text">
          <img class="camera" src="/static/images/camera-icon.png" alt="">
          <p class="text">上班打卡</p>
          <p class="time">08:42:51</p>
        </div>
      </div>
      <p class="location">
        <img class="img" src="/static/images/check.png" alt="">
        <span class="text">已经入考勤范围：{{ address }}</span>
        <span class="anew" @click="anewLocation">去重新定位</span>
      </p>
    </div>

    <!-- 列表 -->
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="item-left">
          <img class="img" src="/static/images/beOnDuty.png" alt="">
          <i class="wire"></i>
          <img class="img" src="/static/images/offDuty.png" alt="">
        </div>
        <div class="item-right">
          <div class="">
            <p class="title">上班打卡时间 {{ item.startTime }} <span class="status status_0">正常</span></p>
            <p class="loca">
              <img class="icon" src="/static/images/location-icon.png" alt="">
              {{ item.startLoca }}
            </p>
          </div>
          <div class="box">
            <p class="title">下班打卡时间 {{ item.endTime }} <span class="status status_1">外勤</span></p>
            <p class="loca">
              <img class="icon" src="/static/images/location-icon.png" alt="">
              {{ item.endLoca }}
            </p>
          </div>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
let groupNo = '' // 项目组编号

export default {
  name: '',
  components: {},
  data () {
    return {
      list: [
        {
          startTime: '07:52',
          startLoca: '留仙一路高新奇科技园',
          startStatus: '0',
          endTime: '18:34',
          endLoca: '留仙一路高新奇科技园',
          endStatus: '1'
        },
        {
          startTime: '08:52',
          startLoca: '留仙一路高新奇科技园',
          startStatus: '0',
          endTime: '19:34',
          endLoca: '留仙一路高新奇科技园',
          endStatus: '1'
        }
      ],
      latitude: 0, // 纬度
      longitude: 0, // 经度
      address: ''
    }
  },
  onLoad (options) {
    groupNo = options.groupNo
    mpvue.getLocation({
      success: (res) => {
        console.log(res, '---res----')
        this.latitude = res.latitude
        this.longitude = res.longitude
      },
      fail: (err) => {
        console.log(err, '-----err---')
      }
    })
  },
  methods: {
    // 获取详情
    async getInfo () {
      const res = await this.$api.getEmpGroupSignView({
        groupNo
      })
      console.log(res)
    },
    // 拍照
    chooseImage (value) {
      mpvue.chooseImage({
        count: 1,
        sourceType: ['camera'],
        success: async (res) => {
          this[value] = res.tempFilePaths[0]
          const data = await this.$api.getEmpGroupSign({
            groupNo,
            type: ''
          })
          console.log(data)
        }
      })
    },
    // 重新定位
    anewLocation () {
      mpvue.chooseLocation({
        latitude: this.latitude,
        longitude: this.longitude,
        success: (res) => {
          console.log(res, '-----res-----')
          this.address = res.address
        },
        fail: (err) => {
          console.log(err, '-----err----')
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.top {
  display: flex;
  padding: 30rpx;
  .icon {
    background-color: #609EEA;
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    text-align: center;
    line-height: 80rpx;
    color: #ffffff;
    font-size: 32rpx;
    font-weight: bold;
  }
  .top-right {
    margin-left: 20rpx;
    flex: 1;
    .name {
      font-size: 30rpx;
      line-height: 30rpx;
      color: #2F2D42;
    }
    .id-card {
      font-size: 24rpx;
      line-height: 24rpx;
      color: #9091A7;
      margin-top: 16rpx;
    }
  }
}

.punch-card {
  .btn-box {
    position: relative;
    width: 388rpx;
    height: 388rpx;
    margin: 82rpx auto;
    .btn-img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .btn-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding-top: 100rpx;
      text-align: center;
      color: #ffffff;
    }
    .camera {
      width: 44rpx;
      height: 44rpx;
      display: block;
      margin: 0 auto;
    }
    .text {
      color: #ffffff;
      font-size: 40rpx;
      font-weight: bold;
      text-align: center;
      line-height: 70rpx;
      width: 100%;
    }
    .time {
      font-size: 30rpx;
    }
  }

  .location {
    font-size: 26rpx;
    line-height: 30rpx;
    color: #2F2D42;
    margin: 0 100rpx;
    display: flex;
    .img {
      width: 30rpx;
      height: 30rpx;
      margin-right: 14rpx;
    }
    .text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .anew {
      color: #6167B9;
      margin-left: 20rpx;
    }
  }
}

.list {
  margin-top: 160rpx;
  background-color: #F5F6FF;
  border-radius: 50px  50px  0px 0px;
  padding: 10rpx 30rpx 50rpx;

  .item {
    height: 320rpx;
    border-radius: 50rpx;
    background-color: #ffffff;
    margin-top: 40rpx;
    display: flex;
    padding: 72rpx 60rpx 58rpx 60rpx;
    box-sizing: border-box;
  }
  .item-left {
    width: 40rpx;
    .img {
      width: 40rpx;
      height: 40rpx;
    }
    .wire {
      width:1rpx;
      height:60rpx;
      border-left:2rpx solid rgba(217,219,237,1);
      display: block;
      margin: 12rpx auto;
    }
  }
  .item-right {
    flex: 1;
    margin-left: 38rpx;
    .title {
      height: 32rpx;
      line-height: 32rpx;
      font-size: 28rpx;
      color: #2F2D42;
    }
    .status {
      width: 70rpx;
      height: 32rpx;
      margin-left: 50rpx;
      display: inline-block;
      border-radius: 16rpx;
      text-align: center;
      font-size: 22rpx;
      color: #ffffff;
      line-height: 32rpx;
    }
    .status_0 {
      background-color: #6ED095;
    }
    .status_1 {
      background-color: #EF8366;
    }
    .loca {
      height: 26rpx;
      line-height: 26rpx;
      font-size: 24rpx;
      color: #CACCD3;
      margin-top: 10rpx;
    }
    .icon {
      width: 26rpx;
      height: 26rpx;
      margin-right: 10rpx;
      float: left;
    }
    .box {
      margin-top: 56rpx;
    }
  }

}
</style>