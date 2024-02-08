<template>
  <div>
    <!-- 直接从 store 中访问 state -->
    <div>Current Count: {{ counter.count }}</div>
    <button @click="() => {
        counter.increment()
      }
      ">
      +1
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counter'

const counter = useCounterStore()
</script>

<style scoped>
</style>
