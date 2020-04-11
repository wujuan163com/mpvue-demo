/**
* Created by huang.wl on 2020/03/20
* Modify by huang.wl on 2020/03/20
* @description 正规表达式
* @param {注：1. 如需更改，请先与创建人沟通}
* --------------------------------------------------
* --------------------------------------------------
*/

// 验证手机号
const regPhone = /^0?(13|14|15|16|17|18|19)[0-9]{9}$/

// 验证邮箱
// eslint-disable-next-line no-useless-escape
const regEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

// 验证密码 (6~16个任意字符)
const regPassword = /^.{6,16}$/

// 验证密码 (密码长度为8~14个字符，至少包含数字、字母或特殊字符的两种组合)
const regPassword1 = /^(?![\\d]+$)(?![a-zA-Z]+$)(?![^\\da-zA-Z]+$).{8,14}$/

// 验证数字
const regNumber = /[^\d]/g

// 验证身份证号
const regIdentityCode = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

// 验证手机验证码
const regCode = /^[\d]{6}$/

export {
  regPhone,
  regEmail,
  regPassword,
  regPassword1,
  regNumber,
  regIdentityCode,
  regCode
}
