import express from "express"
import { join, getNewJoin, postNewJoin, getSocialJoin, postSocialJoin, postLogin } from "../controllers/userControllers"
import { onlyPublic } from "../middlewares"
import routes from "../routes"

const joinRouter = express.Router()

joinRouter.get(routes.remain,onlyPublic,join)
joinRouter.get(routes.newJoin, onlyPublic,getNewJoin)
joinRouter.post(routes.newJoin,onlyPublic, postNewJoin, postLogin)
joinRouter.get(routes.socialJoin,onlyPublic, getSocialJoin)
joinRouter.post(routes.socialJoin, onlyPublic,postSocialJoin)

export default joinRouter