import express from "express"
import routes from "../routes"
import { home } from "../controllers/videoControllers"
import { getLogin, logout, postLogin } from "../controllers/userControllers"
import { onlyPublic } from "../middlewares"


const globalRouter = express.Router()

globalRouter.get(routes.home, home)

globalRouter.get(routes.login,onlyPublic, getLogin)
globalRouter.post(routes.login,onlyPublic, postLogin)

globalRouter.get(routes.logout,logout)


export default globalRouter