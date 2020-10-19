import express from "express"
import { library, myVideos, subscriptions, trending } from "../controllers/videoControllers"
import routes from "../routes"

const feedRouter = express.Router()

feedRouter.get(routes.myvideos, myVideos)
feedRouter.get(routes.trending,trending)
feedRouter.get(routes.subscriptions, subscriptions)
feedRouter.get(routes.library, library)

export default feedRouter