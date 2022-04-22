import axios from 'axios'

const service = axios.create({
  baseURL: `${process.env.VUE_APP_API_NODE}`
})

export function getCars(data = {}) {
  return service.request({
    method: 'get',
    url: '/cars',
    params: data
  })
}