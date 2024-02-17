<template>
  <div>
    <h1>Users</h1>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/users'))
</script>

<style scoped>
</style>  
