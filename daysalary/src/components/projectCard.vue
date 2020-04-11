<template>
  <li class="project-card"  @click="bindViewTap">
    <div class="title">
      <img class="project-icon" src="/static/images/project-icon.png" alt />
      <h3>{{ data.title }} 圆通项目</h3>
    </div>
    <div class="cell-group">
      <div class="cell">
        <p class="label">累计有效工时</p>
        <p class="value">{{ items.manHour }}25小时</p>
      </div>
      <div class="cell">
        <p class="label">预计工资</p>
        <p class="value">{{ items.salary }}225元</p>
      </div>
      <div class="cell">
        <p class="label">实发工资</p>
        <p class="value">{{ items.fsalary }}120元</p>
      </div>
    </div>
    <div class="info-btn">
      详情
      <img class="arrows-icon" src="/static/images/arrows-icon.png" alt />
    </div>
  </li>
</template>

<script>
export default {
  // props: {
  //   items: [Object]
  // },
  data () {
    return {
      manHour: '25小时',
      data: {
        title: '圆通项目',
        manHour: '25小时',
        salary: '225元',
        fsalary: '120元'
      }
    }
  },
  methods: {
    bindViewTap () {
      console.log('---1323-------')
    }
  }
}
</script>

<style scoped lang='less'>
.project-card {
  width: 666rpx;
  height: 280rpx;
  box-shadow:0px 10px 35px 0px rgba(233,236,239,1);
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
