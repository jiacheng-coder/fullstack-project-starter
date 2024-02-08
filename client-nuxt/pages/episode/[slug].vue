<template>
  <div>
    <h1>{{ data?.title }}</h1>
    <!-- <NuxtImg :src="`${data?.uri}/poster.jpg`" :alt="data?.title" width="960" height="540" sizes="sm:100vw" /> -->
    <p>{{ data?.description }}</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params
const { data } = await useFetch(`/api/episode/${slug}`)
</script>

<style scoped>
</style>
