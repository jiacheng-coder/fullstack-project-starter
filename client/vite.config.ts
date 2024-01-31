import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // 本地环境
        changeOrigin: true,
        // 此处的 rewrite 仅当后端配置的接口不添加 api 前缀时使用
        // rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
