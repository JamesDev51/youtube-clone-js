import express from "express"
import routes from "../routes"
import { home } from "../controllers/videoControllers"
import { getJoin, getLogin, logout, postJoin, postLogin } from "../controllers/userControllers"

const globalRouter = express.Router()

globalRouter.get(routes.home, home)
globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)
globalRouter.get(rotues.login, getLogin);
globalRouter.post(routes.login,postLogin)
globalRouter.get(routes.logout,logout)


export default globalRouter