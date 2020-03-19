import Mock from 'mockjs'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

let list = Array(100).fill().map(() => Mock.mock({
  id: '@guid',
  account: '@first',
  name: '@cname',
  'dept|1': ['财务部', '市场部', '运营部'],
  'role|1': ['roleA', 'roleB', 'roleC'],
  phone: /^1[385][1-9]\d{8}/,
  'gender|1': ['男', '女'],
  timestamp: +Mock.Random.date('T'),
  birthDate: '@datetime'
}))

export default [
  {
    url: '/users',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, sort, name } = config.query

      let mockList = list.filter(item => {
        let tag = true
        if (name) {
          tag = tag && (item.account.toString().toLowerCase().includes(name.toLowerCase()) ||
            item.name.toString().toLowerCase().includes(name.toLowerCase()) ||
            item.phone.toString().includes(name))
        }
        return tag
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
  },

  {
    url: '/user',
    type: 'delete',
    response: (config) => {
      const id = config.url.replace(RegExp('.*/'), '')
      list = list.filter(m => m.id !== id)
      return {
        code: 20000,
        data: {
          a: 2
        }
      }
    }
  },

  {
    url: '/user',
    type: 'post',
    response: (config) => {
      list.push({ ...config.body, id: +new Date() })
      return {
        code: 20000
      }
    }
  },

  {
    url: '/user',
    type: 'put',
    response: (config) => {
      console.log(config.body)
      const user = list.find(m => m.id === config.body.id)
      Object.assign(user, config.body)
      return {
        code: 20000
      }
    }
  },

  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
