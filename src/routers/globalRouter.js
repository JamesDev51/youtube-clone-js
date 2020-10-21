import express from "express"
import routes from "../routes"
import { home } from "../controllers/videoControllers"
import { getLogin, logout, postLogin } from "../controllers/userControllers"


const globalRouter = express.Router()

globalRouter.get(routes.home, home)
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login,postLogin)
globalRouter.get(routes.logout,logout)


export default globalRouter