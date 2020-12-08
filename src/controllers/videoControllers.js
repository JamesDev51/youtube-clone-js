import routes from "../routes"
import Video from "../models/Video"
import User from "../models/User"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"




export const home = async (req,res) => {

    try{
        if(req.user){
            const currentUser = await User.findById(req.user._id).populate('channel')
            console.log(currentUser)
        }
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("home",{videos,channels})

    }
    catch(error){
        console.log(error)
        res.render("home",{videos,channels})
        
    }
}

export const search = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("search",{channels,videos})
    }
    catch(error){
        console.log(error)
        res.render("search",{channels,videos})

    }
}

export const videoDetail = async(req,res) => {
    const{
        params:{id}
    }=req;
    try{
        const video = await Video.findById(id).populate('channel');
        const nextVideos = await Video.find({}).populate('channel').sort({_id:-1})
        const channels = await Channel.find({})
        res.render("videoDetail",{pageTitle:video.title,video,channels,nextVideos})}
    catch(error){
        console.log(error)
        res.render("videoDetail",{channels,videos})
    }
}

export const myVideos = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("feed/fdMyvideos",{channels, videos})
    }catch(error){
        console.log(error)
        res.render("feed/fdMyvideos",{channels, videos})
    }
}

export const trending = async(req,res) => {
    try{
        const trendings = await Trending.find({})
        const channels = await Channel.find({})
        res.render("feed/fdTrending",{trendings,channels})
        
    }catch(error){
        console.log(error)
        res.render("feed/fdTrending",{trendings,channels})
    }
}

export const subscriptions = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("feed/fdSubscriptions",{channels, videos})
    }catch(error){
        console.log(error)
        res.render("feed/fdSubscriptions",{channels, videos})
    }
}

export const library = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("feed/fdLibrary",{channels, videos})

    }catch(error){
        console.log(error)
        res.render("feed/fdLibrary",{channels, videos})
        
    }
}

export const likelist = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("playlist/plLikelist",{channels, videos})
        

    }catch(error){
        console.log(error)
        res.render("playlist/plLikelist",{channels, videos})
        
        
    }
}

export const watchlist = async(req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1})
        const channels = await Channel.find({})
        res.render("playlist/plWatchlist",{channels, videos})
        
        
    }catch(error){
        console.log(error)
        res.render("playlist/plWatchlist",{channels, videos})
       
        
    }
}
