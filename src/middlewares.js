import routes from "./routes";
import multer from "multer"
import User from "./models/User"
import Channel from "./models/Channel"

const multerVideo = multer({dest:'uploads/videos/'})

export const localMiddleware = async(req,res,next) => {
    res.locals.siteName = "JamesTube";
    res.locals.routes = routes
    if(req.user){
        res.locals.channel = await Channel.findById(req.user.channel._id)
        res.locals.user=await User.findById(req.user._id).populate('channel') || null     
        if(req.user.userColor==0){
            res.locals.userColor="#ff99cc"
        }
        if(req.user.userColor==1){
            res.locals.userColor="#cccc00"
        }
        if(req.user.userColor==2){
            res.locals.userColor="#0066cc"
        }
        if(req.user.userColor==3){
            res.locals.userColor="#009933"
        }
        if(req.user.userColor==4){
            res.locals.userColor="#6600cc"
        }
        if(req.user.userColor==5){
            res.locals.userColor="#660033"
        }
        if(req.user.userColor==6){
            res.locals.userColor="#66ff99"
        }
        if(req.user.userColor==7){
            res.locals.userColor="#ff99cc"
        }
        if(req.user.userColor==8){
            res.locals.userColor="#009999"
        }
        if(req.user.userColor==9){
            res.locals.userColor="#cc3300"
        }
    }

    res.locals.img={
        join:"/img/laptop.jpg"
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