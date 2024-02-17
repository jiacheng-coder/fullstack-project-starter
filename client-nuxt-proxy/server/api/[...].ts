import { joinURL } from 'ufo'

export default defineEventHandler(async event => {
  // 1. get the runtimeconfig proxy url
  const proxyUrl = useRuntimeConfig().myProxyUrl
  // 2. check the path
  // const path = event.path.replace(/^\/api\//, '') // api/users -> users
  // localhost:8080/api/users
  const target = joinURL(proxyUrl, event.path)
  // 3. proxy it!
  return proxyRequest(event, target)
})
