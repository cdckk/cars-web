import service from '../utils/request'

export default function parking() {
  return service.request({
    method: 'get',
    url: `${process.env.VUE_APP_API_WEB}/parking/`
  })
}