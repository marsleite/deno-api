import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUserByid } from "../controller/user.ts"
import { getUsers } from "../controller/user.ts"

const router = new Router()

router.get("/api/v1/users", getUsers)
router.get("/api/v1/user/:id", getUserByid)

export default router;