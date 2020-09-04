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
import './utils/commonPro'
import './utils/globalFunction'
import HeadMenu from './views/Layout/Head' //顶部导航栏
import FootMenu from './views/Layout/Foot' //底部
import MakeStar from './components/makeStar' //星星评分组件
Vue.config.productionTip = false
// Vue.prototype.$fileSaver = require('file-saver'); // 下载文件
Vue.prototype.$nodeEnv = process.env.NODE_ENV;
Vue.prototype.$baseApi = process.env.VUE_APP_BASE_API;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('HeadMenu', HeadMenu)
Vue.component('FootMenu', FootMenu)
Vue.component('MakeStar', MakeStar)
