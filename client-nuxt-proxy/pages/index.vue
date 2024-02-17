<template>
  <div>
    <h1>Index Page</h1>
    <div v-if="data">
      Data: {{ data }}
    </div>
    <a href="/api/users">EndPoint</a>
  </div>
</template>

<script setup lang="ts">
// const { data } = await useFetch('/api/users', {
//   server: true
// })
const { data } = await useFetch('/api/users', {
  server: false
}) // server default value is true
</script>
