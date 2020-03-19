import request from '@/utils/request'

export function fetchCustomerListForSelect() {
  return request({
    url: '/customer/list-for-select',
    method: 'get'
  })
}
