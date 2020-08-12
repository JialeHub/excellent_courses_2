<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <head-menu/>
      <router-view/>
      <foot-menu/>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
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
