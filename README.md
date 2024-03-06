# 全栈入门系列课

> start at 2024.1.26

【bilibili】https://www.bilibili.com/video/BV1u64y1w75T

- api 后端项目【Nestjs + Mysql + Redis】
- client 前端项目【Vue3 + Tailwind + NaiveUI + Pinia】
- client-nuxt SSR 渲染的前端项目【Nuxt3 + Tailwind + NaiveUI + Pinia】
- client-nuxt-proxy 临时项目，讲解 Nuxt 代理最佳实践

## 1. NestJS 起步

## 2. Vue 相关配置

## 3. 前后端联动实现表格渲染

## 04. 前后端联动实现表格渲染(补充)

## 05. Nuxtjs 入门 + Nuxtjs 代理最佳实践

- 什么是 Nuxtjs? - 基于 Vue 构建的 SSR 框架（类比 Nextjs 是基于 React 构建的 SSR 框架）
- 什么是 SSR（Server-side Rendering） 渲染 - 充分利用服务端机器的能力，在服务端替代原先 SPA 渲染方式下的许多工作
- 创建 Nuxt.js 项目并讲解其核心功能 core feature
- Nuxt.js 代理配置最佳实践

## [Vue3 精通] 20 分钟搞清楚组件通信
- 父传子(子组件使用父组件的 state && function): 
  - defineProps
- 子传父(父组件使用子组件的 state && function): 
  - defineExpose + ref 
    - 父组件控制子组件内容的显示和隐藏(案例 1)  
    - 实际开发中在 Markdown 编辑器向父组件传值中使用(案例 2)
  - v-model: 在子组件中直接修改父组件数据

- 祖孙通信: provide && inject
- 兄弟通信: 通过父组件做中转可以实现，同时也可以使用 pinia 做全局状态管理
- 全局通信: pinia
