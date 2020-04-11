<template>
  <div class="">
    <div class="group" v-for="(item, index) in list" :key="index">
      <div class="group-top van-hairline--bottom">
        <h3 @click="onTime">
          {{ item.time }}
          <img class="down-icon" src="/static/images/down-icon.png" alt="">
        </h3>
        <p>收入：{{ item.income }} 元</p>
      </div>
      <div
        v-for="(t, i) in item.projectList"
        :key="i"
        class="group-item van-hairline--bottom"
        @click="goToInfo(2001)"
      >
        <p class="title">
          <span class="label">{{ t.name }}</span>
          <span class="value">{{ t.income }}元</span>
        </p>
        <p class="time">{{ t.time }}</p>
      </div>
    </div>

    <van-popup :show="show" position="bottom" @close="onClickHide">
      <van-datetime-picker
          v-model="currentDate"
          type="year-month"
          title = "选择时间"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
    </van-popup>

    <p class="foot">仅展示近1年的记录，更多记录可通过选择时间查找</p>
  </div>
</template>

<script>
import { formatTime } from '@/utils'
export default {
  name: '',
  components: {},
  data () {
    return {
      list: [
        {
          time: ' 2019年04月',
          income: '14574.85',
          projectList: [
            {
              name: '顺丰项目',
              income: '+25,683.33',
              time: '04/15 12:05'
            },
            {
              name: '圆通项目',
              income: '+188.00',
              time: '04/15 12:02'
            }
          ]
        },
        {
          time: ' 2019年03月',
          income: '14574.85',
          projectList: [
            {
              name: '顺丰项目',
              income: '+25,683.33',
              time: '04/15 12:05'
            },
            {
              name: '圆通项目',
              income: '+25,683.33',
              time: '04/15 12:05'
            }
          ]
        }
      ],
      show: false,
      currentDate: ''
    }
  },
  onLoad () {
    this.getList()
  },
  methods: {
    // 获取列表数据
    async getList () {
      const res = await this.$api.getCollectRecordsAddList({
        grantStatus: '',
        groupName: '',
        month: '',
        pageNum: 1,
        pageSize: 10
      })
      console.log(res)
    },
    // 选择时间
    onTime () {
      this.show = true
    },
    // 进入详情
    goToInfo (rowId) {
      mpvue.navigateTo({ url: `../incomeInfo/main?rowId=${rowId}` })
    },
    onClickHide () {
      this.show = false
    },
    onConfirm (e) {
      const time = formatTime(e.mp.detail, 'YYYY-MM')
      console.log(time, '---time---')
      this.show = false
    },
    onCancel () {
      this.show = false
    }
  }
}
</script>
<style>
  page {
    background-color: #F5F5F7;
    position: relative;
    padding-bottom: 100rpx;
  }
</style>
<style lang='less' scoped>
.group {
  margin-top: 20rpx;
  background-color: #ffffff;
}

.group-top {
  padding: 30rpx 30rpx;
  height: 132rpx;
  box-sizing: border-box;
  .down-icon {
    width: 14rpx;
    height: 14rpx;
  }
  h3 {
    font-size: 30rpx;
    line-height: 30rpx;
    color: #2F2D42;
  }
  p {
    font-size: 26rpx;
    color: #999999;
    line-height: 26rpx;
    margin-top: 14rpx;
  }
}

.group-item {
  height: 160rpx;
  margin: 0 30rpx;
  overflow: hidden;
  .title {
    margin-top: 40rpx;
    font-size: 30rpx;
    line-height: 30rpx;
  }
  .label {
    color: #2F2D42;
  }
  .value {
    color: #6167B9;
    float: right;
  }
  .time {
    margin-top: 26rpx;
    font-size: 26rpx;
    color: #999999;
  }
}

.foot {
  width: 100%;
  font-size: 26rpx;
  color: #999999;
  line-height: 26rpx;
  text-align: center;
  position: absolute;
  bottom: 36rpx;
  left: 0;
}

.datetime {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>