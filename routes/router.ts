import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUsers } from "../controller/user.ts"

const router = new Router()

router.get("/api/v1/users", getUsers())

export default router;