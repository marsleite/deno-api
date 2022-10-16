import { Application } from "https://deno.land/x/oak/mod.ts"

const app = new Application()

app.use((ctx) => {
  ctx.response.body = "hello world"
})

console.log("running on server")

await app.listen({ port: 8080 })