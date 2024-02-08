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
const { data } = await useFetch('/api/users', {
  server: false
})
</script>


<style scoped>
</style>
