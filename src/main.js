import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/reset.scss'
import './styles/index.scss'
import './styles/common.scss'
import HeadMenu from './views/Layout/Head'
import FootMenu from './views/Layout/Foot'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('HeadMenu', HeadMenu)
Vue.component('FootMenu', FootMenu)
