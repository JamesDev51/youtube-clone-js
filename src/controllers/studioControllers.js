import routes from "../routes"
import User from "../models/User"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"

//global function or variable
const domain = "https://jamestube.herokuapp.com"
// const domain = "http://localhost:4000"

//studio home
export const sdDash = (req,res)=>{
    res.render("studio/sdDash")
}

//studio channel videos
export const sdMyvideos = async(req,res) =>{
    const {user:{channel}}=req;
    const videos = await Video.find({channel}).sort({_id:-1})
    res.render("studio/sdMyvideos",{videos})
}

//studio user comments
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

//studio channel branding - edit images
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

//studio channel branding - edit details
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
        let newDescription = cnDescription.replace(/\r\n/gi,"<br>")
        await Channel.findByIdAndUpdate(channel._id,{
            name: cnName ? cnName : channel.name,
            description: cnDescription ? newDescription : channel.description
        })
        res.redirect(`${routes.sdEditDetails(user.channel)}`)
    }catch(error){
        console.log(error)
        res.redirect(`${routes.sdEditDetails(user.channel)}`)
    }
}

//studio upload video
export const sdGetUpload = (req,res)=>{
    res.render("studio/sdUpload",{pageTitle:"동영상 업로드"})
}
export const sdPostUpload = async(req,res)=>{
    const {body:{title,description},file:{location},user:{channel}}=req;
    try{
        console.log(description)
        const newDescription = description.replace(/\r\n/gi,"<br>")
        console.log(newDescription  ,typeof(newDescription))
        const newVideo = await Video.create({
            videoFile:location,
            title,
            description:description? newDescription : description,
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

//studio record video
export const sdRecord = (req,res) => {
    try{
        res.render("studio/sdRecord")
    }catch(error){
        console.log(error)
        res.render("studio/sdRecord")

    }
}

//studio streaming  - not prepared
export const sdStreaming = (req,res) => {
    console.log("hi")
}

//studio edit video
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
        let newDescription = description.replace(/\r\n/gi,"<br>")
        await Video.findOneAndUpdate({_id:id},{title,newDescription})
        res.redirect(routes.videoDetail(id))
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}
