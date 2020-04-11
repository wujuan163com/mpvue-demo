<template>
  <div class="">
    <ul class="group" v-for="(item, index) in list" :key="index">
      <li class="group-item title van-hairline--bottom">
        <span>{{ item.time }}</span>
        <img v-if="item.status === '0'" class="img" src="/static/images/openAccount.png" alt="">
        <img v-else class="img" src="/static/images/closeAccount.png" alt="">
      </li>
      <li class="group-item van-hairline--bottom">
        <span class="label">上班时间</span>
        <span class="value">{{ item.officeHours }}</span>
      </li>
      <li class="group-item van-hairline--bottom">
        <span class="label">下班时间</span>
        <span class="value">{{ item.closingTime }}</span>
      </li>
      <li class="group-item van-hairline--bottom">
        <span class="label">统计工时（小时）</span>
        <span class="value">{{ item.manHour }}</span>
      </li>
      <li class="group-item">
        <span class="label">有效工时（小时）</span>
        <span class="value">{{ item.validManHour }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
let groupNo = ''
export default {
  name: '',
  components: {},
  data () {
    return {
      list: [
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        },
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        },
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        },
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        },
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        },
        {
          time: '2019/05/05',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '0'
        },
        {
          time: '2019/05/04',
          officeHours: '09:00:00',
          closingTime: '18:00:00',
          manHour: '7',
          validManHour: '6',
          status: '1'
        }
      ]
    }
  },
  onLoad (options) {
    groupNo = options.groupNo
    this.init()
  },
  // 监听用户下拉动作
  onPullDownRefresh () {
    console.log('监听用户下拉动作')
    this.init()
  },
  // 页面上拉触底事件的处理函数
  onReachBottom () {
    console.log('页面上拉触底事件的处理函数')
    this.init()
  },
  methods: {
    async init () {
      this.$api.getEmpGroupWorkView({
        groupNo,
        pageNum: 1,
        pageSize: 10
      }).then((res) => {
        this.list = res
        mpvue.stopPullDownRefresh({})
      }).catch(() => {
        mpvue.stopPullDownRefresh({})
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
<style lang='less' scoped>
.group {
  margin-top: 30rpx;
  background-color: #ffffff;
  .group-item {
    height: 100rpx;
    line-height: 100rpx;
    position: relative;
    padding-right: 30rpx;
    margin-left: 30rpx;
  }
  .group-item.title {
    margin-left: 0;
    padding-left: 30rpx;
    color: #2F2D42;
    font-size: 32rpx;
    font-weight: bold;
  }
  .img {
    width: 90rpx;
    height: 90rpx;
    position: absolute;
    top: 5rpx;
    right: 30rpx;
  }
  .label {
    font-size: 26rpx;
    color: #999999;
    float: left;
  }
  .value {
    font-size: 30rpx;
    color: #2F2D42;
    float: right;
  }

}
</style>
