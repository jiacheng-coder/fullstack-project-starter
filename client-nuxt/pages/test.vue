<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <input data-1p-ignore placeholder="username" type="text" v-model="username">
      <input data-1p-ignore placeholder="password" type="text" v-model="password">
      <button>login</button>
    </form>
    <p>Amount of calls: {{ callCount }}</p>
    <p>Did it work {{ didItWork }}</p>
  </div>
</template>

<script setup lang="ts">
const callCount = ref(0)
const didItWork = ref(true)

const username = ref('')
const password = ref('')
const userInfo = computed(() => ({
  username: username.value,
  password: password.value
}))

// method 1
// function handleSubmit() {
//   try {
//     const data = $fetch('/api/login', {
//       method: 'POST',
//       body: userInfo.value,
//       onResponse() {
//         callCount.value++
//       }
//     })
//   } catch (error) {
//     alert(error)
//   }
// }

// method 2
// const { data, error, execute } = useFetch('/api/login', {
//   method: 'POST',
//   body: userInfo.value,
//   onResponse() {
//     callCount.value++
//   }
// })
// async function handleSubmit() {
//   await execute()
//   if (!error.value) {
//     didItWork.value = false
//   }
// }

// wrong method

async function handleSubmit() {
  const { error } = await useFetch('/api/login', {
    method: 'POST',
    body: userInfo.value,
    onResponse() {
      callCount.value++
    }
  })
  if (!error.value) {
    didItWork.value = false
  }
}
</script>

<style scoped>
</style>
