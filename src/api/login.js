import instance from '../utils/request.js'
/**
 * 获取验证码
 */
export function GetCode(data){
  return instance.request({
      method: "post",
      url: "/getSms/",
      data
  })
}

/**
 * 登录
 */
export function Login(data){
  return instance.request({
      method: "post",
      url: "/login/",
      data
  })
}