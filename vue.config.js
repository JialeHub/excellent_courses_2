
module.exports = {
  assetsDir: 'static',

  pwa: {
    name: '嵌入式系统原理与开发精品课程'
  },

  devServer: {
    proxy: {
      '/devApi/': {
        target: 'http://123.57.232.1:8082/',
        changeOrigin: true,
        pathRewrite: {
          '^/devApi/': ''
        }
      },
      '/prodApi/': {
        target: 'http://123.57.232.1:8082/',
        changeOrigin: true,
        pathRewrite: {
          '^/prodApi/': ''
        }
      }
    }
  },
  productionSourceMap: false
}
