import routes from "../routes"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"

export const cnDetail = async (req,res)=>{
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channels = await Channel.find({})
        res.render("channel/cnDetail",{videos,channels})
    }catch(error){
        console.log(error)
        res.render("channel/cnDetail",{videos,channels})
    }
}
export const cnFeature = async(req,res)=>{
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channels = await Channel.find({})
        res.render("channel/cnFeature",{videos,channels})
       
    }catch(error){
        console.log(error)
        res.render("channel/cnFeature",{videos,channels})
       
    }
}
export const cnVideos = async(req,res)=>{
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channels = await Channel.find({})
        res.render("channel/cnVideos",{videos,channels})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnVideos",{videos,channels})
        
    }
}
export const cnCommunity = async(req,res)=>{
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channels = await Channel.find({})
        res.render("channel/cnCommunity",{videos,channels})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnCommunity",{videos,channels})
        
    }
}
export const cnAbout = async(req,res)=>{
    try{
        const videos = await Video.find({}).sort({id:-1})
        const channels = await Channel.find({})
        res.render("channel/cnAbout",{videos,channels})
        
    }catch(error){
        console.log(error)
        res.render("channel/cnAbout",{videos,channels})
        
    }
}