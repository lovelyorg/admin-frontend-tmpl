import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import '@/styles/index.scss' // global css
import './styles/theme/index.css' // element-theme-default

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import '../mock'

// import { mockXHR } from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// 按约定注册全局组件
//
importGlobalComponent(require.context(
  './components/Base/',
  true,
  /^.\/Base[A-Z].*\.vue$/
))

// 注册全局组件
//
import Pagination from '@/components/Pagination'
Vue.component('Pagination', Pagination)
//
import Card from './components/Card' // 可收缩卡片
Vue.component('Card', Card)
//
import CustomerSelect from './components/CustomerSelect' // 客户下拉选择
Vue.component('CustomerSelect', CustomerSelect)
//
import opButtons from './components/button/operation-buttons'
Vue.component('opButtons', opButtons)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

function importGlobalComponent(requireComponent) {
  requireComponent.keys().forEach((fileName) => {
    // console.log(fileName)
    var baseComponentConfig = requireComponent(fileName)
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig
    var baseComponentName =
      baseComponentConfig.name ||
      fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
    // console.log(baseComponentName)
    Vue.component(baseComponentName, baseComponentConfig)
  })
}