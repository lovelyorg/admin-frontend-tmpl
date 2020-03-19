import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: (i + 1).toString(), // '@increment',
      code: '@integer(100000000000000, 1000000000000000)',
      vno: '@integer(100000000000000, 1000000000000000)',
      'origin|1': ['收购', '寄售'],
      age: '@integer(1, 10)' + '年' + '@integer(1, 12)' + '月',
      mile: '@float(1, 10, 1, 1)' + '万',
      price: '@float(10, 100, 2, 2)' + '万',
      entryPerson: '@cname',
      'publishStatus|1': ['已上架', '未上架', '已下架', '被订购下架', '已售'],
      'audit|1': ['待审核', '审核已通过', '驳回'],
      timestamp: +Mock.Random.date('T'),
      author: '@first',
      reviewer: '@first',
      title: '@title(5, 10)',
      'type|1': [
        '东风风神 E70 2018款超享版',
        '东风风神 E70 2019款超享版',
        '东风风神 E70 2020款超享版',
        '东风风神 E70 2021款超享版'
      ],
      display_time: '@datetime',
      comment_disabled: true,
      pageviews: '@integer(300, 5000)',
      platforms: ['a-platform']
    })
  )
}

export default [
  {
    url: '/car/carSourceList',
    type: 'get',
    response: config => {
      const {
        page = 1,
        limit = 20,
        sort,
        vin,
        type
        // source,
        // publishStatus,
        // auditStatus
      } = config.query

      let mockList = List.filter(item => {
        if (vin && !item.code.toString().includes(vin)) return false
        if (type && item.type !== type) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter(
        (item, index) => index < limit * page && index >= limit * (page - 1)
      )

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]
