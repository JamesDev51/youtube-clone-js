import express from "express"
import { sdCnEdit, sdComments, sdDash, sdDeleteVideo, sdEditVideo, sdMyvideos, sdUpload,  } from "../controllers/studioControllers"
import routes from "../routes"

const studioRouter = express.Router()


studioRouter.get(routes.sdDash(), sdDash)
studioRouter.get(routes.sdComments(), sdMyvideos)
studioRouter.get(routes.sdEditVideo(), sdComments)
studioRouter.get(routes.sdDeleteVideo(), sdCnEdit)
studioRouter.get(routes.sdMyVideos(), sdUpload)
studioRouter.get(routes.sdUpload(), sdDeleteVideo)
studioRouter.get(routes.sdCnEdit(), sdEditVideo)

export default studioRouter