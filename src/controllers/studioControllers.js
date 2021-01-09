import routes from "../routes"
import User from "../models/User"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"

//global function or variable
const domain = "https://evening-journey-26910.herokuapp.com/"

export const sdDash = (req,res)=>{
    res.render("studio/sdDash")
}
export const sdMyvideos = async(req,res) =>{
    const {user:{channel}}=req;
    const videos = await Video.find({channel}).sort({_id:-1})
    res.render("studio/sdMyvideos",{videos})
}

export const sdComments = async(req,res) => {
    const {user:{id:userId}}=req
    try{
        const comments = await Comment.find({'writer':{$in:userId}}).populate('video')
        
        res.render("studio/sdComments", {comments})
    }catch(error){
        console.log(error)
        res.render("studio/sdComments",{comments})
    }
}
export const sdGetCnEditImages = (req,res)=>{
    try{
        res.render("studio/sdEditImages")
        
    }catch(error){
        console.log(error)
        res.render("studio/sdEditImages")
    }
}
export const sdPostCnEditImages = async(req,res)=>{
    const {user,files:{avatar,cover,watermark}}=req;
    try{
        const channel = await Channel.findById(user.channel)
        const avatarUrl = avatar ? `${avatar[0].location}` : null
        const coverUrl = cover ? `${cover[0].location}` : null
        const watermarkUrl = watermark ? `${watermark[0].location}` : null
        await User.findByIdAndUpdate(user._id,{
            avatarUrl : avatar ? avatarUrl : user.avatarUrl
        })
        await Channel.findByIdAndUpdate(channel._id,{
            avatarUrl : avatar ? avatarUrl : channel.avatarUrl,
            coverUrl : cover ? coverUrl : channel.coverUrl,
            watermarkUrl : watermark ? watermarkUrl : channel.watermarkUrl
        })
        res.redirect(`${routes.sdEditImages(user.channel)}`)
    }catch(error){
        console.log(error)
        res.redirect(`${routes.sdEditImages(user.channel)}`)
    }
}
export const sdGetCnEditDetails = (req,res)=>{
    try{
        res.render("studio/sdEditDetails")
    }
    catch(error){
        console.log(error)
        res.render("studio/sdEditDetails")
    }
}

export const sdPostCnEditDetails = async(req,res) => {
    const {user, body:{cnName,cnDescription}}=req
    try{
        const channel = await Channel.findById(user.channel)
        await Channel.findByIdAndUpdate(channel._id,{
            name: cnName ? cnName : channel.name,
            description: cnDescription ? cnDescription : channel.description
        })
        res.redirect(`${routes.sdEditDetails(user.channel)}`)
    }catch(error){
        console.log(error)
        res.redirect(`${routes.sdEditDetails(user.channel)}`)
    }
}

export const sdGetUpload = (req,res)=>{
    res.render("studio/sdUpload",{pageTitle:"동영상 업로드"})
}
export const sdPostUpload = async(req,res)=>{
    const {body:{title,description},file:{location},user:{channel}}=req;
    
    try{
        const newVideo = await Video.create({
            videoFile:location,
            title,
            description,
            channel
        })
        req.user.videos.push(newVideo._id)
        req.user.save();
        res.redirect(routes.videoDetail(newVideo._id))
    }
    catch(error){
        console.log(error)
        res.redirect(routes.videoDetail(newVideo._id))
        
    }
}

export const sdRecord = (req,res) => {
    const {user}=req
    try{
        res.render("studio/sdRecord")
    }catch(error){
        console.log(error)
        res.red
    }
}
export const sdStreaming = (req,res) => {
    
    console.log("hi")
}


export const sdGetEditVideo = async(req,res)=>{
    const {params:{id}}=req;
    try{
        const video = await Video.findById({_id:id})
        res.render("studio/sdEditVideo",{video})
    }
    catch(error){
        console.log(error)
        res.render("studio/sdEditVideo",{video})
    }
}
export const sdPostEditVideo = async(req,res)=>{
    const {params:{id},body:{title,description}}=req;
    try{
        await Video.findOneAndUpdate({_id:id},{title,description})
        res.redirect(routes.videoDetail(id))
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}
