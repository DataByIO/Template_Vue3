
/*
 CORS오류 NodeJS에서 해결하는 방법 말고 Vue3에서는 proxy로 해결하는 방법이 있고 아래의 방법으로 해결
 사용자가 Vue 환경의 Port 8090으로 접근후 /api로 오는 통신은 아래의 target을 호출하도록 Proxy설정함.
 */

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigin: true,
        PathRewrite: {
          '^/': ''
        }
      }
    }
  }
}