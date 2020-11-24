import routes from "./routes";
import multer from "multer"

const multerVideo = multer({dest:'uploads/videos/'})

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "JamesTube";
    res.locals.routes = routes
    res.locals.channel = {
        isAuthenticated:true,
        id:1,
        name: "min tec",
        subscribers:"11.5만",
        avatarUrl:"/img/1.jpg",
        coverUrl:"/img/2.jpg"
        
    }
    res.locals.domain=`http://localhost:2000`
    next();
} 

export const uploadVideo = multerVideo.single("videoFile")