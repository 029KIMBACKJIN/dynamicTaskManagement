const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer:{
    proxy: {
      '/api': {
        target: 'https://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 파일 빌드 위치 설정, Vue에서 작성한 파일이 빌드하면 backend로 넘어감
  outputDir: '../backend/public',
}
