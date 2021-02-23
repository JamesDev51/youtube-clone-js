import express from "express"
import { library, myVideos, subscriptions, trending } from "../controllers/videoControllers"
import routes from "../routes"

const feedRouter = express.Router()

//my videos
feedRouter.get(routes.myvideos, myVideos)

//trend videos
feedRouter.get(routes.trending,trending)

//subscribing channles' videos
feedRouter.get(routes.subscriptions, subscriptions)

//saved videos => library
feedRouter.get(routes.library, library)

export default feedRouter