import express from "express"
import { cnAbout, cnCommunity, cnDetail, cnFeature, cnVideos } from "../controllers/channelControllers"
import routes from "../routes"

const channelRouter = express.Router()

channelRouter.get(routes.cnDetail(), cnDetail)
channelRouter.get(routes.cnFeature(),cnFeature)
channelRouter.get(routes.cnVideos(), cnVideos)
channelRouter.get(routes.cnCommunity(),cnCommunity)
channelRouter.get(routes.cnAbout(),cnAbout)


export default channelRouter