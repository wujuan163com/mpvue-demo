<template>
  <div class="content">
    <h3 class="money">{{ details.money }}</h3>
    <p class="name">{{ details.name }}</p>
    <ul class="list">
      <li v-for="(item, index) in details.list" :key="index" class="van-hairline--bottom">
        <span class="label">{{ item.label }}</span>
        <span class="value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  name: '',
  components: {},
  data () {
    return {
      details: {
        money: '+236.36',
        name: '顺丰项目收入',
        list: [
          {
            label: '交易时间',
            value: '2019/05/02 12:55:22'
          },
          {
            label: '交易流水号',
            value: '5161631546461422'
          },
          {
            label: '支付方式',
            value: '微信支付'
          }
        ]
      }
    }
  },
  onLoad (options) {
    this.getInfo(options.rowId)
  },

  methods: {
    async getInfo (rowId) {
      const res = this.$api.getCollectRecordsAddView({ rowId })
      console.log(res)
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
.content {
  background-color: #ffffff;
  padding: 0 30rpx;
  overflow: hidden;
  .money {
    font-size: 60rpx;
    color: #6167B9;
    margin-top: 60rpx;
    text-align: center;
  }
  .name {
    font-size: 28rpx;
    color: #2F2D42;
    margin-top: 30rpx;
    text-align: center;
  }
  .list {
    margin-top: 100rpx;
    li {
      height: 100rpx;
      line-height: 100rpx;
    }
    .label {
      font-size: 28rpx;
      color: #999999;
    }
    .value {
      font-size: 28rpx;
      color: #2F2D42;
      float: right;
    }
  }
}
</style>