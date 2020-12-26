import routes from "./routes";
import multer from "multer"
import User from "./models/User"
import Channel from "./models/Channel"

const multerVideo = multer({dest:'uploads/videos/'})
const multerBranding = multer({dest:'uploads/brandings/'})


export const localMiddleware = async(req,res,next) => {
    res.locals.siteName = "JamesTube";
    res.locals.routes = routes
    if(req.user){
        res.locals.user=await User.findById(req.user._id).populate('channel') || null 
    }

    res.locals.img={
        join:"/img/laptop.jpg",
        noneUser:"/img/noneUser.png"
    }

    res.locals.domain=`http://localhost:2000`
    
    next();
} 

export const onlyPublic = (req,res,next)=>{
    if(req.user){
        res.redirect(routes.home)
    }else{
        next()
    }
}

export const onlyPrivate = (req,res,next)=>{
    if(req.user){
        next()
    }else{
        res.redirect(routes.home)
    }
}

export const socialLoginToken = (req,res,next)=>{
    if(req.user.socialLoginToken==false){
        next()
    }else{
        res.redirect(routes.home)
    }
}



export const uploadVideo = multerVideo.single("videoFile")
export const uploadBranding = multerBranding.fields([{name:"avatar",maxCount:1},{name:"cover",maxCount:1},{name:"watermark",maxCount:1}])