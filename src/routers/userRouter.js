import express from "express"
import { getEditProfile,postEditProfile, myPage, getChangePassword, postChangePassword, getSetPassword, postSetPassword } from "../controllers/userControllers"
import { onlyPrivate, uploadAvatar } from "../middlewares"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.myPage,onlyPrivate,myPage)

userRouter.get(routes.editProfile,onlyPrivate, getEditProfile)
userRouter.post(routes.editProfile,onlyPrivate,postEditProfile)

userRouter.get(routes.setPassword,onlyPrivate, getSetPassword)
userRouter.post(routes.setPassword,onlyPrivate, postSetPassword)

userRouter.get(routes.changePassword,onlyPrivate, getChangePassword)
userRouter.post(routes.changePassword,onlyPrivate, postChangePassword)

export default userRouter