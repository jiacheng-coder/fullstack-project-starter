<template>
  <!-- <pre>
  {{ JSON.stringify(data, null, 2) }}
  </pre> -->
  <n-data-table :columns="columns" :data="data" :bordered="false" />
</template>

<script setup lang="ts">
  import { h, ref, onMounted } from 'vue'
  import { NButton, useMessage, NDataTable } from 'naive-ui'
  import type { DataTableColumns } from 'naive-ui'
  import axios from 'axios'

  function init() {
    // dosomething to init data
    axios
      .get('/api/users')
      // http://localhost:8081/api/courses
      .then(function (response) {
        // handle success
        console.log(response)
        data.value = response.data.data
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .finally(function () {
        // always executed
      })
  }

  onMounted(() => {
    init()
  })

  interface UserData {
    user_id: number
    user_name: string
    user_password: string
    email: string
  }

  const createColumns = ({ play }: { play: (row: UserData) => void }): DataTableColumns<UserData> => {
    return [
      {
        title: '用户ID',
        key: 'user_id',
      },
      {
        title: '用户名',
        key: 'user_name',
      },
      {
        title: '用户密码',
        key: 'user_password',
      },
      {
        title: '邮箱',
        key: 'email',
      },
      {
        title: 'Action',
        key: 'actions',
        render(row) {
          return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              onClick: () => play(row),
            },
            { default: () => 'Play' }
          )
        },
      },
    ]
  }

  const data = ref<UserData[]>([])

  const columns = createColumns({
    play(row: UserData) {
      message.info(`Play ${row.user_name}`)
    },
  })

  const message = useMessage()
</script>
