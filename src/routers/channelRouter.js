import express from "express"
import { cnAbout, cnCommunity, cnVideos } from "../controllers/channelControllers"
import routes from "../routes"

const channelRouter = express.Router()

//channel videos
channelRouter.get(routes.cnVideos(), cnVideos)

//channel community - not prepared
channelRouter.get(routes.cnCommunity(),cnCommunity)

//channel about (description)
channelRouter.get(routes.cnAbout(),cnAbout)

export default channelRouter