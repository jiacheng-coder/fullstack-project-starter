<template>
  <section>
    <h2>子组件</h2>
    <input type="text" :value="content" @input="handleInput" />
  </section>
</template>

<script setup lang="ts">
  const props = defineProps({
    content: String,
  })
  const emits = defineEmits(['update:content'])
  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement
    emits('update:content', target.value)
  }
</script>

<style scoped></style>
