import routes from "../routes"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"

export const sdDash = (req,res)=>{
    res.render("studio/sdDash")
}
export const sdMyvideos = async(req,res) =>{
    const videos = await Video.find({}).sort({_id:-1})
    
    res.render("studio/sdMyvideos",{videos})
}

export const sdComments = (req,res)=>{
    res.render("studio/sdComments")
}
export const sdCnEdit = (req,res)=>{
    res.render("studio/sdCnEdit")
}
export const sdGetUpload = (req,res)=>{
    res.render("studio/sdUpload",{pageTitle:"동영상 업로드"})
}
export const sdPostUpload = async(req,res)=>{
    const {body:{title,description},file:{path},user:{channel}}=req;
    
    try{
        const newVideo = await Video.create({
            videoFile:path,
            title,
            description,
            channel
        })
        res.redirect(routes.videoDetail(newVideo._id))
    }
    catch(error){
        console.log(error)
        res.redirect(routes.videoDetail(newVideo._id))
        
    }
}
export const sdGetEditVideo = async(req,res)=>{
    const {params:{id}}=req;
    
    const video = await Video.findById({_id:id})
    console.log(video)
    res.render("studio/sdEditVideo",{video})
}
export const sdPostEditVideo = async(req,res)=>{
    const {params:{id},body:{title,description}}=req;
    try{
        await Video.findOneAndUpdate({_id:id},{title,description})
        res.redirect(routes.videoDetail(id))
    }catch(error){
        res.redirect(routes.home)
    }
}
export const sdDeleteVideo = async(req,res)=>{
    const {params:{id}}=req;
    const {locals:{channel,domain}}=res;

    try{
        await Video.findOneAndDelete({_id:id})
        res.redirect(`${domain}/studio/channel/${channel.id}/my_videos`)
    }
    catch(error){
        console.log(error)
        res.redirect(routes.home)

    }
    
}