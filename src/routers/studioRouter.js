import express from "express"
import { sdCnEdit, sdComments, sdDash, sdDeleteVideo, sdPostEditVideo, sdGetEditVideo, sdGetUpload, sdMyvideos, sdPostUpload} from "../controllers/studioControllers"
import { uploadVideo } from "../middlewares"
import routes from "../routes"

const studioRouter = express.Router()

//STUDIO CHANNEL HOME
studioRouter.get(routes.sdDash(), sdDash)

//STUDIO CHANNEL COMMENTS
studioRouter.get(routes.sdComments(), sdComments)

//STUDIO CHANNEL EDIT VIDEO
studioRouter.get(routes.sdEditVideo(), sdGetEditVideo)
studioRouter.post(routes.sdEditVideo(), sdPostEditVideo)

//STUDIO CHANNEL DELETE VIDEO
studioRouter.get(routes.sdDeleteVideo(), sdDeleteVideo)

//STUDIO CHANNEL MYVIDEOS
studioRouter.get(routes.sdMyVideos(), sdMyvideos)

//STUDIO CHANNEL UPLOAD VIDEO
studioRouter.get(routes.sdUpload(), sdGetUpload)
studioRouter.post(routes.sdUpload(),uploadVideo, sdPostUpload)

//STUDIO CHANNEL EDIT
studioRouter.get(routes.sdCnEdit(), sdCnEdit)

export default studioRouter