import express from "express"
import { onlyPrivate } from "../middlewares"
import routes from "../routes"
import studioRouter from "./studioRouter"


const sdChannelRouter = express.Router()

//studio middle router
sdChannelRouter.use(routes.sdChannel, onlyPrivate,studioRouter)

export default sdChannelRouter