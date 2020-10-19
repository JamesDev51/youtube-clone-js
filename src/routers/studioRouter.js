import express from "express"
import { sdCnEdit, sdComments, sdDeleteVideo, sdEditVideo, sdMyvideos, sdUpload, studio } from "../controllers/studioControllers"
import routes from "../routes"

const studioRouter = express.Router()

studioRouter.get(routes.sdUpload, sdUpload)
studioRouter.get(routes.sdUpload, sdMyvideos)
studioRouter.get(routes.sdUpload, sdEditVideo)
studioRouter.get(routes.sdUpload, sdDeleteVideo)
studioRouter.get(routes.sdUpload, sdComments)
studioRouter.get(routes.sdUpload, sdCnEdit)

export default studioRouter