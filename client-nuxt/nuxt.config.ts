// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 5173,
  },
  runtimeConfig: {
    myProxyUrl: 'https://jsonplaceholder.typicode.com/',
  },
  modules: [
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  image: {
    domain: 'www.learnwithjason.dev',
  },
})
