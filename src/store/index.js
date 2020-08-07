import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 自动获取modules下的*.js
const modulesFiles = require.context('./Modules', true, /\.ts$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const plugins = [
  createPersistedState({
    storage: window.localStorage
  })
]

const store = new Vuex.Store({
  modules,
  plugins
})

export default store
