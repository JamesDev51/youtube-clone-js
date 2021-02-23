import express from "express"
import { join, getNewJoin, postNewJoin, postLogin } from "../controllers/userControllers"
import { onlyPublic } from "../middlewares"
import routes from "../routes"

const joinRouter = express.Router()

//join main 
joinRouter.get(routes.remain,onlyPublic,join)

//new join (local join)
joinRouter.get(routes.newJoin, onlyPublic,getNewJoin)
joinRouter.post(routes.newJoin,onlyPublic, postNewJoin, postLogin)

export default joinRouter