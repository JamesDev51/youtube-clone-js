import express from "express"
import { join, getNewJoin, postNewJoin, getSocialJoin, postSocialJoin, postLogin } from "../controllers/userControllers"
import { onlyPublic, socialLoginToken } from "../middlewares"
import routes from "../routes"

const joinRouter = express.Router()

joinRouter.get(routes.remain,onlyPublic,join)
joinRouter.get(routes.newJoin, onlyPublic,getNewJoin)
joinRouter.post(routes.newJoin,onlyPublic, postNewJoin, postLogin)


export default joinRouter