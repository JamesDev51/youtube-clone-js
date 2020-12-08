import express from "express"
import { changePassword, editProfile, myPage } from "../controllers/userControllers"
import { onlyPrivate } from "../middlewares"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.myPage,onlyPrivate,myPage)
userRouter.get(routes.editProfile,onlyPrivate, editProfile)
userRouter.get(routes.changePassword,onlyPrivate, changePassword)

export default userRouter