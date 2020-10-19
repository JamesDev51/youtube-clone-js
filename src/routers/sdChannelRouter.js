import express from "express"
import routes from "../routes"
import studioRouter from "./studioRouter"


const sdChannelRouter = express.Router()

sdChannelRouter.use(routes.sdChannel, studioRouter)

export default sdChannelRouter