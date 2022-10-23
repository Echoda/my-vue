// vue-cli 配置
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "http://test.my-site.com"
      },
    }
  }
}