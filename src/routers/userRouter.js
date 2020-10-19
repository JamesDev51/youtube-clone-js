import express from "express"
import { changePassword, editProfile } from "../controllers/userControllers"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword)

export default userRouter