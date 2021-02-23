import express from "express"
import { likelist, watchlist } from "../controllers/videoControllers"
import routes from "../routes"

const playlistRouter = express.Router()

//like videos list
playlistRouter.get(routes.likelist, likelist)

//watchlist videos list
playlistRouter.get(routes.watchlist, watchlist)

export default playlistRouter