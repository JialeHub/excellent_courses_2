import Vue from 'vue'
import { VueClass } from '@vue/test-utils'
import { addBaseURL, formatDate, formatDateTime, isEmpty } from './globalFunction'
import './filter'

const globalFunction = {
  install (Vue:VueClass<any>) {
    Vue.prototype.$addBaseURL = addBaseURL
    Vue.prototype.$getSimpleHtml = getSimpleHtml
    Vue.prototype.$formatDate = formatDate
    Vue.prototype.$formatDateTime = formatDateTime
    Vue.prototype.$isEmpty = isEmpty
  }
}


Vue.use(globalFunction)
