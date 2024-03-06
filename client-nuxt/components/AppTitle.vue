<template>
  <div></div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
  }>(['title'])

  watch(
    () => props.title,
    // @ts-ignore
    (newVal, oldVal) => {}
  )
</script>

<style scoped></style>
