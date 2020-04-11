<template>
  <div class="no-data" :class="{'hidden': !show}">
    <img class="img" src="/static/images/no-data.png" alt="">
    <p class="text">{{text}}</p>
  </div>
</template>
<script>
export default {
  name: 'noData',
  props: {
    text: [String],
    show: [Boolean]
  }
}
</script>
<style lang='less' scoped>
.no-data {
  &.hidden {
    display: none;
  }
  .img {
    width: 374rpx;
    height: 300rpx;
    display: block;
    margin: 173rpx auto 20rpx;
  }
  .text {
    font-size: 28rpx;
    color: #2F2D42;
    width: 445rpx;
    line-height: 36rpx;
    margin: 0 auto;
    text-align: center;
  }
}
</style>