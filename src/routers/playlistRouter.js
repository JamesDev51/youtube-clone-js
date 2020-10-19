import express from "express"
import { likelist, watchlist } from "../controllers/videoControllers"
import routes from "../routes"

const playlistRouter = express.Router()

playlistRouter.get(routes.likelist, likelist)
playlistRouter.get(routes.watchlist, watchlist)

export default playlistRouter