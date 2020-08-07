<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
      <span v-html="xssTest">xssTest</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
window.xssTest = {}
export default {
  name: 'app',
  data () {
    return {
      text: '',
      xssTest: ''
    }
  },
  created () {
    const loadingPage = document.getElementById('Loading')
    if (loadingPage) {
      document.body.removeChild(loadingPage)
    }
  },
  mounted () {
    setInterval(() => {
      this.xssTest = window.xssTest
    }, 1000)
  }
}
</script>

<style lang="scss">
#app {

}
</style>
