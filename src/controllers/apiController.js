import routes from "../routes"
import Video from "../models/Video"
import User from "../models/User"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Reply from "../models/Reply"

//VIDEO
//video delete
export const deleteVideo = async(req,res)=>{
    const {params:{id:videoId},user:{channel:channelId}}=req;

    try{

        await Video.findByIdAndRemove(videoId)
        await Comment.deleteMany({video:videoId})
        res.redirect(routes.sdMyVideos(channelId))
    }
    catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
    
}

//register view
export const postRegisterView = async(req,res)=>{
    const {params:{id:videoId}}=req
    try{
        const video = await Video.findById(videoId)
        video.views+=1
        video.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)

    }finally{
        res.end()
    }
}

//VIDEO LIKE 
//video like
export const postRegisterLikeVD = async(req,res)=>{
    const {params:{id:videoId},user:{_id:userId}}=req
    try{
        const video = await Video.findById(videoId)
        const user= await User.findById(userId)
        video.likelist.push(userId)
        video.save()
        user.likelist.push(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//video dislike
export const postRegisterDislikeVD = async(req,res)=>{
    const {params:{id:videoId},user:{_id:userId}}=req
    try{
        const video = await Video.findById(videoId)
        const user= await User.findById(userId)
        video.dislikelist.push(userId)
        video.save()
        user.dislikelist.push(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//cancle video like 
export const postCancleLikeVD = async(req,res)=>{
    const {params:{id:videoId},user:{_id:userId}}=req
    try{
        const video = await Video.findById(videoId)
        const user= await User.findById(userId)
        video.likelist.remove(userId)
        video.save()
        user.likelist.remove(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//cancel video dislike
export const postCancleDislikeVD= async(req,res)=>{
    const {params:{id:videoId},user:{_id:userId}}=req
    try{
        const video = await Video.findById(videoId)
        const user= await User.findById(userId)
        video.dislikelist.remove(userId)
        video.save()
        user.dislikelist.remove(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//VIDEO SAVE
//video save
export const postSaveVideo = async(req,res)=>{
    const {params:{id:videoId},user:{id:userId}}=req
    try{
        const user = await User.findById(userId)
        user.watchlist.push(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//cancle video save
export const postCancelVideo = async(req,res)=>{
    const {params:{id:videoId},user:{id:userId}}=req
    try{
        const user = await User.findById(userId)
        user.watchlist.remove(videoId)
        user.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//VIDEO COMMENT
//add comment
export const postAddComment = async(req,res) => {
    const {user:{id:writer},body:{video:video,text}}=req
    try{

        const newComment = await Comment.create({
            writer,text,video
        })
        const user = await User.findById(writer)
        user.comments.push(newComment.id)
        user.save()
        const currentVideo = await Video.findById(video)
        currentVideo.comments.push(newComment.id)
        currentVideo.save()
        res.status(200) 
    }catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//add reply to each comment
export const postAddReply = async(req,res)=>{
    const {user:{_id:writerId,name:writer,channel:channelId},body:{video:video,text,commentId}}=req
    try{
        const newReply = await Reply.create({
            writer,writerId,channelId,text,video,mother:commentId
        })

        const comment = await Comment.findById(commentId)
        comment.replies.push(newReply.id)
        comment.save()
        const user = await User.findById(writerId)
        user.replies.push(newReply.id)
        user.save()
        const currentVideo = await Video.findById(video)
        currentVideo.replies.push(newReply.id)
        currentVideo.save()
        res.status(200) 
    }catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//delete comment
export const deleteComment = async(req,res)=>{
    const {params:{id:commentId},user:{channel:channelId}}=req
    try{
        await Comment.findByIdAndRemove(commentId)
        res.redirect(routes.sdComments(channelId))
        
    }catch(error){
        console.log(error)
        res.redirect(routes.home)
    }
}

//comment like
export const postRegisterLikeCM = async(req,res)=>{
    const {user:{_id:userId},body:{commentId}}=req
    try{
        const comment = await Comment.findById(commentId)
        comment.likelist.push(userId)
        comment.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//comment dislike
export const postRegisterDislikeCM = async(req,res)=>{
    const {user:{_id:userId},body:{commentId}}=req
    try{
        const comment = await Comment.findById(commentId)
        comment.dislikelist.push(userId)
        comment.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//cancel comment like
export const postCancleLikeCM = async(req,res)=>{
    const {user:{_id:userId},body:{commentId}}=req
    try{
        const comment = await Comment.findById(commentId)
        comment.likelist.remove(userId)
        comment.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//cancle comment dislike
export const postCancleDislikeCM = async(req,res)=>{
    const {user:{_id:userId},body:{commentId}}=req
    try{
        const comment = await Comment.findById(commentId)
        comment.dislikelist.remove(userId)
        comment.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}


//CHANNEL SUBSCRIBE
//channel subscribe
export const postSubscribe = async(req,res)=>{
    const {params:{id:channelId},user:{id:userId}}=req
    try{
        const user = await User.findById(userId)
        user.subscribeChannels.push(channelId)
        user.save()
        const channel = await Channel.findById(channelId)
        channel.subscribers.push(userId)
        channel.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}

//chancle channel subscribe
export const postCancelSubscribe = async(req,res)=>{
    const {params:{id:channelId},user:{id:userId}}=req
    try{
        const user = await User.findById(userId)
        user.subscribeChannels.remove(channelId)
        user.save()
        const channel = await Channel.findById(channelId)
        channel.subscribers.remove(userId)
        channel.save()
        res.status(200)
    }
    catch(error){
        console.log(error)
        res.status(400)
    }finally{
        res.end()
    }
}