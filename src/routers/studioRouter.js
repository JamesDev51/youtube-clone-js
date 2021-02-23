import express from "express"
import {  sdComments, sdDash, sdDeleteVideo, sdPostEditVideo, sdGetEditVideo, sdGetUpload, sdMyvideos, sdPostUpload, sdGetCnEditImages, sdGetCnEditDetails, sdPostCnEditImages, sdPostCnEditDetails, sdRecord} from "../controllers/studioControllers"
import { onlyPrivate,  uploadBranding,uploadVideo,  } from "../middlewares"
import routes from "../routes"


const studioRouter = express.Router()

//studio home
studioRouter.get(routes.sdDash(),onlyPrivate, sdDash)

//studio comments
studioRouter.get(routes.sdComments(),onlyPrivate, sdComments)

//studio edit video (edit or delete)
studioRouter.get(routes.sdEditVideo(),onlyPrivate, sdGetEditVideo)
studioRouter.post(routes.sdEditVideo(),onlyPrivate, sdPostEditVideo)

//studio my videos
studioRouter.get(routes.sdMyVideos(),onlyPrivate, sdMyvideos)

//studio upload videos
studioRouter.get(routes.sdUpload(),onlyPrivate, sdGetUpload)
studioRouter.post(routes.sdUpload(),onlyPrivate,uploadVideo, sdPostUpload)

//studio record videos
studioRouter.get(routes.sdRecord(),onlyPrivate,sdRecord)

//studio streaming videos - not prepared
studioRouter.get(routes.sdStreaming(),onlyPrivate,sdRecord)

//studio channel edit (branding)
studioRouter.get(routes.sdEditImages(),onlyPrivate, sdGetCnEditImages)
studioRouter.post(routes.sdEditImages(),onlyPrivate, uploadBranding,sdPostCnEditImages)

studioRouter.get(routes.sdEditDetails(),onlyPrivate, sdGetCnEditDetails)
studioRouter.post(routes.sdEditDetails(),onlyPrivate, sdPostCnEditDetails)

export default studioRouter