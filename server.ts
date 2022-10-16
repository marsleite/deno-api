import { Application } from "https://deno.land/x/oak/mod.ts"
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from "./routes/router.ts"

const app = new Application()

const HOST = config().HOST
const PORT = config().PORT

console.log(`running on ${HOST}:${PORT}`)

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen(`${HOST}:${PORT}`)