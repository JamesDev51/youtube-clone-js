import express from "express"
import { videoDetail } from "../controllers/videoControllers"

import routes from "../routes"

const videoRouter = express.Router()

videoRouter.get(routes.videoDetail, videoDetail)

export default videoRouter