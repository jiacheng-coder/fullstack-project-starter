import { onBeforeMount, onMounted } from 'vue'

export function useIntervalFn(cb: () => void, interval: number = 1000) {
  let timer: ReturnType<typeof setInterval> | null = null
  function clean() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }
  onMounted(() => {
    if (interval < 0) return
    timer = setInterval(cb, interval)
  })
  onBeforeMount(() => {
    clean()
  })
}
