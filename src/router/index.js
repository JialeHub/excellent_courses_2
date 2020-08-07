import Vue from 'vue'
import store from '@/store/'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.name !== from.name) {
      return { x: 0, y: 0 }
    } else if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 0 }
      }
    }
  }
})

const needLogin = [] // 拦截对象

// 路由守卫：
router.beforeEach((to, from, next) => {
  // 检测token是否存在（是否登录）
  if (to.meta.title) document.title = to.meta.title
  if (store.getters.token && store.getters.token !== '') {
    next()
  } else {
    if (needLogin.indexOf(to.path) === -1) {
      next()
    } else {
      next('/login?redirect=' + to.path)
    }
  }
})

export default router
