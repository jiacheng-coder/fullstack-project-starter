// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 01
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'https://jsonplaceholder.typicode.com/',
  //         changeOrigin: true, // 后端配置 Cors 时设置
  //         rewrite: path => path.replace(/^\/api/, ''), // 后端接口无 api前缀时设置
  //       },
  //     },
  //   },
  // },

  // 02
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'https://jsonplaceholder.typicode.com/',
  //       changeOrigin: true, // 后端配置 COROS 时设置
  //     },
  //   },
  // },

  // 03
  // routeRules: {
  //   '/api/**': {
  //     proxy: 'https://jsonplaceholder.typicode.com/**', // test api
  //     // production api
  //   },
  // },

  // 04
  runtimeConfig: {
    // myProxyUrl: 'https://jsonplaceholder.typicode.com/',
    myProxyUrl: 'http://localhost:8080',
  },
})
