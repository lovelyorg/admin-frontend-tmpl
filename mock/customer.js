import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: (i + 1).toString(), // '@increment',
      name: '@cname',
      tel: /^1[385][1-9]\d{8}/
    })
  )
}

export default [
  {
    url: '/customer/list-for-select',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: {
          total: List.length,
          items: List
        }
      }
    }
  }
]
