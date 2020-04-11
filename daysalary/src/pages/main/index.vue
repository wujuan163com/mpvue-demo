<template>
  <div class="work-page">
    <no-data text="暂无项目，请通过微信扫描数科APP 分享的二维码加入项目" :show="listData.length < 1"></no-data>
    <div class="content" :class="{'no-data': listData.length < 1}">
      <img class="top-bg" src="/static/images/word-top-bg.png" alt="">
      <card title="fdsfsdfdsfdsfs"></card>
      <ul class="list">
        <li v-for="(item, index) in listData" :key="index" class="project-card"  @click="goToInfo(10032)">
          <div class="title">
            <img class="project-icon" src="/static/images/project-icon.png" alt />
            <h3>
              {{ item.title }}
              <img v-show="item.status === '1'" class="status-img" src="/static/images/forbidden.png" alt="">
            </h3>
          </div>
          <div class="cell-group">
            <div class="cell">
              <p class="label">累计有效工时</p>
              <p class="value">{{ item.manHour }}</p>
            </div>
            <div class="cell">
              <p class="label">预计工资</p>
              <p class="value">{{ item.salary }}</p>
            </div>
            <div class="cell">
              <p class="label">实发工资</p>
              <p class="value">{{ item.fsalary }}</p>
            </div>
          </div>
          <div class="info-btn">
            详情
            <img class="arrows-icon" src="/static/images/arrows-icon.png" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import noData from '@/components/noData'

export default {
  components: {
    'no-data': noData
  },
  data () {
    return {
      listData: [
        {
          title: '圆通项目',
          manHour: '25小时',
          salary: '225元',
          fsalary: '120元',
          status: '0'
        },
        {
          title: '顺丰项目超长测试',
          manHour: '25小时',
          salary: '225元',
          fsalary: '120元',
          status: '1'
        },
        {
          title: '圆通项目',
          manHour: '25小时',
          salary: '225元',
          fsalary: '120元',
          status: '1'
        }
      ]
    }
  },
  onShow () {
    this.getList()
  },
  // 监听用户下拉动作
  onPullDownRefresh () {
    console.log('监听用户下拉动作')
    this.getList()
  },
  // 页面上拉触底事件的处理函数
  onReachBottom () {
    console.log('页面上拉触底事件的处理函数')
    this.getList()
  },
  methods: {
    // 获取列表数据
    async getList () {
      const res = this.$api.getEmpGroupList({
        pageNum: 1,
        pageSize: 10
      })
      console.log(res)
    },
    // 进入详情
    goToInfo (groupNo) {
      mpvue.navigateTo({ url: `../projectInfo/main?groupNo=${groupNo}` })
    }
  }
}
</script>
<style>
  page {
    background-color: #F7F7FB;
  }
</style>
<style scoped lang='less'>
.content {
  // display: none;
  overflow: hidden;
  &.no-data {
    display: none;
  }
  background-color: #F7F7FB;
  width: 100%;
  min-height: 400rpx;
  position: relative;
  .top-bg {
    width: 100%;
    height: 222rpx;
    position: absolute;
    top: 0rpx;
    left: 0;
  }

  .list {
    padding-left: 30rpx;
    position: relative;
    z-index: 1;
  }
}


.project-card {
  width: 666rpx;
  height: 280rpx;
  border-radius:20px;
  background: #E9ECEF;
  margin-top: 30rpx;
  padding: 42rpx 50rpx 60rpx;
  box-sizing: border-box;
  position: relative;
  
  // 项目标题
  .title {
    height: 60rpx;
    line-height: 60rpx;
    .project-icon {
      width: 60rpx;
      height: 60rpx;
      float: left;
    }
    h3 {
      margin-left: 22rpx;
      font-size: 34rpx;
      color: #2F2D42;
      float: left;
      position: relative;
    }
    .status-img {
      width: 90rpx;
      height: 90rpx;
      float: right;
      position: absolute;
      top: -30rpx;
      right: -106rpx;
    }
  }

  .cell-group {
    display: flex;
    margin-top: 45rpx;
    .cell {
      flex: 1;
    }
    .label {
      font-size: 26rpx;
      line-height: 26rpx;
      color: #BAB8C4;
    }
    .value {
      font-size: 30rpx;
      line-height: 30rpx;
      color: #2F2D42;
      margin-top: 16rpx;
    }
  }


  // 详情按钮
  .info-btn {
    position: absolute;
    top: 42rpx;
    right: -30rpx;
    background: #7E87FF;
    width: 140rpx;
    height: 60rpx;
    border-radius: 30rpx;
    color: #fff;
    font-size: 26rpx;
    line-height: 60rpx;
    text-align: center;
    .arrows-icon {
      width: 24rpx;
      height: 17rpx;
    }
  }
}
</style>
