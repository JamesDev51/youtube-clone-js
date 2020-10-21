import routes from "../routes"
import {channels,videos} from "../db"

export const cnDetail = (req,res)=>{
    res.render("channel/cnDetail",{channels, videos})
}
export const cnFeature = (req,res)=>{
    res.render("channel/cnFeature",{channels, videos})
}
export const cnVideos = (req,res)=>{
    res.render("channel/cnVideos",{channels, videos})
}
export const cnCommunity = (req,res)=>{
    res.render("channel/cnCommunity",{channels, videos})
}
export const cnAbout = (req,res)=>{
    res.render("channel/cnAbout",{channels, videos})
}