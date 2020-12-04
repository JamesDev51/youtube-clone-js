import express from "express"
import { sdCnEdit, sdComments, sdDash, sdDeleteVideo, sdPostEditVideo, sdGetEditVideo, sdGetUpload, sdMyvideos, sdPostUpload} from "../controllers/studioControllers"
import { onlyPrivate, uploadVideo } from "../middlewares"
import routes from "../routes"

const studioRouter = express.Router()

//STUDIO CHANNEL HOME
studioRouter.get(routes.sdDash(),onlyPrivate, sdDash)

//STUDIO CHANNEL COMMENTS
studioRouter.get(routes.sdComments(),onlyPrivate, sdComments)

//STUDIO CHANNEL EDIT VIDEO
studioRouter.get(routes.sdEditVideo(),onlyPrivate, sdGetEditVideo)
studioRouter.post(routes.sdEditVideo(),onlyPrivate, sdPostEditVideo)

//STUDIO CHANNEL DELETE VIDEO
studioRouter.get(routes.sdDeleteVideo(),onlyPrivate, sdDeleteVideo)

//STUDIO CHANNEL MYVIDEOS
studioRouter.get(routes.sdMyVideos(),onlyPrivate, sdMyvideos)

//STUDIO CHANNEL UPLOAD VIDEO
studioRouter.get(routes.sdUpload(),onlyPrivate, sdGetUpload)
studioRouter.post(routes.sdUpload(),onlyPrivate,uploadVideo, sdPostUpload)

//STUDIO CHANNEL EDIT
studioRouter.get(routes.sdCnEdit(),onlyPrivate, sdCnEdit)

export default studioRouter