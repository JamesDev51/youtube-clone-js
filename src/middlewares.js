import routes from "./routes";
import multer from "multer"
import multerS3 from "multer-s3"
import aws from "aws-sdk"
import dotenv from "dotenv"
import User from "./models/User"
import Channel from "./models/Channel"

dotenv.config();

const s3 = new aws.S3({
    accessKeyId:process.env.AWS_KEY,
    secretAccessKey:process.env.AWS_PRIVATE_KEY,
    region:"ap-northeast-1"
})

const multerVideo = multer({
    storage:multerS3({
        s3,
        acl:"public-read",
        bucket:"jamestube/video"
    })
})
const multerBranding = multer({
    storage:multerS3({
        s3,
        acl:"public-read",
        bucket:"jamestube/branding"
    })
})

export const uploadVideo = multerVideo.single("videoFile")
export const uploadBranding = multerBranding.fields([{name:"avatar",maxCount:1},{name:"cover",maxCount:1},{name:"watermark",maxCount:1}])

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

    res.locals.domain=`https://evening-journey-26910.herokuapp.com`
    
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


