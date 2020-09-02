import axios from 'axios'
import router from '@/router'
import store from '@/store'

const service = axios.create({
  timeout: 6000,
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
})

// 请求拦截
service.interceptors.request.use(
  config => {
    const token = store.getters.token
    const url = config.url
    if (isAddToken(url)) config.headers.Authorization = token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const { status } = error.response.data
    if (status === 404) {
      router.push({ name: 'error404' }).then()
    } else if (status === 403) {
      router.push({ name: 'error403' }).then()
    }
    return Promise.reject(error)
  }
)

/**
 * @description 白名单，添加token的接口
 * */
const isAddToken = (url) =>
  [
    '/expertRemark',
    '/subject/sub',
    '/subject/testing',
    '/submit/homework',
    '/homework',
    '/choice/section',
    '/choice/student',
    '/testing/sections',
    '/testing/student',
    '/auth/reset',
    '/student/info',
    '/video/end',
    '/video/history',
    '/evaluate',
    '/praiseByEval',
    '/praiseByWB',
    '/writeBack',
    '/resource/section'
  ].some(item => url === item)

export default service
