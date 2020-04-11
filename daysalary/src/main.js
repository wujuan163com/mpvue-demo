import Vue from 'vue'
import App from './App'
import 'vant-weapp/dist/common/index.wxss'
import { Toast } from '@/utils'
import API from '@/utils/api'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.Toast = Toast
Vue.prototype.$api = API

// // 打开调试
// mpvue.setEnableDebug({
//   enableDebug: true
// })
