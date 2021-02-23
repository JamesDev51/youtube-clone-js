import routes from "../routes"
import Video from "../models/Video"
import User from "../models/User"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"

//channel videos
export const cnVideos = async(req,res)=>{
    const {params:{id}}=req;
    try{
        const cnVideos = await Video.find({channel:id}).populate('channel')
        const channel = await Channel.findOne({_id:id})
        let channelId = channel.id
        let channels
        let subscribeToken="no"
        if (req.user){
            const {user:{subscribeChannels,id:userId}}=req;
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
            let subscribe = channel.subscribers.includes(userId)
            if(subscribe){
                subscribeToken="yes"
            }else{
                subscribeToken="no"
            }

        }
        res.render("channel/cnVideos",{pageTitle:channel.name,channel,cnVideos,channels,subscribeToken,channelId})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnVideos",{pageTitle:channel.name,channel,videos,channels,subscribeToken,channelId})
        
    }
}

//channel community - not prepared
export const cnCommunity = async(req,res)=>{
    const {params:{id}}=req;
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channel = await Channel.findOne({_id:id})
        let channelId = channel.id
        let channels
        let subscribeToken="no"
        if (req.user){
            const {user:{subscribeChannels,id:userId}}=req;
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
            let subscribe = channel.subscribers.includes(userId)
            if(subscribe){
                subscribeToken="yes"
            }else{
                subscribeToken="no"
            }
        }
        res.render("channel/cnCommunity",{pageTitle:channel.name,channel,videos,channels,subscribeToken,channelId})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnCommunity",{pageTitle:channel.name,channel,videos,channels,subscribeToken,channelId})
        
    }
}

//channel about (description)
export const cnAbout = async(req,res)=>{
    const {params:{id}}=req;
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channel = await Channel.findOne({_id:id})
        let channelId = channel.id
        let channels
        let subscribeToken="no"
        if (req.user){
            const {user:{subscribeChannels,id:userId}}=req;
            channels = await Channel.find({'_id':{$in:subscribeChannels}})
            let subscribe = channel.subscribers.includes(userId)
            if(subscribe){
                subscribeToken="yes"
            }else{
                subscribeToken="no"
            }
        }
        res.render("channel/cnAbout",{pageTitle:channel.name,channel,videos,channels,subscribeToken,channelId})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnAbout",{pageTitle:channel.name,channel,videos,channels,subscribeToken,channelId})
        
    }
}