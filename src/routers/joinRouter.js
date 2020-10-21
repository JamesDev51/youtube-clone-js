import express from "express"
import { join, getNewJoin, postNewJoin, getSocialJoin, postSocialJoin } from "../controllers/userControllers"
import routes from "../routes"

const joinRouter = express.Router()

joinRouter.get(routes.remain,join)
joinRouter.get(routes.newJoin, getNewJoin)
joinRouter.post(routes.newJoin, postNewJoin)
joinRouter.get(routes.socialJoin, getSocialJoin)
joinRouter.post(routes.socialJoin, postSocialJoin)

export default joinRouter