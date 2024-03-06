<template>
  <main>
    <AppTitle :title="title" />
    <input type="text" v-model="title" />
  </main>
</template>

<script setup lang="ts">
  const title = ref('title')
</script>

<style scoped></style>
