import service from '../utils/request.js'
/**
 * 获取验证码
 */
export function GetCode(data){
  return service.request({
      method: "post",
      // url: "/getSms/",
      url: `${process.env.VUE_APP_API_LOGIN}/getSms/`,
      data
  })
}

/**
 * 登录
 */
export function Login(data){
  return service.request({
      method: "post",
      // url: "/login/",
      url: `${process.env.VUE_APP_API_LOGIN}/login/`,
      data
  })
}