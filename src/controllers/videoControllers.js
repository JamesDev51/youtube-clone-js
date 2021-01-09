import routes from "../routes"
import Video from "../models/Video"
import User from "../models/User"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Reply from "../models/Reply"
import Trending from "../models/Trending"




export const home = async (req,res) => {
    try{
        let channels=null
        if(req.user){
            const {user:{subscribeChannels}}=req;
             channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        const videos = await Video.find({}).populate('channel').sort({_id:-1})
        res.render("home",{pageTitle:"홈", videos,channels})

    }
    catch(error){
        console.log(error)
        res.render("home",{pageTitle:"홈",videos,channels})
        
    }
}

export const search = async(req,res) => {
    const {query:{term}}=req
    let videos = []
    let channelFounds=[]
    let channels=null
    try{
        if(req.user){
            const {user:{subscribeChannels}}=req;
             channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        videos= await Video.find({title:{$regex:term, $options:"i"}}).populate('channel')
        channelFounds= await Channel.find({name:{$regex:term, $options:"i"}})

        res.render("search",{pageTitle:"검색",channels,videos,channelFounds,term})
    }
    catch(error){
        console.log(error)
        res.render("search",{pageTitle:"검색",channels,videos,channelFounds,term})

    }
}


export const videoDetail = async(req,res) => {
    const{params:{id}}=req;
    try{
        let userId=null
        let channels=null
        if (req.user){
            const {user:{subscribeChannels,id}}=req;
            userId=id
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        const video = await Video.findById(id).populate('channel').populate('user').populate('comments');
        const channelId = video.channel.id
        const nextVideos = await Video.find({}).populate('channel').sort({_id:-1})
        const comments = await Comment.find({video:id}).populate('writer').populate('replies')
        
        let videoToken="no"
        let videoSaveToken="no"
        let subscribeToken="no"

        if(userId){
            const user = await User.findById(userId)
            let likeHave = user.likelist.includes(video.id)
            let dislikeHave = user.dislikelist.includes(video.id)
            if (likeHave){
                videoToken="like"
            }else if(dislikeHave){
                videoToken="dislike"
            }else{
                videoToken="no"
            }

            let watchlist = user.watchlist.includes(video.id)
            if (watchlist){
                videoSaveToken="yes"
            }
            else{
                videoSaveToken="no"
            }

            const channel = await Channel.findById(channelId)
            let subscribe = channel.subscribers.includes(userId)
            if(subscribe){
                subscribeToken="yes"
            }else{
                subscribeToken="no"
            }

        }

        res.render("videoDetail",{videoTitle:video.title,video,channels,nextVideos,comments,videoToken,videoSaveToken,subscribeToken,channelId})}
        catch(error){
            console.log(error)
            res.render("videoDetail",{videoTitle:video.title,video,channels,nextVideos,comments,videoToken,videoSaveToken,subscribeToken,channelId})
            
    }
}

export const myVideos = async(req,res) => {
    try{
        let channels=null
        let myVideos=null
        if(req.user){
            const {user:{channel:{_id},subscribeChannels}}=req;
            myVideos = await Video.find({channel:_id}).populate('channel').sort({_id:-1})
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        res.render("feed/fdMyvideos",{pageTitle:"내 비디오",channels, myVideos})
    }catch(error){
        console.log(error)
        res.render("feed/fdMyvideos",{pageTitle:"내 비디오",channels, myVideos})
    }
}

export const trending = async(req,res) => {
    
    try{
        let channels=null
        if(req.user){
            const {user:{subscribeChannels}}=req;
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        const videos = await Video.find({}).populate('channel').sort({_id:-1})
        res.render("feed/fdTrending",{pageTitle:"인기",videos,channels})
        
    }catch(error){
        console.log(error)
        res.render("feed/fdTrending",{pageTitle:"인기",videos,channels})
    }
}

export const subscriptions = async(req,res) => {
    try{
        let channels=null
        let videos=null
        if(req.user){
            const {user:{channel:{_id},subscribeChannels}}=req;
            videos = await Video.find({'channel':{$in:subscribeChannels}}).populate('channel').sort({_id:-1})
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        res.render("feed/fdSubscriptions",{pageTitle:"구독",channels, videos})
    }catch(error){
        console.log(error)
        res.render("feed/fdSubscriptions",{pageTitle:"구독",channels, videos})
    }
}

export const library = async(req,res) => {
    try{
        let channels=null
        let videos=null
        if(req.user){
            const {user:{channel:{_id},subscribeChannels}}=req;
            videos = await Video.find({channel:_id}).populate('channel').sort({_id:-1})
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        res.render("feed/fdLibrary",{pageTitle:"보관함",channels, videos})

    }catch(error){
        console.log(error)
        res.render("feed/fdLibrary",{pageTitle:"보관함",channels, videos})
        
    }
}

export const likelist = async(req,res) => {
    try{
        let channels=null
        let videos=null
        if(req.user){
            const {user:{likelist,subscribeChannels}}=req;
            videos = await Video.find({'_id':{$in:likelist}}).populate('channel').sort({_id:-1})
            channels = await Channel.find({'_id':{$in:subscribeChannels}})   
        }
        res.render("playlist/plLikelist",{pageTitle:"좋아요",channels, videos})
    }catch(error){
        console.log(error)
        res.render("playlist/plLikelist",{pageTitle:"좋아요",channels, videos})
        
        
    }
}

export const watchlist = async(req,res) => {
    try{
        let channels=null
        let videos=null
        if(req.user){
            const {user:{watchlist,subscribeChannels}}=req;
            videos = await Video.find({'_id':{$in:watchlist}}).populate('channel').sort({_id:-1})
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
        }
        res.render("playlist/plWatchlist",{pageTitle:"다시보기",channels, videos})
    }catch(error){
        console.log(error)
        res.render("playlist/plWatchlist",{pageTitle:"다시보기",channels, videos})
       
        
    }
}
