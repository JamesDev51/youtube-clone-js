import express from "express"
import { cnAbout, cnCommunity, cnVideos } from "../controllers/channelControllers"
import routes from "../routes"

const channelRouter = express.Router()

channelRouter.get(routes.cnVideos(), cnVideos)
channelRouter.get(routes.cnCommunity(),cnCommunity)
channelRouter.get(routes.cnAbout(),cnAbout)


export default channelRouter