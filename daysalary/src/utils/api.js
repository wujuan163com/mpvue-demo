import request from './request'

const url = 'https://testapi.ah-fuli.com/daysala-server'

export default {
  // 小程序用户登录
  login: (data, appid) => request(`${url}/daySala/wxma/portal/${appid}/v2/login`, data),

  // 小程序发送验证码
  sendVerify: data => request(`${url}/daySala/wxma/comm/v2/sendVerify`, data, 'POST'),

  // ------------------------------------------
  // 员工信息
  empInfo: data => request(`${url}/daySala/wxma/my/v2/empInfo`, data),

  // 修改支付宝账号
  setAlipayAccount: data => request(`${url}/daySala/wxma/my/v2/setAlipayAccount`, data),

  // 修改手机号码
  updateEmpPhone: data => request(`${url}/daySala/wxma/my/v2/updateEmpPhone`, data),

  // ------------------------------------------
  // 项目申请
  groupApply: data => request(`${url}/daySala/wxma/group/v2/groupApply`, data, 'POST'),

  // 项目列表
  getEmpGroupList: data => request(`${url}/daySala/wxma/group/v2/getEmpGroupList`, data),

  // 项目详情
  getEmpGroupView: data => request(`${url}/daySala/wxma/group/v2/getEmpGroupView`, data),

  // 项目工时详情
  getEmpGroupWorkView: data => request(`${url}/daySala/wxma/group/v2/getEmpGroupWorkView`, data),

  // 项目打卡
  getEmpGroupSign: data => request(`${url}/daySala/wxma/group/v2/getEmpGroupSign`, data),

  // 项目打卡详情
  getEmpGroupSignView: data => request(`${url}/daySala/wxma/group/v2/getEmpGroupSignView`, data),

  // ------------------------------------------
  // 收入明细查询
  getCollectRecordsAddList: data => request(`${url}/daySala/wxma/sala/v2/getCollectRecordsAddList`, data),

  // 收入明细详情查询
  getCollectRecordsAddView: data => request(`${url}/daySala/wxma/sala/v2/getCollectRecordsAddView`, data)

}
