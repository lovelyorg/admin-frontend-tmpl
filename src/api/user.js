import request from '@/utils/request'

export const login = data => request({
  url: '/user/login',
  method: 'post',
  data
})

export const getInfo = (token) => request({
  url: '/user/info',
  method: 'get',
  params: { token }
})

export const logout = () => request({
  url: '/user/logout',
  method: 'post'
})

export const users = data => request({
  url: '/users',
  method: 'get',
  data
})

export const userDel = id => request({
  url: `/user/${id}`,
  method: 'delete'
})

export const userAdd = data => request({
  url: `/user`,
  method: 'post',
  data
})

export const userUpdate = data => request({
  url: `/user`,
  method: 'put',
  data
})
