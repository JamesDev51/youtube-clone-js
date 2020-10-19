import routes from "../routes"
import {channels} from "../db"



export const search = (req,res) => {
    res.send("search")
}

export const home = (req,res) => {
    res.render("home",{channels})
}
export const videoDetail = (req,res) => {
    res.send("videoDetail")
}

export const myVideos = (req,res) => {
    res.send("my videos")
}

export const trending = (req,res) => {
    res.send("trending")
}

export const subscriptions = (req,res) => {
    res.send("subscriptions")
}

export const library = (req,res) => {
    res.send("library")
}

export const likelist = (req,res) => {
    res.send("likelist")
}

export const watchlist = (req,res) => {
    res.send("watchlist")
}
