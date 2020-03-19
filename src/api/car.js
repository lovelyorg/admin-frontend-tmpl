import request from '@/utils/request'

export function fetchCarSourceList(query) {
  return request({
    url: '/car/carSourceList',
    method: 'get',
    params: query
  })
}
