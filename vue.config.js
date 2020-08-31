
module.exports = {
  assetsDir: 'static',

  pwa: {
    name: '精品课程'
  },

  css: {
    loaderOptions: {
      scss: {
        prependData:
          '@import "@/styles/variables.scss";'
      }
    },
    extract: false
  },

  devServer: {
    proxy: {
      '/devApi/': {
        target: 'http://112.74.86.165:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/devApi/': ''
        }
      },
      '/prodApi/': {
        target: 'http://112.74.86.165:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/prodApi/': ''
        }
      }
    }
  },
  productionSourceMap: false
}
