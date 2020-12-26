import express from "express"
import {  sdComments, sdDash, sdDeleteVideo, sdPostEditVideo, sdGetEditVideo, sdGetUpload, sdMyvideos, sdPostUpload, sdGetCnEditImages, sdGetCnEditDetails, sdPostCnEditImages, sdPostCnEditDetails, sdRecord} from "../controllers/studioControllers"
import { onlyPrivate,  uploadBranding,uploadVideo,  } from "../middlewares"
import routes from "../routes"


const studioRouter = express.Router()

//STUDIO CHANNEL HOMES
studioRouter.get(routes.sdDash(),onlyPrivate, sdDash)

//STUDIO CHANNEL COMMENTS
studioRouter.get(routes.sdComments(),onlyPrivate, sdComments)

//STUDIO CHANNEL EDIT VIDEO
studioRouter.get(routes.sdEditVideo(),onlyPrivate, sdGetEditVideo)
studioRouter.post(routes.sdEditVideo(),onlyPrivate, sdPostEditVideo)


//STUDIO CHANNEL MYVIDEOS
studioRouter.get(routes.sdMyVideos(),onlyPrivate, sdMyvideos)

//STUDIO CHANNEL UPLOAD VIDEO
studioRouter.get(routes.sdUpload(),onlyPrivate, sdGetUpload)
studioRouter.post(routes.sdUpload(),onlyPrivate,uploadVideo, sdPostUpload)

studioRouter.get(routes.sdRecord(),onlyPrivate,sdRecord)


studioRouter.get(routes.sdStreaming(),onlyPrivate,sdRecord)

//STUDIO CHANNEL EDIT
studioRouter.get(routes.sdEditImages(),onlyPrivate, sdGetCnEditImages)
studioRouter.post(routes.sdEditImages(),onlyPrivate, uploadBranding,sdPostCnEditImages)

studioRouter.get(routes.sdEditDetails(),onlyPrivate, sdGetCnEditDetails)
studioRouter.post(routes.sdEditDetails(),onlyPrivate, sdPostCnEditDetails)


export default studioRouter