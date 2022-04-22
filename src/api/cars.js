import service from '../utils/request.js'

export function getCarsList(data = {}) {
  return service.request({
    method: 'post',
    url: `${process.env.VUE_APP_API_WEB}/cars/`,
    data
  })
}