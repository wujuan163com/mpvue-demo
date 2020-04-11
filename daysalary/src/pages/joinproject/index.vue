<template>
  <div>
    <div class="idcardbox">
      <div class="imgwarp" @click="chooseImage('cardFrontUrl')">
        <img v-if="cardFrontUrl" class="card" :src="cardFrontUrl" alt="" />
        <template v-else>
          <img class="card" src="/static/images/idcardface.png" />
          <div class="cardactionbox">
            <img class="cardcamera" src="/static/images/idcardcamera.png" />
            <div class="cardwords">身份证拍照（正面）</div>
          </div>
        </template>
      </div>
      <div class="imgwarp" @click="chooseImage('cardBackUrl')">
        <img v-if="cardBackUrl" class="card" :src="cardBackUrl" alt="" />
        <template v-else>
          <img class="card" src="/static/images/idcardnumber.png" />
          <div class="cardactionbox">
            <img class="cardcamera" src="/static/images/idcardcamera.png" />
            <div class="cardwords">身份证拍照（反面）</div>
          </div>
        </template>
      </div>
    </div>

    <div class="infobox">
      <div class="infoitem">
        <van-cell-group class="cell-group">
          <van-field
            required
            label="真实姓名:"
            maxlength="20"
            placeholder="请输入您的真实姓名"
            @input="nameInput"
            />
          <van-field
            required
            label="身份证号:"
            maxlength="18"
            placeholder="请输入您的身份证号码"
            @input="idCardInput"
          />
          <van-field
            required
            label="手机号:"
            maxlength="11"
            placeholder="请输入您的手机号码"
            @input="mobileInput"
          />
        </van-cell-group>
      </div>
      <div class="infotip">请正确填写信息，填写错误会导致工资发放不成功</div>
    </div>
  
    <div class="bottombox">
      <div class="fl btn scan" @click="empty">重新扫描</div>
      <div class="fl btn next" @click="next">确认下一步</div>
    </div>

    <!-- 弹出框 -->
    <van-dialog
      use-slot
      :show="show"
      show-cancel-button
      @close="onClose"
      @confirm="onConfirm"
    >
      <div class="dialog-box">
        <p>真实姓名：{{ name }}</p>
        <p>身份证号：{{ cardNo }}</p>
        <p>手机号码：{{ phone }}</p>
        <p>项目名称：顺丰项目</p>
        <p class="red">请认真核对以上信息，无误后确认加入项目</p>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import { regPhone, regIdentityCode } from '@/utils/reg'
let groupNo = ''
export default {
  data () {
    return {
      show: false,
      cardFrontUrl: '',
      cardBackUrl: '',
      name: '',
      cardNo: '',
      phone: ''
    }
  },
  onLoad (options) {
    const ext = options.ext
    groupNo = options.groupNo
    console.log(ext)
  },
  methods: {
    // 选择图片
    chooseImage (value) {
      mpvue.chooseImage({
        count: 1,
        success: (res) => {
          this[value] = res.tempFilePaths[0]
        }
      })
    },
    // 重新扫描
    empty () {
      this.cardFrontUrl = ''
      this.cardBackUrl = ''
    },
    // 姓名输入
    nameInput (value) {
      this.name = value.mp.detail
    },
    // 身份证输入
    idCardInput (value) {
      this.cardNo = value.mp.detail
    },
    // 手机号输入
    mobileInput (value) {
      this.phone = value.mp.detail
    },
    // 确认下一步
    next () {
      console.log(groupNo, '----groupNo----')
      if (!this.cardFrontUrl) {
        this.Toast.fail('请上传身份证正面！')
        return
      }
      if (!this.cardBackUrl) {
        this.Toast.fail('请上传身份证反面！')
        return
      }
      if (!this.name) {
        this.Toast.fail('请填写姓名！')
        return
      }
      if (!this.cardNo) {
        this.Toast.fail('请填写身份证号！')
        return
      }
      if (!regIdentityCode.test(this.cardNo)) {
        this.Toast.fail('身份证号格式错误！')
        return
      }
      if (!this.phone) {
        this.Toast.fail('请填写手机号！')
        return
      }
      if (!regPhone.test(this.phone)) {
        this.Toast.fail('手机号格式错误！')
        return
      }
      this.show = true
    },
    onClose () {
      this.show = false
    },
    async onConfirm () {
      await this.$api.groupApply({
        groupNo,
        cardBackUrl: this.cardBackUrl,
        cardFrontUrl: this.cardFrontUrl,
        cardNo: this.cardNo,
        name: this.name,
        phone: this.phone
      })

      this.show = false
      mpvue.switchTab({
        url: '../main/main'
      })
    }
  }
}
</script>

<style scoped lang='less'>
.idcardbox {
  position: relative;
  .imgwarp {
    position: relative;
    margin: 30rpx auto;
    width: 492rpx;
    height: 292rpx;
    .card {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      
    }
    .showImg {
      // transform:rotate(90deg);
      display: block;
      width: 292rpx;
      height: 492rpx;
      margin: 0 auto;
      border: 1rpx solid red;
    }
    .cardactionbox {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    .cardcamera {
      display: inline-block;
      margin-top: 56rpx;
      margin-bottom: 32rpx;
      width: 120rpx;
      height: 120rpx;
    }
    .cardwords {
      font-family: PingFang-SC-Regular;
      color: #2F2D42;
      font-size: 30rpx;
      line-height: 30rpx;
    }
  }
}


.infobox {
  margin-top: 30rpx;
  height: 300rpx;
  .cell-group {
    border: none;
  }
  .infotip {
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 28rpx;
    color: #F02D2D;
    margin: 30rpx 0 30rpx 30rpx;
  }
  /deep/ .van-cell {
    padding: 26rpx 30rpx;
  }
}


// 底部按钮
.bottombox {
  position: fixed;
  bottom: 0rpx;
  left: 0rpx;
  width: 100%;
  height: 100rpx;
  background: #ffffff;
  box-shadow:0px 0px 18px 0px rgba(233,233,242,1);
  .fl {
    float: left;
  }
  .btn {
    width: 50%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    font-size: 34rpx;
  }
  .scan {
    color: #6167b9;
  }
  .next {
    background: #6167b9;
    color: #ffffff;
  }
}

// 弹出框
.dialog-box {
  padding: 10rpx 30rpx 58rpx;
  p {
    color: #2F2D42;
    font-size: 26rpx;
    line-height: 26rpx;
    margin-top: 45rpx;
  }
  .red {
    color: #F02D2D;
  }
}
</style>