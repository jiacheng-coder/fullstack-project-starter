<template>
  <n-message-provider>
    <!-- <n-button type="primary">Click</n-button>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        <g fill="none">
          <path
            d="M21.03 2.97a3.578 3.578 0 0 1 0 5.06l-2.644 2.645a6.45 6.45 0 0 0-1.579-.543L17.94 9L15 6.06L5.062 16a.75.75 0 0 0-.193.333l-1.05 3.85l3.85-1.05A.75.75 0 0 0 8 18.938l1.13-1.13c.114.555.298 1.085.543 1.579l-.612.612a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L15.97 2.97a3.578 3.578 0 0 1 5.06 0zM15.5 11c.293 0 .58.025.86.072l.174.716a2 2 0 0 0 2.413 1.475l.098-.026l.601-.179c.363.467.653.997.854 1.57l-.447.431a2 2 0 0 0-.17 2.699l.142.157l.475.457c-.2.573-.49 1.102-.853 1.57l-.602-.179a2 2 0 0 0-2.485 1.352l-.026.098l-.173.716a5.18 5.18 0 0 1-1.723 0l-.172-.716a2 2 0 0 0-2.413-1.476l-.098.026l-.602.178a5.549 5.549 0 0 1-.853-1.57l.447-.43a2 2 0 0 0 .055-2.827l-.055-.055l-.447-.43c.2-.574.49-1.103.853-1.57l.602.178a2 2 0 0 0 2.485-1.351l.026-.098l.172-.716c.28-.047.569-.072.862-.072zm0 4c-.8 0-1.45.672-1.45 1.5c0 .829.65 1.5 1.45 1.5c.8 0 1.45-.671 1.45-1.5c0-.828-.65-1.5-1.45-1.5zm1.53-10.97l-.97.97L19 7.94l.97-.97a2.078 2.078 0 1 0-2.94-2.94z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
      <h1 class="text-3xl font-bold underline text-red-400">Hello world!</h1>
      <TestPinia /> -->
    <MyTable />
  </n-message-provider>
</template>

<script setup lang="ts">
  import { NButton, NMessageProvider } from 'naive-ui'
  import TestPinia from './components/TestPinia.vue'
  import MyTable from './components/MyTable.vue'
</script>

<style scoped></style>
