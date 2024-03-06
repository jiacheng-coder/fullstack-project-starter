<template>
  <section>
    <h2>父组件</h2>
    <h3>数据: {{ content }}</h3>
    <Child :content="content" @update:content="handleContentChange" />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const content = ref('content')

  const handleContentChange = (val: string) => {
    content.value = val
  }
</script>

<style scoped></style>
