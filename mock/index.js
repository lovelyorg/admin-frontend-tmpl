import Mock from 'mockjs'
// import { param2Obj } from '../src/utils'

import user from './user'
import role from './role'
import article from './article'
import search from './remote-search'
import car from './car'
import customer from './customer'

const mocks = [...user, ...role, ...article, ...search, ...car, ...customer]

// // for front mock
// // please use it cautiously, it will redefine XMLHttpRequest,
// // which will cause many of your third-party libraries to be invalidated(like progress event).
// export function mockXHR() {
//   // mock patch
//   // https://github.com/nuysoft/Mock/issues/300
//   Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
//   Mock.XHR.prototype.send = function() {
//     if (this.custom.xhr) {
//       this.custom.xhr.withCredentials = this.withCredentials || false

//       if (this.responseType) {
//         this.custom.xhr.responseType = this.responseType
//       }
//     }
//     this.proxy_send(...arguments)
//   }

//   function XHR2ExpressReqWrap(respond) {
//     return function(options) {
//       let result = null
//       if (respond instanceof Function) {
//         const { body, type, url } = options
//         // https://expressjs.com/en/4x/api.html#req
//         result = respond({
//           method: type,
//           body: JSON.parse(body),
//           query: param2Obj(url)
//         })
//       } else {
//         result = respond
//       }
//       return Mock.mock(result)
//     }
//   }

//   for (const i of mocks) {
//     console.log(222222)
//     Mock.mock(
//       i.url,
//       i.type || 'get',
//       XHR2ExpressReqWrap(i.response)
//     )
//   }
// }

// for mock server
const responseFake = (url, type, respond) => {
  return {
    // url: typeof url === 'string' ? `${url}` : RegExp(`${url.source}`),
    url: url,
    type: type || 'get',
    response(req, res) {
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      )
    }
  }
}

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})

// console.log(123)
// const requireComponent =
//   require.context(
//     './',
//     true,
//     /^(?!.*index.js).*.js$/
//   )

// let mmm = []
// requireComponent.keys().forEach(m => {
//   console.log(m)
//   try {
//     var { default: baseComponentConfig } = requireComponent(m)
//     if (baseComponentConfig) { mmm = mmm.concat(baseComponentConfig) }
//     console.log(baseComponentConfig)
//   } catch (e) {
//     console.error(e)
//   }
// })
// console.log(mmm)

// console.log(345)